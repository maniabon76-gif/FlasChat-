/* =========================================================
   FlasChat - Backend Node.js
   Mensajería sobre correo Nauta (SMTP/IMAP)
   © 2026 Milkár Lixán Pupo Riverón
   ========================================================= */

'use strict';

const express = require('express');
const nodemailer = require('nodemailer');
const { ImapFlow } = require('imapflow');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json({ limit: '20mb' }));

/* ---------- Variables de entorno ---------- */
const NAUTA_EMAIL = process.env.NAUTA_EMAIL || '';
const NAUTA_PASSWORD = process.env.NAUTA_PASSWORD || '';
const PORT = process.env.PORT || 3000;

if (!NAUTA_EMAIL || !NAUTA_PASSWORD) {
  console.warn('⚠️  Faltan NAUTA_EMAIL o NAUTA_PASSWORD en variables de entorno.');
  console.warn('   El frontend cargará, pero el envío/recepción fallará.');
}

/* ---------- Transporte SMTP Nauta ---------- */
const transporter = nodemailer.createTransport({
  host: 'smtp.nauta.cu',
  port: 25,
  secure: false,
  auth: {
    user: NAUTA_EMAIL,
    pass: NAUTA_PASSWORD
  },
  tls: { rejectUnauthorized: false },
  connectionTimeout: 15000,
  greetingTimeout: 15000
});

/* ---------- API: Enviar mensaje ---------- */
app.post('/api/send', async (req, res) => {
  const { to, text, attach } = req.body || {};

  if (!to || (!text && !attach)) {
    return res.status(400).json({ ok: false, error: 'Faltan parámetros' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return res.status(400).json({ ok: false, error: 'Correo destino inválido' });
  }

  try {
    const mailOptions = {
      from: `"FlasChat" <${NAUTA_EMAIL}>`,
      to,
      subject: `[FlasChat] ${Date.now()}`,
      text: text || '',
      headers: {
        'X-FlaChat': '1',
        'X-FlaChat-Sender': NAUTA_EMAIL
      }
    };

    if (attach && attach.data) {
      const matches = attach.data.match(/^data:(.+);base64,(.+)$/);
      if (matches) {
        mailOptions.attachments = [{
          filename: attach.name || 'adjunto',
          content: matches[2],
          encoding: 'base64',
          contentType: matches[1]
        }];
      }
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('[SMTP OK]', info.messageId, '→', to, attach ? '(con adjunto)' : '');
    res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error('[SMTP ERROR]', err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

/* ---------- Recepción IMAP Nauta ---------- */
let lastMaxUid = 0;

async function fetchNewMessages(sinceUid = 0) {
  const client = new ImapFlow({
    host: 'imap.nauta.cu',
    port: 143,
    secure: false,
    auth: {
      user: NAUTA_EMAIL,
      pass: NAUTA_PASSWORD
    },
    tls: { rejectUnauthorized: false },
    logger: false
  });

  const messages = [];

  try {
    await client.connect();
    const lock = await client.getMailboxLock('INBOX');

    try {
      const uids = await client.search(
        { seen: false, header: { 'X-FlaChat': '1' } },
        { uid: true }
      );

      if (!uids || uids.length === 0) return messages;

      const newUids = sinceUid > 0 ? uids.filter(u => u > sinceUid) : uids;
      if (newUids.length === 0) return messages;

      for await (const msg of client.fetch(
        newUids,
        { envelope: true, source: true, uid: true, flags: true },
        { uid: true }
      )) {
        const raw = msg.source.toString();
        const parts = raw.split(/\r?\n\r?\n/);
        const body = parts.length > 1 ? parts.slice(1).join('\n\n').trim() : raw.trim();

        messages.push({
          uid: msg.uid,
          from: msg.envelope.from?.[0]?.address || 'desconocido',
          subject: msg.envelope.subject || '',
          text: body,
          date: msg.envelope.date?.toISOString() || new Date().toISOString()
        });

        await client.messageFlagsAdd(msg.uid, ['\\Seen'], { uid: true });
      }
    } finally {
      lock.release();
    }

    await client.logout();
  } catch (err) {
    console.error('[IMAP ERROR]', err.message);
    throw err;
  }

  return messages;
}

app.get('/api/inbox', async (req, res) => {
  if (!NAUTA_EMAIL || !NAUTA_PASSWORD) {
    return res.status(503).json({ ok: false, error: 'Cuenta Nauta no configurada' });
  }
  try {
    const messages = await fetchNewMessages(lastMaxUid);
    if (messages.length > 0) {
      lastMaxUid = Math.max(...messages.map(m => m.uid));
    }
    res.json({ ok: true, messages, lastUid: lastMaxUid });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    account: NAUTA_EMAIL ? 'configurada' : 'no configurada',
    lastUid: lastMaxUid,
    timestamp: new Date().toISOString()
  });
});

/* ---------- Servir el frontend ---------- */
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* ---------- Arrancar servidor ---------- */
app.listen(PORT, () => {
  console.log(`✅ FlasChat corriendo en http://localhost:${PORT}`);
  console.log(`   Cuenta Nauta: ${NAUTA_EMAIL || '(no configurada)'}`);
  console.log(`   Endpoints:`);
  console.log(`     GET  /              → frontend FlasChat`);
  console.log(`     GET  /api/health    → estado del backend`);
  console.log(`     POST /api/send      → enviar mensaje`);
  console.log(`     GET  /api/inbox     → recibir mensajes nuevos`);
});

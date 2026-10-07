/**
 * FlasChat · Backend Node.js
 * Envía y recibe mensajes por correo Nauta (SMTP/IMAP)
 *
 * Autor: Milkár Lixán Pupo Riverón
 * Versión: 1.5.0
 * Licencia: Propietaria - Todos los derechos reservados
 */

'use strict';

require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const Imap = require('imap');
const { simpleParser } = require('mailparser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/* ===== Middleware ===== */
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname)));

/* ===== Configuración Nauta ===== */
const NAUTA_USER = process.env.NAUTA_USER || '';
const NAUTA_PASS = process.env.NAUTA_PASS || '';
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.nauta.cu';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '25', 10);
const IMAP_HOST = process.env.IMAP_HOST || 'imap.nauta.cu';
const IMAP_PORT = parseInt(process.env.IMAP_PORT || '143', 10);

/* ===== Health check ===== */
app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    service: 'flaschat-backend',
    version: '1.5.0',
    configured: !!(NAUTA_USER && NAUTA_PASS),
    timestamp: new Date().toISOString()
  });
});

/* ===== Envío de mensajes ===== */
app.post('/api/send', async (req, res) => {
  try {
    const { to, text, attach, sticker } = req.body;

    if (!to || typeof to !== 'string') {
      return res.status(400).json({ ok: false, error: 'Falta el destinatario' });
    }

    if (!NAUTA_USER || !NAUTA_PASS) {
      return res.status(500).json({
        ok: false,
        error: 'Backend no configurado. Revisa el archivo .env'
      });
    }

    /* Construir cuerpo del mensaje */
    let body = text || '';
    if (sticker) {
      body = body || '[Sticker]';
      body += `\n\n[FlasChat-Sticker: ${sticker}]`;
    }

    /* Preparar adjuntos */
    const attachments = [];
    if (attach && attach.data && attach.name) {
      const base64Data = attach.data.split(',')[1] || attach.data;
      attachments.push({
        filename: attach.name,
        content: base64Data,
        encoding: 'base64'
      });
    }

    /* Configurar transporte SMTP */
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: false,
      auth: {
        user: NAUTA_USER,
        pass: NAUTA_PASS
      },
      tls: { rejectUnauthorized: false }
    });

    const info = await transporter.sendMail({
      from: NAUTA_USER,
      to: to,
      subject: 'FlasChat',
      text: body,
      attachments
    });

    console.log('[FlasChat] Mensaje enviado:', info.messageId);
    res.json({ ok: true, messageId: info.messageId });
  } catch (err) {
    console.error('[FlasChat] Error al enviar:', err.message);
    res.status(500).json({ ok: false, error: err.message });
  }
});

/* ===== Recepción de mensajes ===== */
app.get('/api/inbox', (req, res) => {
  if (!NAUTA_USER || !NAUTA_PASS) {
    return res.status(500).json({
      ok: false,
      error: 'Backend no configurado. Revisa el archivo .env'
    });
  }

  const imap = new Imap({
    user: NAUTA_USER,
    password: NAUTA_PASS,
    host: IMAP_HOST,
    port: IMAP_PORT,
    tls: false,
    tlsOptions: { rejectUnauthorized: false }
  });

  const mensajes = [];

  imap.once('ready', () => {
    imap.openBox('INBOX', false, (err) => {
      if (err) {
        imap.end();
        return res.status(500).json({ ok: false, error: err.message });
      }

      imap.search(['UNSEEN'], (err, results) => {
        if (err || !results.length) {
          imap.end();
          return res.json({ ok: true, messages: [] });
        }

        const fetch = imap.fetch(results, { bodies: '', markSeen: true });

        fetch.on('message', (msg) => {
          msg.on('body', (stream) => {
            simpleParser(stream, async (err, parsed) => {
              if (err) return;

              let text = parsed.text || '';
              let sticker = null;

              /* Extraer sticker si existe */
              const stickerMatch = text.match(/\[FlasChat-Sticker: ([^\]]+)\]/);
              if (stickerMatch) {
                sticker = stickerMatch[1];
                text = text.replace(/\n*\[FlasChat-Sticker:[^\]]+\]\n*/, '').trim();
              }

              mensajes.push({
                from: parsed.from?.text || 'desconocido',
                text: text,
                sticker: sticker,
                date: parsed.date?.toISOString() || new Date().toISOString()
              });
            });
          });
        });

        fetch.once('end', () => {
          imap.end();
        });
      });
    });
  });

  imap.once('error', (err) => {
    console.error('[FlasChat] Error IMAP:', err.message);
    if (!res.headersSent) {
      res.status(500).json({ ok: false, error: err.message });
    }
  });

  imap.once('end', () => {
    if (!res.headersSent) {
      res.json({ ok: true, messages: mensajes });
    }
  });

  imap.connect();
});

/* ===== Servir la app ===== */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/* ===== Iniciar servidor ===== */
app.listen(PORT, () => {
  console.log('');
  console.log('═══════════════════════════════════════════');
  console.log('  💙 FlasChat Backend v1.5.0');
  console.log('═══════════════════════════════════════════');
  console.log(`  🌐 Servidor:  http://localhost:${PORT}`);
  console.log(`  📧 Nauta:     ${NAUTA_USER || '(no configurado)'}`);
  console.log(`  📡 SMTP:      ${SMTP_HOST}:${SMTP_PORT}`);
  console.log(`  📥 IMAP:      ${IMAP_HOST}:${IMAP_PORT}`);
  console.log('═══════════════════════════════════════════');
  console.log('  © 2026 Milkár Lixán Pupo Riverón');
  console.log('  Todos los derechos reservados.');
  console.log('═══════════════════════════════════════════');
  console.log('');
});

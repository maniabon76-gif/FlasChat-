<h1 align="center">
  FlasChat · Nauta Messenger
</h1>

<p align="center">
  Mensajería instantánea sobre el correo Nauta (SMTP/IMAP)<br>
  <strong>Hecho en Cuba 🇨🇺 con cariño para la comunidad Nauta</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/versión-1.4.0-blue" alt="Versión">
  <img src="https://img.shields.io/badge/plataforma-Android-green" alt="Plataforma">
  <img src="https://img.shields.io/badge/licencia-Todos%20los%20derechos%20reservados-red" alt="Licencia">
</p>

---

## 📖 Descripción

**FlasChat** es una aplicación de mensajería que utiliza el **correo Nauta** como
transporte. Cada mensaje viaja como un correo electrónico firmado con la cabecera
`X-FlaChat`, y la app filtra únicamente esos mensajes para mostrarlos como un chat.

Funciona en cualquier teléfono Android como **APK empaquetada con WebView**, o en
el navegador con el backend Node.js corriendo.

---

## ✨ Características

- Envío y recepción por `smtp.nauta.cu` e `imap.nauta.cu`
- Reacciones con emojis y edición de mensajes
- Adjuntar imágenes, audio, video y archivos
- Cámara integrada
- Micrófono estilo WhatsApp (mantener pulsado)
- Cifrado E2E opcional (AES-256-GCM)
- Perfil completo con avatar, alias, teléfono, género, horóscopo, provincia
- 15 colores de acento y 12 fondos de chat
- 12 sonidos configurables
- Palomitas ✓✓ con color azul al leer
- Globo de notificaciones (badge numérico)
- Responder deslizando el mensaje
- Bloqueo con PIN
- Respaldo y restauración en JSON
- Modo demo (sin backend)
- Backend Node.js opcional

---

## 🚀 Instalación

### Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior
- Cuenta de correo Nauta

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/maniabon76-gif/flachat.git
cd flachat

# 2. Instalar dependencias
npm install

# 3. Configurar credenciales
cp .env.example .env
# Edita .env y pon tu correo y contraseña de Nauta

# 4. Arrancar
npm start

# 5. Abrir en el navegador
# http://localhost:3000

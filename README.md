<h1 align="center">
  FlasChat · Nauta Messenger
</h1>

<p align="center">
  Mensajería instantánea sobre el correo Nauta (SMTP/IMAP)<br>
  <strong>Hecho en Cuba 🇨🇺 con cariño para la comunidad Nauta</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/versión-1.4.0%20BETA-blue?style=for-the-badge" alt="Versión">
  <img src="https://img.shields.io/badge/estado-beta-orange?style=for-the-badge" alt="Estado">
  <img src="https://img.shields.io/badge/plataforma-Android-green?style=for-the-badge&logo=android&logoColor=white" alt="Plataforma">
  <img src="https://img.shields.io/badge/licencia-Todos%20los%20derechos%20reservados-red?style=for-the-badge" alt="Licencia">
</p>

<p align="center">
  <img src="https://img.shields.io/github/stars/maniabon76-gif/flachat?style=social" alt="Stars">
  <img src="https://img.shields.io/github/forks/maniabon76-gif/flachat?style=social" alt="Forks">
  <img src="https://img.shields.io/github/watchers/maniabon76-gif/flachat?style=social" alt="Watchers">
  <img src="https://img.shields.io/github/last-commit/maniabon76-gif/flachat?style=flat-square&color=blue" alt="Último commit">
  <img src="https://img.shields.io/github/repo-size/maniabon76-gif/flachat?style=flat-square&color=purple" alt="Tamaño">
</p>

---

## 📖 Descripción

**FlasChat** es una aplicación de mensajería que utiliza el **correo Nauta** como
transporte. Cada mensaje viaja como un correo electrónico firmado con la cabecera
`X-FlaChat`, y la app filtra únicamente esos mensajes para mostrarlos como un chat.

Funciona en cualquier teléfono Android como **APK empaquetada con WebView**, o en
el navegador con el backend Node.js corriendo.

La aplicación está diseñada específicamente para la comunidad cubana que utiliza
el servicio de correo Nauta a diario, ofreciendo una experiencia de chat moderna
aprovechando la infraestructura del correo electrónico sin depender de servidores
externos.

---

## ✨ Características

### 💬 Mensajería
- Envío y recepción por `smtp.nauta.cu` e `imap.nauta.cu`
- Estados de mensaje: ⏳ enviando · ✓ enviado · ✓✓ entregado · ✓✓ leído (azul)
- Respuestas rápidas predefinidas
- Modo demo sin servidor
- Reacciones con 6 emojis (👍 ❤️ 😂 😮 😢 🙏)
- Edición de mensajes propios
- Responder deslizando el mensaje hacia la izquierda o derecha
- Citar mensajes y reenviar

### 🎨 Interfaz
- Logo propio FlasChat
- 3 estilos de burbuja: **WhatsApp**, **Telegram**, **Minimalista**
- 15 colores de acento
- 12 fondos predeterminados + fondo desde galería
- Tema claro / oscuro / automático (sigue al sistema)
- 4 tamaños de fuente (útil para adultos mayores)
- Avatares con inicial y color generado
- Tooltips al mantener pulsado los iconos

### 😀 Social
- Reacciones con emojis
- Panel de emojis con 8 categorías (~700 emojis)
- Edición de mensajes propios
- Multi-selección para borrar varios

### 🔒 Privacidad
- **Cifrado E2E opcional** (AES-256-GCM con PBKDF2)
- **Bloqueo con PIN** de 4 dígitos
- Sin rastreo ni telemetría
- Todo se guarda en tu dispositivo

### 📎 Adjuntos
- Imágenes (hasta 5 MB)
- Notas de voz grabadas con el micrófono
- Archivos genéricos (PDF, TXT, DOCX...)
- Cámara integrada para tomar fotos
- Guardar cualquier adjunto recibido

### 💾 Datos
- **Respaldo completo** en JSON (exportar/importar)
- Exportar chat a TXT
- Borrado selectivo por rango de fechas
- Estadísticas de uso

### 👥 Organización
- Perfil completo (avatar, alias, correo, info, teléfono, género, horóscopo, fecha nac., provincia)
- Lista de contactos con nombre
- Favoritos
- Múltiples cuentas Nauta con opción de editar
- Búsqueda básica y avanzada

### 🔊 Feedback
- 12 sonidos distintos configurables
- Vibración configurable
- Notificaciones locales con globo numérico (badge)
- Descripciones al tocar cada opción de Ajustes

---

## 🛠️ Tecnologías

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/Nodemailer-22B573?style=for-the-badge&logo=mail.ru&logoColor=white" alt="Nodemailer">
</p>

---

## 🚀 Instalación

### Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior
- Cuenta de correo Nauta
- (Opcional) APN configurado como `nauta` en el móvil

### Como backend completo (recomendado)

```bash
# 1. Clonar el repositorio
git clone https://github.com/maniabon76-gif/flachat.git
cd flachat

# 2. Instalar dependencias
npm install

# 3. Configurar credenciales
cp .env.example .env
# Edita .env y pon tu correo y contraseña de Nauta

# 4. Arrancar el servidor
npm start

# 5. Abrir en el navegador
# http://localhost:3000

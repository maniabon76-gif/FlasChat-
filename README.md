---

## ❓ Preguntas Frecuentes

### 🌐 ¿Necesito internet para usar FlasChat?

**Sí**, para enviar y recibir mensajes por correo Nauta. Pero puedes **escribir mensajes offline** y se enviarán automáticamente cuando recuperes la conexión.

### 💰 ¿FlasChat es gratis?

**Completamente gratis**. Sin anuncios, sin suscripciones, sin pagos ocultos. Es y será siempre libre de publicidad.

### 🔒 ¿Mis mensajes están cifrados?

Puedes activar el **cifrado E2E** desde Ajustes → Cifrado. Cuando está activo, ni ETECSA ni terceros pueden leer tus mensajes (AES-256-GCM).

### 💾 ¿Dónde se guardan mis mensajes?

**Únicamente en tu dispositivo.** FlasChat no envía datos a ningún servidor externo. Todo se guarda localmente en el almacenamiento del navegador o app.

### 📥 ¿Cómo hago una copia de seguridad?

Ve a **Ajustes → Exportar respaldo**. Se descargará un archivo `.json` con todos tus mensajes, contactos, ajustes y perfil.

### 🧪 ¿Funciona sin servidor backend?

**Sí**, activando **Modo demo** desde Ajustes. Podrás probar toda la interfaz sin conectar a Nauta ni configurar el backend.

### 🔑 ¿Guardan mi contraseña de Nauta?

**Jamás.** La contraseña solo se usa en el backend (archivo `.env`) y nunca se almacena en el cliente. La app no ve ni transmite tus credenciales.

### 📱 ¿Funciona en iPhone?

**Sí**, a través del navegador Safari. Puedes añadirlo a la pantalla de inicio como **PWA** para usarlo como app nativa.

### 🎨 ¿Puedo personalizar la apariencia?

**¡Claro!** 15 colores de acento, 12 fondos de chat, 6 estilos de burbuja, 4 fuentes diferentes, tema claro/oscuro/automático. Todo configurable.

### 🎯 ¿Cuántos packs de stickers tiene?

**10 packs diferentes**: FlasChat (palabras), FlasChat Emoji, Halloween, Navidad, Animales, Corazones, Smileys, Gestos, Amor y Fiesta.

### ⚡ ¿Cómo envío un sticker?

**Pulsa directamente sobre el sticker** y se enviará automáticamente (estilo Telegram). No necesitas escribir nada más.

### 🐛 Encontré un error, ¿dónde lo reporto?

Abre un **Issue en GitHub** o escríbeme a **maniabon.76@gmail.com**

---

## 🤝 Contribuciones

### ⚠️ Proyecto Propietario

**Este es un proyecto propietario.** No se aceptan contribuciones de código sin autorización previa por escrito del autor.

### 🌟 Pero SÍ puedes ayudar así

- 🐛 **Reportar Bugs** → [Abrir un Issue](https://github.com/maniabon76-gif/flaschat/issues/new)
- 💡 **Sugerir Ideas** → [Abrir un Issue](https://github.com/maniabon76-gif/flaschat/issues/new)
- ⭐ **Dar una Estrella** → [Star al repositorio](https://github.com/maniabon76-gif/flaschat)
- 📢 **Compartir la app** con tus contactos cubanos

### 📝 Cómo reportar un bug correctamente

1. 📸 Toma capturas de pantalla del problema
2. 📋 Describe qué hiciste antes del error
3. 🔍 Indica qué esperabas que pasara
4. ❌ Explica qué pasó en realidad
5. 📱 Incluye: modelo del teléfono, versión de Android/iOS
6. 🎯 Añade el Issue con toda esta información

### 💙 ¡Gracias por apoyar FlasChat! 🇨🇺

**Cada estrella, cada reporte y cada sugerencia hace que FlasChat sea mejor.**

---

## 📜 Historial de Cambios

### 🎉 Versión Actual

**v1.5.0** — Abril 2026 · Versión Estable

### ✨ v1.5.0 — Abril 2026

**🆕 Añadido**
- 🎯 **10 packs de stickers** deslizables horizontalmente:
  - 💙 FlasChat (palabras: Hola, Gracias, Súper, Bro…)
  - 💙 FlasChat Emoji
  - 🎃 Halloween
  - 🎄 Navidad
  - 🐱 Animales
  - ❤️ Corazones
  - 😀 Smileys
  - 👍 Gestos
  - 💋 Amor
  - 🎉 Fiesta
- 🕒 Pestaña de **stickers recientes**
- ⚡ **Envío automático** de stickers al pulsarlos (estilo Telegram)
- 📊 Estadísticas de stickers enviados
- 🖋️ 4 estilos de fuente: Normal, Negrita, Cursiva, Markdown

**🔄 Cambiado**
- 🌓 **Burbujas**: texto adaptativo con variables CSS para contraste correcto en tema claro y oscuro
- 💬 **Estilos de burbuja**: solo 6 estilos oscuros disponibles

**❌ Eliminado**
- 🗑️ Barra de respuestas rápidas (Hola 👋, Ok, Gracias…)
- 🗑️ Selector "Estilo del Chat" (fondos ahora se gestionan desde "Fondo del chat")
- 🗑️ Estilos claros de burbuja

**🐛 Corregido**
- ✅ Contraste de letras en tema claro
- ✅ Fondos del chat ahora aplican degradados correctamente
- ✅ Nombre del pack "FlaChat" corregido a "FlasChat"

### 📦 Versiones anteriores

#### v1.4.0 — Marzo 2026

**🐛 Corregido**
- 🔔 Globo de notificaciones muestra contador correcto
- ✏️ Editar cuentas guardadas con botón de lápiz

**🆕 Añadido**
- 👆 Responder deslizando mensajes hacia los lados
- ⌨️ Barra de escritura persistente tras enviar

#### v1.3.0 — Marzo 2026

**🆕 Añadido**
- 🔔 Globo de notificaciones flotante estilo WhatsApp/Telegram
- 💡 Indicadores descriptivos en cada opción de Ajustes
- 🎨 6 fondos de chat nuevos (12 en total + personalizado)
- 🌈 5 colores de acento nuevos (15 en total)

**🔄 Cambiado**
- 🏷️ Etiqueta BETA visible junto al nombre de la app

#### v1.2.0 — Marzo 2026

**🆕 Añadido**
- 💾 Respaldo completo (exportar/importar JSON)
- 📎 Adjuntos: audio, video y archivos
- 🔒 Cifrado E2E opcional (AES-256-GCM)
- 👥 Lista de contactos y cuentas múltiples
- 💬 3 estilos de burbuja básicos
- 🌓 Tema automático
- 📊 Estadísticas y búsqueda avanzada
- 🗑️ Borrado selectivo por fechas
- 👤 Perfil completo con avatar
- 📷 Cámara integrada
- 🎤 Micrófono estilo WhatsApp
- ✓✓ Palomitas con color azul al leer
- ⚙️ Backend Node.js integrado

**🐛 Corregido**
- 🔧 Bug del botón de adjuntar archivos en WebView/APK
- 🔧 Bug del picker de reacciones

#### v1.1.0 — Marzo 2026

**🆕 Añadido**
- 🔔 Notificaciones locales
- 📳 Vibración configurable
- 🔊 12 sonidos configurables con botones de prueba
- 🖼️ Adjuntar imágenes
- 🎤 Dictado por voz
- ☑️ Multi-selección de mensajes
- ⭐ Favoritos
- 🔐 Bloqueo con PIN
- 🌈 5 colores de acento
- 🔤 4 tamaños de fuente
- 📅 Separadores de fecha
- 👤 Avatares con inicial
- 📜 Modal legal reutilizable
- 📖 Secciones informativas completas

**🔄 Cambiado**
- 😀 Reacciones con emojis
- 🎨 Panel de emojis con 7 categorías
- ✏️ Edición de mensajes propios
- 💬 Burbujas estilo WhatsApp/Telegram con colas
- 🎯 Nuevo logo FlasChat
- ✍️ Nombre corregido a FlasChat

#### v1.0.0 — Diciembre 2025 · 🌱 Versión Inicial

**🆕 Añadido**
- 🎉 Versión inicial de FlasChat
- 📧 Envío y recepción por correo Nauta
- 💬 Chat básico con burbujas
- ⏳ Estados: enviando, enviado, error
- 🔄 Reintento automático
- 🖥️ Backend + frontend en archivo único
- ❤️ Chequeo de salud cada 30 s
- 📶 Banner de reconexión
- 🔍 Búsqueda de mensajes
- 🌓 Tema claro/oscuro con persistencia
- 🖱️ Context menu (long press)
- ⬇️ Botón de scroll al final
- 📱 PWA manifest embebido
- 🎨 Iconos Lucide 100% offline (SVG inline)

---

## ⚖️ Licencia

### 🔒 Licencia Propietaria

**Todos los derechos reservados © 2026 Milkár Lixán Pupo Riverón**

Queda **estrictamente prohibido**:

- ❌ Modificar, descompilar o realizar ingeniería inversa
- ❌ Redistribuir, vender, sublicenciar o ceder la aplicación
- ❌ Eliminar los avisos de copyright o autoría
- ❌ Usar la app para fines ilegales o no autorizados
- ❌ Crear trabajos derivados sin autorización expresa
- ❌ Reclamar la autoría del código o del diseño
- ❌ Publicar el código fuente en otros repositorios
- ❌ Usar el nombre "FlasChat" o su logo sin permiso

### ✅ Lo que SÍ puedes hacer

- ✅ Usar FlasChat gratis en tus dispositivos
- ✅ Compartir el enlace oficial del repositorio
- ✅ Reportar bugs y sugerir mejoras
- ✅ Hacer respaldos de tus datos
- ✅ Personalizar la app dentro de la misma
- ✅ Dar una estrella ⭐ al repositorio

### 📩 ¿Necesitas permisos especiales?

Para usos comerciales, integraciones o permisos especiales, contacta con el autor:

📧 **maniabon.76@gmail.com**

**Respuesta en 24-48 horas** ⏱️

### 🇨🇺 Hecho en Cuba con cariño para la comunidad cubana 🇨🇺

**💙 Gracias por respetar el trabajo del autor 💙**

---

## 👨‍💻 Autor y Desarrollador

### 🌟 Milkár Lixán Pupo Riverón

**Desarrollador Full-Stack · Cuba 🇨🇺**

- 📧 **Email:** [maniabon.76@gmail.com](mailto:maniabon.76@gmail.com)
- 🐙 **GitHub:** [@maniabon76-gif](https://github.com/maniabon76-gif)

### 💼 Sobre mí

**¡Hola!** 👋 Soy Milkár, un desarrollador cubano apasionado por crear soluciones tecnológicas que ayuden a la comunidad cubana.

**FlasChat** nació como una idea simple: **¿por qué no usar el correo Nauta para chatear?** Aprovechando la infraestructura existente, logré crear un mensajero ligero que funciona incluso con conexiones lentas.

Cuando no estoy programando, me gusta aprender nuevas tecnologías, ayudar a otros desarrolladores y contribuir con proyectos que mejoren la vida digital en Cuba.

### 🎯 Mi misión

Crear herramientas **accesibles**, **privadas** y **eficientes** para la comunidad cubana, sin depender de servidores externos ni sacrificar la privacidad de los usuarios.

**FlasChat es mi contribución a la comunidad.** 🇨🇺💙

### 🛠️ Tecnologías utilizadas

- **JavaScript** (ES6+)
- **Node.js** (backend)
- **HTML5** y **CSS3**
- **Express.js** (servidor)
- **Nodemailer** (SMTP)
- **IMAP** (recepción)
- **Git** y **GitHub**

### 🚀 Proyectos destacados

#### 💙 FlasChat — v1.5.0

Mensajería instantánea sobre correo Nauta.

**🇨🇺 Hecho en Cuba**

🔗 [Ver repositorio](https://github.com/maniabon76-gif/flaschat)

#### 🚧 En desarrollo

Nuevos proyectos en camino. **🔮 Muy pronto...**

### 💌 ¿Te gustaría colaborar o tienes alguna idea?

📩 **Escríbeme:** [maniabon.76@gmail.com](mailto:maniabon.76@gmail.com)

**💙 Gracias por usar FlasChat 💙**

---

### ⭐ Si te gusta FlasChat, dale una estrella al repositorio ⭐

**Comparte FlasChat con tus amigos y familiares 💙🇨🇺**

**© 2026 FlasChat · Nauta Messenger**

<div align="center">

<img src="https://raw.githubusercontent.com/maniabon76-gif/flaschat/main/screenshots/logo.png" width="140" alt="FlasChat Logo"/>

# 💙 FlasChat · Nauta Messenger

### La forma más ligera de chatear por correo Nauta 🇨🇺

[![Versión](https://img.shields.io/badge/versión-1.5.0-2196F3?style=for-the-badge&logo=github)](https://github.com/maniabon76-gif/flaschat)
[![Plataforma](https://img.shields.io/badge/plataforma-Web%20%7C%20PWA%20%7C%20Android-4CAF50?style=for-the-badge&logo=android)](https://github.com/maniabon76-gif/flaschat)
[![Licencia](https://img.shields.io/badge/licencia-Propietaria-EF4444?style=for-the-badge&logo=lock)](LICENSE)
[![Hecho en Cuba](https://img.shields.io/badge/hecho%20en-Cuba%20🇨🇺-red?style=for-the-badge)](https://github.com/maniabon76-gif/flaschat)

<br/>

**Mensajería instantánea sobre el correo Nauta (SMTP/IMAP)**  
*Sin servidores externos · Sin publicidad · Sin rastreo*

</div>

---

## 📱 ¿Qué es FlasChat?

**FlasChat** es una aplicación de mensajería ligera que aprovecha la infraestructura del **correo Nauta** de ETECSA para enviar y recibir mensajes instantáneos.

Diseñada pensando en la **comunidad cubana**, optimizando al máximo el consumo de datos para que funcione incluso con conexiones lentas.

> ⚠️ **Aviso legal:** FlasChat **NO** es un servicio oficial de ETECSA ni de Nauta.

---

## ✨ Características

- **Envío y recepción** por correo Nauta (SMTP/IMAP)
- **10 packs de stickers** deslizables + envío automático (estilo Telegram)
- **Reacciones con emojis** y edición de mensajes
- **Adjuntos:** imágenes, audio, video y archivos
- **Cámara integrada** y notas de voz
- **Cifrado E2E opcional** (AES-256-GCM)
- **Bloqueo con PIN** de 4 dígitos
- **15 colores de acento** y **12 fondos de chat**
- **6 estilos de burbuja** y **4 estilos de fuente**
- **Palomitas ✓✓** de leído estilo Delta Chat
- **Globo flotante** de notificaciones no leídas
- **Responder deslizando** el dedo
- **Opción Info** en cada mensaje
- **Respaldo JSON** y exportar chat
- **Estadísticas** y búsqueda avanzada

---

## 🚀 Cómo ejecutar en tu PC

### Requisitos previos

| Requisito | Versión |
|-----------|---------|
| Node.js | 18+ |
| Git | Cualquiera |
| Cuenta Nauta | `usuario@nauta.cu` |

### Instalación rápida

```bash
# 1. Clonar el repositorio
git clone https://github.com/maniabon76-gif/flaschat.git
cd flaschat

# 2. Instalar dependencias
npm install

# 3. Configurar credenciales
cp .env.example .env
# Edita .env con tus datos de Nauta

# 4. Iniciar FlasChat
npm start

---

<div align="center">

## 📜 Historial de Cambios

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=A78BFA&center=true&vCenter=true&width=500&lines=La+evoluci%C3%B3n+de+FlasChat;Desde+la+v1.0.0+hasta+hoy" alt="Changelog"/>

</div>

<br/>

### 🎉 Versión Actual

<div align="center">

<a href="https://github.com/maniabon76-gif/flaschat/releases/tag/v1.5.0">
<img src="https://img.shields.io/badge/🚀_VERSIÓN_ACTUAL-v1.5.0-2196F3?style=for-the-badge&labelColor=0b141a" alt="v1.5.0"/>
</a>

**📅 Abril 2026 · Versión Estable**

</div>

<br/>

### ✨ v1.5.0 — Abril 2026

![Estable](https://img.shields.io/badge/estado-estable-22C55E?style=flat-square)
![Última](https://img.shields.io/badge/latest-si-2196F3?style=flat-square)

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
- 🗑️ Selector "Estilo del Chat"
- 🗑️ Estilos claros de burbuja

**🐛 Corregido**
- ✅ Contraste de letras en tema claro
- ✅ Fondos del chat ahora aplican degradados correctamente
- ✅ Nombre del pack "FlaChat" corregido a "FlasChat"

<br/>

<details>
<summary><h3>📦 Ver versiones anteriores</h3></summary>

<br/>

#### v1.4.0 — Marzo 2026

![Beta](https://img.shields.io/badge/estado-beta-F59E0B?style=flat-square)

**🐛 Corregido**
- 🔔 Globo de notificaciones muestra contador correcto
- ✏️ Editar cuentas guardadas con botón de lápiz

**🆕 Añadido**
- 👆 Responder deslizando mensajes hacia los lados
- ⌨️ Barra de escritura persistente tras enviar

---

#### v1.3.0 — Marzo 2026

![Beta](https://img.shields.io/badge/estado-beta-F59E0B?style=flat-square)

**🆕 Añadido**
- 🔔 Globo de notificaciones flotante estilo WhatsApp/Telegram
- 💡 Indicadores descriptivos en cada opción de Ajustes
- 🎨 6 fondos de chat nuevos (12 en total + personalizado)
- 🌈 5 colores de acento nuevos (15 en total)

**🔄 Cambiado**
- 🏷️ Etiqueta BETA visible junto al nombre de la app

---

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

---

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

---

#### v1.0.0 — Diciembre 2025 · 🌱 Versión Inicial

![Inicial](https://img.shields.io/badge/estado-inicial-64748B?style=flat-square)

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

</details>

<br/>

<div align="center">

**🔗 Ver el changelog completo en [CHANGELOG.md](CHANGELOG.md)**

</div>

---

<div align="center">

## ⚖️ Licencia

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=EF4444&center=true&vCenter=true&width=500&lines=Licencia+Propietaria;Todos+los+derechos+reservados" alt="Licencia"/>

<br/><br/>

<a href="LICENSE">
<img src="https://img.shields.io/badge/📜_LICENCIA-PROPIETARIA-EF4444?style=for-the-badge&labelColor=0b141a" alt="Licencia Propietaria"/>
</a>

<br/><br/>

### 🔒 Todos los derechos reservados

**© 2026 Milkár Lixán Pupo Riverón**

</div>

<br/>

<table>
<tr>
<td width="50%" valign="top">

### ❌ Lo que NO está permitido

| 🚫 | Acción prohibida |
|:--:|------------------|
| ❌ | Modificar, descompilar o hacer ingeniería inversa |
| ❌ | Redistribuir, vender, sublicenciar o ceder la app |
| ❌ | Eliminar los avisos de copyright o autoría |
| ❌ | Usar la app para fines ilegales |
| ❌ | Crear trabajos derivados sin autorización |
| ❌ | Reclamar la autoría del código o del diseño |
| ❌ | Publicar el código fuente en otros repositorios |
| ❌ | Usar el nombre "FlasChat" o su logo sin permiso |

</td>
<td width="50%" valign="top">

### ✅ Lo que SÍ puedes hacer

| ✅ | Acción permitida |
|:--:|------------------|
| ✅ | Usar FlasChat gratis en tus dispositivos |
| ✅ | Compartir el enlace oficial del repositorio |
| ✅ | Reportar bugs y sugerir mejoras |
| ✅ | Hacer respaldos de tus datos |
| ✅ | Personalizar la app dentro de la misma |
| ✅ | Dar una estrella ⭐ al repositorio |

</td>
</tr>
</table>

<br/>

<div align="center">

### 📩 ¿Necesitas permisos especiales?

Para usos comerciales, integraciones o permisos especiales, contacta con el autor:

<br/>

<a href="mailto:maniabon.76@gmail.com?subject=Solicitud%20de%20permiso%20FlasChat">
<img src="https://img.shields.io/badge/📧_Contactar-maniabon.76%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Contacto"/>
</a>

<br/><br/>

**Respuesta en 24-48 horas** ⏱️

</div>

<br/>

<div align="center">

### 🇨🇺 Hecho en Cuba con cariño para la comunidad cubana 🇨🇺

**💙 Gracias por respetar el trabajo del autor 💙**

</div>

---

<div align="center">

## ❓ Preguntas Frecuentes

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=2196F3&center=true&vCenter=true&width=500&lines=Todo+lo+que+necesitas+saber;Sobre+FlasChat+%F0%9F%92%99" alt="FAQ"/>

</div>

<br/>

<table>
<tr>
<td width="50%" valign="top">

### 🌐 ¿Necesito internet?

> **Sí**, para enviar y recibir mensajes por correo Nauta. Pero puedes **escribir mensajes offline** y se enviarán cuando recuperes la conexión.

</td>
<td width="50%" valign="top">

### 💰 ¿FlasChat es gratis?

> **Completamente gratis**. Sin anuncios, sin suscripciones, sin pagos ocultos.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔒 ¿Mis mensajes están cifrados?

> Puedes activar el **cifrado E2E** desde Ajustes → Cifrado. Ni ETECSA ni terceros pueden leerlos (AES-256-GCM).

</td>
<td width="50%" valign="top">

### 💾 ¿Dónde se guardan mis mensajes?

> **Únicamente en tu dispositivo.** FlasChat no envía datos a ningún servidor externo.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 📥 ¿Cómo hago una copia de seguridad?

> Ve a **Ajustes → Exportar respaldo**. Se descargará un archivo `.json` con todos tus datos.

</td>
<td width="50%" valign="top">

### 🧪 ¿Funciona sin servidor backend?

> **Sí**, activando **Modo demo** desde Ajustes. Prueba toda la interfaz sin conectar a Nauta.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🔑 ¿Guardan mi contraseña de Nauta?

> **Jamás.** Solo se usa en el backend (archivo `.env`) y nunca se almacena en el cliente.

</td>
<td width="50%" valign="top">

### 📱 ¿Funciona en iPhone?

> **Sí**, a través de Safari. Puedes añadirlo a la pantalla de inicio como **PWA**.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🎨 ¿Puedo personalizar la apariencia?

> **¡Claro!** 15 colores, 12 fondos, 6 estilos de burbuja, 4 fuentes y tema claro/oscuro/automático.

</td>
<td width="50%" valign="top">

### 🎯 ¿Cuántos packs de stickers tiene?

> **10 packs**: FlasChat, FlasChat Emoji, Halloween, Navidad, Animales, Corazones, Smileys, Gestos, Amor y Fiesta.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### ⚡ ¿Cómo envío un sticker?

> **Pulsa directamente sobre el sticker** y se envía automáticamente (estilo Telegram).

</td>
<td width="50%" valign="top">

### 🐛 ¿Dónde reporto un error?

> Abre un **Issue en GitHub** o escríbeme a **maniabon.76@gmail.com**

</td>
</tr>
</table>

<br/>

<div align="center">

💡 **¿Tienes otra pregunta?** → [**Abrir un Issue**](https://github.com/maniabon76-gif/flaschat/issues) 📬

</div>

---

<div align="center">

## 👨‍💻 Autor y Desarrollador

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=24&pause=1000&color=4FB3F5&center=true&vCenter=true&width=600&lines=Milk%C3%A1r+Lix%C3%A1n+Pupo+River%C3%B3n;Desarrollador+de+FlasChat;Creador+de+soluciones+para+Cuba" alt="Autor"/>

<br/><br/>

<a href="https://github.com/maniabon76-gif">
<img src="https://github.com/maniabon76-gif.png" width="140" height="140" style="border-radius:50%;border:4px solid #2196F3;" alt="Avatar"/>
</a>

<br/><br/>

### 🌟 Milkár Lixán Pupo Riverón

**Desarrollador Full-Stack · Cuba 🇨🇺**

<br/>

[![Email](https://img.shields.io/badge/📧_Email-maniabon.76%40gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maniabon.76@gmail.com)
[![GitHub](https://img.shields.io/badge/🐙_GitHub-maniabon76--gif-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/maniabon76-gif)

</div>

<br/>

<table>
<tr>
<td width="50%" valign="top">

### 💼 Sobre mí

**¡Hola!** 👋 Soy Milkár, un desarrollador cubano apasionado por crear soluciones tecnológicas que ayuden a la comunidad cubana.

**FlasChat** nació como una idea simple: **¿por qué no usar el correo Nauta para chatear?** Aprovechando la infraestructura existente, logré crear un mensajero ligero que funciona incluso con conexiones lentas.

Cuando no estoy programando, me gusta aprender nuevas tecnologías, ayudar a otros desarrolladores y contribuir con proyectos que mejoren la vida digital en Cuba.

</td>
<td width="50%" valign="top">

### 🎯 Mi misión

Crear herramientas **accesibles**, **privadas** y **eficientes** para la comunidad cubana, sin depender de servidores externos ni sacrificar la privacidad de los usuarios.

**FlasChat es mi contribución a la comunidad.** 🇨🇺💙

### 🛠️ Tecnologías

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)

</td>
</tr>
</table>

<br/>

<div align="center">

### 💌 ¿Te gustaría colaborar o tienes alguna idea?

[![Escríbeme](https://img.shields.io/badge/📩_Escr%C3%ADbeme-Ahora-2196F3?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maniabon.76@gmail.com)

<br/>

**💙 Gracias por usar FlasChat 💙**

</div>

---

<div align="center">

## 🤝 Contribuciones

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=22C55E&center=true&vCenter=true&width=500&lines=%C2%A1Tu+ayuda+es+bienvenida!;Juntos+hacemos+FlasChat+mejor" alt="Contribuciones"/>

</div>

<br/>

<div align="center">

### ⚠️ Proyecto Propietario

**Este es un proyecto propietario.** No se aceptan contribuciones de código sin autorización previa por escrito del autor.

</div>

<br/>

### 🌟 Pero SÍ puedes ayudar así:

<table>
<tr>
<td align="center" width="25%">

### 🐛
**Reportar Bugs**

[![Issue](https://img.shields.io/badge/Abrir-Issue-EF4444?style=for-the-badge&logo=github)](https://github.com/maniabon76-gif/flaschat/issues/new)

</td>
<td align="center" width="25%">

### 💡
**Sugerir Ideas**

[![Idea](https://img.shields.io/badge/Sugerir-Idea-F59E0B?style=for-the-badge&logo=github)](https://github.com/maniabon76-gif/flaschat/issues/new)

</td>
<td align="center" width="25%">

### ⭐
**Dar Estrella**

[![Star](https://img.shields.io/badge/Dar-Estrella-FBBF24?style=for-the-badge&logo=github)](https://github.com/maniabon76-gif/flaschat)

</td>
<td align="center" width="25%">

### 📢
**Compartir**

[![Share](https://img.shields.io/badge/Compartir-App-2196F3?style=for-the-badge&logo=whatsapp)](https://wa.me/?text=%C2%A1Mira%20FlasChat!%20https://github.com/maniabon76-gif/flaschat)

</td>
</tr>
</table>

<br/>

### 📝 Cómo reportar un bug correctamente

```text
1. 📸 Toma capturas de pantalla del problema
2. 📋 Describe qué hiciste antes del error
3. 🔍 Indica qué esperabas que pasara
4. ❌ Explica qué pasó en realidad
5. 📱 Incluye: modelo del teléfono, versión de Android/iOS
6. 🎯 Añade el Issue con toda esta información

# 📋 Historial de Cambios · FlasChat

Todos los cambios notables de FlasChat se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/).

---

## [1.5.0] — Abril 2026 · Versión Estable

### Añadido
- **10 packs de stickers** deslizables horizontalmente:
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
- Pestaña de **stickers recientes**
- **Envío automático** de stickers al pulsarlos (estilo Telegram)
- Estadísticas de stickers enviados
- 4 estilos de fuente: Normal, Negrita, Cursiva, Markdown

### Cambiado
- **Burbujas del chat**: texto adaptativo con variables CSS
  para contraste correcto en tema claro y oscuro
- **Estilos de burbuja**: solo 6 estilos oscuros disponibles

### Eliminado
- Barra de respuestas rápidas (Hola 👋, Ok, Gracias…)
- Selector "Estilo del Chat" (los fondos ahora se gestionan
  desde "Fondo del chat")
- Estilos claros de burbuja

### Corregido
- Contraste de letras en tema claro
- Fondos del chat ahora aplican degradados correctamente
- Nombre del pack "FlaChat" corregido a "FlasChat"

---

## [1.4.0] — Marzo 2026

### Corregido
- Globo de notificaciones ahora muestra el contador correcto
- Editar cuentas guardadas con botón de lápiz

### Añadido
- Responder deslizando mensajes hacia los lados
- Barra de escritura persistente tras enviar

---

## [1.3.0] — Marzo 2026

### Añadido
- Globo de notificaciones flotante estilo WhatsApp/Telegram
- Indicadores descriptivos al tocar cada opción de Ajustes
- 6 fondos de chat nuevos (12 en total + personalizado)
- 5 colores de acento nuevos (15 en total)

### Cambiado
- Etiqueta BETA visible junto al nombre de la app

---

## [1.2.0] — Marzo 2026

### Añadido
- Respaldo completo (exportar/importar JSON)
- Adjuntos de audio, video y archivos
- Cifrado E2E opcional (AES-256-GCM)
- Lista de contactos y cuentas múltiples
- 3 estilos de burbuja básicos
- Tema automático
- Estadísticas y búsqueda avanzada
- Borrado selectivo por fechas
- Perfil completo con avatar
- Cámara integrada
- Micrófono estilo WhatsApp
- Palomitas ✓✓ con color azul al leer
- Backend Node.js integrado

### Corregido
- Bug del botón de adjuntar archivos en WebView/APK
- Bug del picker de reacciones

---

## [1.1.0] — Marzo 2026

### Añadido
- Notificaciones locales
- Vibración configurable
- 12 sonidos configurables con botones de prueba
- Adjuntar imágenes
- Dictado por voz
- Multi-selección de mensajes
- Favoritos
- Bloqueo con PIN
- 5 colores de acento
- 4 tamaños de fuente
- Separadores de fecha
- Avatares con inicial
- Modal legal reutilizable
- Secciones Acerca de, Privacidad, Términos, Changelog y Desarrollador

### Cambiado
- Reacciones con emojis
- Panel de emojis con 7 categorías
- Edición de mensajes propios
- Burbujas estilo WhatsApp/Telegram con colas
- Nuevo logo FlasChat
- Nombre corregido a FlasChat (antes FlaChat)

---

## [1.0.0] — Diciembre 2025 · Versión Inicial

### Añadido
- Versión inicial de FlasChat
- Envío y recepción por correo Nauta
- Chat básico con burbujas
- Estados de mensaje (⏳ enviando · ✓ enviado · ⚠️ error)
- Reintento automático
- Backend + frontend en archivo único
- Chequeo de salud cada 30 s
- Banner de reconexión
- Búsqueda de mensajes
- Tema claro/oscuro con persistencia
- Context menu (long press)
- Botón de scroll al final
- PWA manifest embebido
- Iconos Lucide 100% offline (SVG inline)

---

<div align="center">

**© 2026 Milkár Lixán Pupo Riverón**  
**Todos los derechos reservados.**

</div>

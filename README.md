# Landing de reservas — Jairo Muñoz

Landing responsive para convertir tráfico de Instagram en reuniones. Está hecha con HTML5 semántico, CSS moderno y JavaScript Vanilla, sin frameworks ni dependencias de ejecución.

## Archivos

- `index.html`: estructura, SEO básico, contenido y secciones.
- `styles.css`: sistema visual, responsive, accesibilidad y microinteracciones.
- `script.js`: menú móvil, animaciones, FAQ y configuración de enlaces.
- `wireframe-conceptual.png`: referencia visual conceptual generada para orientar el diseño.

## Vista previa local

Abre `index.html` en un navegador moderno. Para probarlo como sitio, puedes usar cualquier servidor estático, por ejemplo la extensión Live Server de VS Code o `python -m http.server` desde esta carpeta.

## Configuración obligatoria antes de publicar

Abre `script.js` y modifica `SITE_CONFIG`:

```js
const SITE_CONFIG = {
  calendlyUrl: "https://calendly.com/TU-USUARIO/TU-REUNION",
  whatsappNumber: "569XXXXXXXX", // Chile: 56 + número, sin + ni espacios
  email: "tu-correo@tudominio.cl",
  instagramUrl: "https://instagram.com/TU_USUARIO",
  linkedinUrl: "https://linkedin.com/in/TU_PERFIL"
};
```

### Calendly
1. Crea el tipo de evento y define duración, disponibilidad, zona horaria y preguntas.
2. Copia el enlace de tu evento en `calendlyUrl`.
3. El calendario se incrustará automáticamente dentro de la tarjeta de reserva.
4. Prueba una reserva completa desde móvil y escritorio, incluyendo correo de confirmación y zona horaria.

El iframe es una integración de presentación; la disponibilidad, confirmación, recordatorios y gestión de reservas dependen de Calendly.

### WhatsApp y correo
Sustituye el número y el correo de ejemplo por datos reales. No publiques enlaces de contacto de ejemplo.

### Prueba social
No inventes testimonios, clientes, logos, porcentajes o métricas. Añade únicamente comentarios autorizados y resultados que puedas respaldar.

## Buenas prácticas antes de producción

- Conecta un dominio con HTTPS.
- Revisa enlaces, textos, correo, WhatsApp y Calendly en un dispositivo real.
- Añade una política de privacidad si recopilas datos personales o instalas analítica/marketing.
- Si incorporas analítica, configura consentimiento cuando sea legalmente necesario y evita capturar datos sensibles.
- Optimiza y sirve imágenes propias en WebP/AVIF; usa dimensiones explícitas y `loading="lazy"` para imágenes fuera de pantalla.
- Comprueba accesibilidad con teclado, lector de pantalla y contraste WCAG.
- Configura favicon, Open Graph image y datos estructurados reales.
- Añade monitorización de errores y copias de seguridad según el hosting.
- Ejecuta Lighthouse y valida HTML antes de publicar.

## Nota de producción
El sitio es frontend estático. No almacena reservas ni datos en una base de datos propia. Para disponibilidad y confirmaciones reales se necesita Calendly u otro proveedor, o desarrollar un backend con calendario, validación, protección anti-spam y notificaciones.

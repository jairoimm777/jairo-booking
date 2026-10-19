/* Configura tus enlaces reales antes de publicar. */
const SITE_CONFIG = {
  calendlyUrl: "https://calendly.com/jairo-imm/30min", // Ejemplo: "https://calendly.com/tu-usuario/reunion"
  whatsappNumber: "56977820343", // Código de país + número, sin + ni espacios
  email: "jairo.imm@gmail.com",
  instagramUrl: "https://instagram.com/jairomunoz.dev",
  linkedinUrl: "https://linkedin.com/in/jairoimm/"
};

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  // Menú accesible para móviles.
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Abrir menú" : "Cerrar menú");
      navLinks.classList.toggle("is-open", !isOpen);
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      });
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        navLinks.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
        menuButton.focus();
      }
    });
  }

  // Animaciones de entrada respetando la preferencia de movimiento reducido.
  const revealItems = document.querySelectorAll(".reveal");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });

    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("is-visible"));
  }

  // FAQ tipo acordeón: una respuesta abierta a la vez.
  const faqItems = document.querySelectorAll(".faq-list details");
  faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach(other => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Sustituye los enlaces de contacto por los reales en SITE_CONFIG.
  if (SITE_CONFIG.whatsappNumber && SITE_CONFIG.whatsappNumber !== "56977820343") {
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
    ["whatsapp-inline", "whatsapp-footer"].forEach(id => {
      const link = document.getElementById(id);
      if (link) link.href = waUrl;
    });
  }

  const emailLink = document.getElementById("email-link");
  if (emailLink && SITE_CONFIG.email) {
    emailLink.href = `mailto:${SITE_CONFIG.email}`;
  }

  const instagramLink = document.querySelector('.social-links a[aria-label="Instagram"]');
  const linkedinLink = document.querySelector('.social-links a[aria-label="LinkedIn"]');
  if (instagramLink && SITE_CONFIG.instagramUrl) instagramLink.href = SITE_CONFIG.instagramUrl;
  if (linkedinLink && SITE_CONFIG.linkedinUrl) linkedinLink.href = SITE_CONFIG.linkedinUrl;

  // Si se configura Calendly, se incrusta dentro de la tarjeta y se conserva un enlace alternativo.
  if (SITE_CONFIG.calendlyUrl) {
    const embed = document.getElementById("calendar-embed");
    const cta = document.getElementById("calendly-cta");
    if (embed) {
      embed.innerHTML = "";
      const iframe = document.createElement("iframe");
      iframe.title = "Calendario para agendar una reunión con Jairo Muñoz";
      iframe.src = `${SITE_CONFIG.calendlyUrl}${SITE_CONFIG.calendlyUrl.includes("?") ? "&" : "?"}embed_type=Inline&hide_gdpr_banner=1`;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allow = "payment";
      embed.appendChild(iframe);
    }
    if (cta) {
      cta.href = SITE_CONFIG.calendlyUrl;
      cta.textContent = "Abrir calendario ↗";
    }
  }
});

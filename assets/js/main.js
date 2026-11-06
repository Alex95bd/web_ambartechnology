"use strict";

/* ===== CONFIGURACIÓN (editar solo aquí) ===== */
const CONFIG = {
  // Código de país + lada + número, sin espacios, guiones ni signos.
  whatsappNumber: "529995872664",
  brandName: "ÁMBAR TECHNOLOGY",
};

const DEFAULT_MESSAGE = "Hola, buen día. Me gustaría conocer más sobre sus servicios y soluciones tecnológicas. ¿Podrían proporcionarme información?.";

function buildWhatsAppLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function initWhatsAppLinks() {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.href = buildWhatsAppLink(el.dataset.wa || DEFAULT_MESSAGE);
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
}

function initCtaMessage() {
  const input = document.getElementById("ctaMessage");
  const btn = document.getElementById("ctaButton");
  if (!input || !btn) return;
  const update = () => {
    const text = input.value.trim();
    btn.href = buildWhatsAppLink(text ? `Hola, ${text}` : "Hola, buen día. Me gustaría conocer más sobre sus servicios y soluciones tecnológicas. ¿Podrían proporcionarme información?");
  };
  input.addEventListener("input", update);
  update();
}

function initNavbar() {
  const nav = document.getElementById("mainNav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const collapseEl = document.getElementById("navMenu");
  document.querySelectorAll("#navMenu .nav-link").forEach((link) =>
    link.addEventListener("click", () => {
      if (collapseEl.classList.contains("show")) bootstrap.Collapse.getOrCreateInstance(collapseEl).hide();
    })
  );
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  items.forEach((i) => io.observe(i));
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-brand]").forEach((el) => (el.textContent = CONFIG.brandName));
  document.getElementById("year").textContent = "2025";
  initWhatsAppLinks();
  initCtaMessage();
  initNavbar();
  initReveal();
});

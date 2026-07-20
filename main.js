/* ============================================================
   MIS AMORES — Interacciones
============================================================ */

/* Bloquea el scroll mientras se muestra el loader */
document.documentElement.style.overflow = 'hidden';

/* ------------------------------------------------------------
   LOADER
------------------------------------------------------------ */
function initLoader() {
  const loader = document.getElementById('loader');
  const bar = document.getElementById('loader-bar');
  if (!loader || !bar) return;

  requestAnimationFrame(() => {
    bar.style.transition = 'width 2.2s cubic-bezier(.22,1,.36,1)';
    bar.style.width = '100%';
  });

  const TOTAL_LOAD_TIME = 2600;
  const EXIT_ANIM_TIME = 950;

  setTimeout(() => {
    loader.classList.add('loader-exit');
    document.documentElement.style.overflow = '';
    setTimeout(() => {
      loader.classList.add('loader-hidden');
      typewriterHero();
    }, EXIT_ANIM_TIME);
  }, TOTAL_LOAD_TIME);
}

/* ------------------------------------------------------------
   NAVBAR — sombra al hacer scroll
------------------------------------------------------------ */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* ------------------------------------------------------------
   MENÚ MÓVIL
------------------------------------------------------------ */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobile-menu');
  const closeBtn = document.getElementById('menu-close');
  if (!hamburger || !menu) return;

  const open = () => {
    menu.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.documentElement.style.overflow = 'hidden';
  };
  const close = () => {
    menu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.documentElement.style.overflow = '';
  };

  hamburger.addEventListener('click', open);
  closeBtn.addEventListener('click', close);
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ------------------------------------------------------------
   SCROLL REVEAL
------------------------------------------------------------ */
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  items.forEach(el => observer.observe(el));
}

/* ------------------------------------------------------------
   CONTADORES (Números)
------------------------------------------------------------ */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target || '0');
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1700;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = prefix + Math.round(target * eased) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-target]');
  if (!nums.length) return;
  if (!('IntersectionObserver' in window)) {
    nums.forEach(animateCounter);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  nums.forEach(el => observer.observe(el));
}

/* ------------------------------------------------------------
   HERO — typewriter + palabra con color animado
------------------------------------------------------------ */
function typewriterHero() {
  const el = document.getElementById('hero-title');
  if (!el || el.dataset.typed === 'true') return;
  el.dataset.typed = 'true';

  const segments = [
    { text: 'El ambiente que ya amabas, ahora es un ', accent: false },
    { text: 'restaurante', accent: true },
    { text: '.', accent: false }
  ];

  el.innerHTML = '';
  const cursor = document.createElement('span');
  cursor.className = 'tw-cursor';

  let segIndex = 0;
  let charIndex = 0;
  let currentSpan = null;

  function typeNext() {
    if (segIndex >= segments.length) {
      setTimeout(() => {
        cursor.style.transition = 'opacity .6s ease';
        cursor.style.opacity = '0';
      }, 1200);
      return;
    }
    const seg = segments[segIndex];
    if (charIndex === 0) {
      currentSpan = document.createElement('span');
      currentSpan.className = 'tw-word' + (seg.accent ? ' accent-word' : '');
      el.appendChild(currentSpan);
    }
    currentSpan.textContent += seg.text[charIndex];
    el.appendChild(cursor);

    charIndex++;
    if (charIndex >= seg.text.length) {
      segIndex++;
      charIndex = 0;
    }
    setTimeout(typeNext, 28 + Math.random() * 32);
  }
  typeNext();
}

/* ------------------------------------------------------------
   PARTÍCULAS FLOTANTES
------------------------------------------------------------ */
function initParticles() {
  document.querySelectorAll('.particles-field').forEach(field => {
    const isHero = field.classList.contains('hero-particles');
    const count = isHero ? 30 : 16;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'particle';
      const size = 2 + Math.random() * 5;
      const duration = 10 + Math.random() * 12;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + '%';
      p.style.bottom = -20 - Math.random() * 40 + 'px';
      p.style.setProperty('--drift', (Math.random() * 90 - 45) + 'px');
      p.style.animationDuration = duration + 's';
      p.style.animationDelay = (Math.random() * duration) + 's';
      frag.appendChild(p);
    }
    field.appendChild(frag);
  });
}

/* ------------------------------------------------------------
   PARALLAX en imágenes de fondo
------------------------------------------------------------ */
function initParallax() {
  const els = Array.from(document.querySelectorAll('.parallax-bg'));
  if (!els.length) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  function update() {
    const vh = window.innerHeight;
    els.forEach(el => {
      const speed = parseFloat(el.dataset.speed || '0.3');
      const parent = el.parentElement;
      const rect = parent.getBoundingClientRect();
      const centerOffset = rect.top + rect.height / 2 - vh / 2;
      el.style.transform = `translate3d(0, ${(centerOffset * speed * -0.15).toFixed(1)}px, 0)`;
    });
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ------------------------------------------------------------
   FORMULARIO DE CONTACTO → WHATSAPP
------------------------------------------------------------ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const telefono = form.telefono.value.trim();
    const fecha = form.fecha.value.trim();
    const mensaje = form.mensaje.value.trim();

    let text = `¡Hola! Soy ${nombre}.`;
    if (fecha) text += ` Me gustaría reservar para: ${fecha}.`;
    if (mensaje) text += ` ${mensaje}`;
    if (telefono) text += ` (Mi teléfono: ${telefono})`;

    const url = `https://wa.me/522311437937?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}

/* ------------------------------------------------------------
   INIT
------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbarScroll();
  initMobileMenu();
  initScrollReveal();
  initCounters();
  initParticles();
  initParallax();
  initContactForm();
});

// Simple interactive bits
(function () {
  const q = (s, r = document) => r.querySelector(s);
  const qa = (s, r = document) => Array.from(r.querySelectorAll(s));

  // Loading screen hide
  window.addEventListener('load', () => {
    const loader = q('#loading');
    if (loader) loader.classList.add('loading-hidden');
  });

  // Parallax effect for pixel background
  const parallaxEls = qa('[data-parallax]');
  window.addEventListener('scroll', () => {
    const t = window.scrollY || 0;
    parallaxEls.forEach(el => {
      const depth = parseFloat(el.dataset.parallax) || 0.1;
      el.style.transform = `translateY(${t * depth}px)`;
    });
  }, { passive: true });

  // Retro section transitions: glitchy focus on anchor click
  qa('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      try {
        const id = href.slice(1);
        const el = q(`#${CSS.escape(id)}`);
        if (!el) return;
        el.classList.add('glow');
        setTimeout(() => el.classList.remove('glow'), 1200);
      } catch {}
    });
  });

  // Remove contact-form logic (no form anymore)
})();

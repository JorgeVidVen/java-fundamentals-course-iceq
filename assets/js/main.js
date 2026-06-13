(function() {
  'use strict';

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return null; }
  }

  function safeSet(key, value) {
    try { window.localStorage.setItem(key, value); } catch (e) {}
  }

  const darkToggle = document.getElementById('darkModeToggle');

  function applyDarkMode(isDark) {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
    document.body.classList.toggle('dark-mode', isDark);
    if (!darkToggle) return;
    darkToggle.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    darkToggle.setAttribute('aria-pressed', String(isDark));
    darkToggle.setAttribute('aria-label', isDark ? 'Desactivar modo oscuro' : 'Activar modo oscuro');
  }

  applyDarkMode(safeGet('iceq-dark-mode') !== 'false');

  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      const isDark = !document.body.classList.contains('dark-mode');
      safeSet('iceq-dark-mode', String(isDark));
      applyDarkMode(isDark);
    });
  }

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menu' : 'Abrir menu');
    });
  }

  function updateGlobalProgress() {
    const total = 6;
    let completed = 0;
    for (let i = 1; i <= total; i++) {
      if (safeGet('iceq-lesson-' + i) === 'complete') completed++;
    }
    const bar = document.getElementById('progressFill');
    if (bar) bar.style.width = (completed / total * 100) + '%';
  }

  updateGlobalProgress();
  window.addEventListener('iceq-progress-update', updateGlobalProgress);

  const prefersReducedMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = document.querySelectorAll(
    '#lessonBody > h2, #lessonBody > h3, #lessonBody > p, #lessonBody > ul, #lessonBody > ol, #lessonBody > pre, #lessonBody > table, #lessonBody > blockquote, #lessonBody > details, .quiz-question, .playground-tips, .playground-snippets'
  );
  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealTargets.forEach(function(item) {
      item.classList.add('ui-reveal');
      observer.observe(item);
    });
    window.setTimeout(function() {
      revealTargets.forEach(function(item) {
        item.classList.add('is-visible');
      });
    }, 900);
  } else {
    revealTargets.forEach(function(item) {
      item.classList.add('is-visible');
    });
  }
})();

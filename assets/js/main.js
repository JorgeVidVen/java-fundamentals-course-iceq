(function() {
  'use strict';

  // === DARK MODE ===
  const darkToggle = document.getElementById('darkModeToggle');
  const savedDark = localStorage.getItem('iceq-dark-mode');
  if (savedDark === 'true') {
    document.body.classList.add('dark-mode');
    if (darkToggle) darkToggle.textContent = '☀️';
  }
  if (darkToggle) {
    darkToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('iceq-dark-mode', isDark);
      this.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // === NAV TOGGLE ===
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('open');
    });
  }

  // === GLOBAL PROGRESS BAR ===
  function updateGlobalProgress() {
    const total = 6;
    let completed = 0;
    for (let i = 1; i <= total; i++) {
      if (localStorage.getItem('iceq-lesson-' + i) === 'complete') {
        completed++;
      }
    }
    const bar = document.getElementById('progressFill');
    if (bar) {
      bar.style.width = (completed / total * 100) + '%';
    }
  }
  updateGlobalProgress();

})();

(function() {
  'use strict';

  const memoryStore = {};

  function safeGet(key) {
    try { return window.localStorage.getItem(key); } catch (e) { return memoryStore[key] || null; }
  }

  function safeSet(key, value) {
    memoryStore[key] = value;
    try { window.localStorage.setItem(key, value); } catch (e) {}
  }

  function slugify(text) {
    return text.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 60) || 'section';
  }

  // === LESSON META ===
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  let lessonNum = 0;
  let lessonType = 'theory';
  const lessonXP = ['', 100, 150, 200, 250, 300, 500];

  pathParts.forEach((part, i) => {
    const match = part.match(/lesson-0(\d)/);
    if (match) {
      lessonNum = parseInt(match[1]);
    }
    if (part === 'part-01-theory') lessonType = 'theory';
    if (part === 'part-02-practice') lessonType = 'practice';
    if (part === 'part-03-quiz') lessonType = 'quiz';
  });

  const badge = document.getElementById('lessonBadge');
  if (badge && lessonNum > 0) {
    const typeLabels = { theory: '📖 Teoría', practice: '🔧 Práctica', quiz: '❓ Quiz' };
    badge.textContent = 'World 1-' + lessonNum + ' \u2014 ' + (typeLabels[lessonType] || '');
  }

  const xpEl = document.getElementById('lessonXP');
  if (xpEl && lessonNum > 0) {
    xpEl.textContent = '\u{1FA99} ' + lessonXP[lessonNum] + ' XP';
  }

  // === TABLE OF CONTENTS ===
  const tocList = document.getElementById('tocList');
  if (tocList) {
    const headings = document.querySelectorAll('.lesson-content h2, .lesson-content h3');
    headings.forEach(h => {
      if (!h.id) {
        h.id = slugify(h.textContent) + '-' + Array.prototype.indexOf.call(headings, h);
      }
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      if (h.tagName === 'H3') {
        a.style.paddingLeft = '20px';
        a.style.fontSize = '.8rem';
      }
      li.appendChild(a);
      tocList.appendChild(li);

      if (!('IntersectionObserver' in window)) return;
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tocList.querySelectorAll('a').forEach(l => l.classList.remove('active'));
            a.classList.add('active');
          }
        });
      }, { rootMargin: '-80px 0px -70% 0px' });
      observer.observe(h);
    });
  }

  // === MARK COMPLETE ===
  const markBtn = document.getElementById('markCompleteBtn');
  if (markBtn && lessonNum > 0) {
    const key = 'iceq-lesson-' + lessonNum;

    function updateButton() {
      const done = safeGet(key) === 'complete';
      markBtn.textContent = done ? '\u2713 Completada' : '\u2713 Marcar como completada';
      markBtn.disabled = done;
      if (done) markBtn.style.opacity = '.6';
      updateMiniProgress();
    }

    function updateMiniProgress() {
      const total = 6;
      let completed = 0;
      for (let i = 1; i <= total; i++) {
        if (safeGet('iceq-lesson-' + i) === 'complete') completed++;
      }
      const fill = document.getElementById('miniProgressFill');
      const pct = document.getElementById('progressPercent');
      if (fill) fill.style.width = (completed / total * 100) + '%';
      const percent = Math.round(completed / total * 100);
      if (pct) pct.textContent = percent + '%';
      const progressBar = document.getElementById('miniProgressBar');
      if (progressBar) progressBar.setAttribute('aria-valuenow', String(percent));
      const globalFill = document.getElementById('progressFill');
      if (globalFill) globalFill.style.width = (completed / total * 100) + '%';
    }

    updateButton();
    markBtn.addEventListener('click', function() {
      safeSet(key, 'complete');
      updateButton();
      window.dispatchEvent(new CustomEvent('iceq-progress-update'));
    });
  }

  // === QUIZ SYSTEM ===
  function initQuiz() {
    const quizContainers = document.querySelectorAll('.interactive-quiz');
    quizContainers.forEach(container => {
      const questions = container.querySelectorAll('.quiz-question');
      if (questions.length === 0) return;

      let correctCount = 0;
      const total = questions.length;

      questions.forEach(q => {
        const options = q.querySelectorAll('.quiz-option');
        const feedback = q.querySelector('.quiz-feedback');
        const correctAnswer = q.dataset.answer;

        options.forEach(opt => {
          opt.addEventListener('click', function() {
            if (q.classList.contains('correct') || q.classList.contains('incorrect')) return;

            options.forEach(o => o.classList.remove('selected'));
            this.classList.add('selected');

            const isCorrect = this.dataset.value === correctAnswer;
            q.classList.add(isCorrect ? 'correct' : 'incorrect');
            if (feedback) {
              feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct' : 'incorrect');
              const correctText = q.querySelector('[data-value="' + correctAnswer + '"]')?.textContent || '';
              feedback.textContent = isCorrect ? '\u2713 \u00a1Correcto!' : '\u2717 Incorrecto. La respuesta correcta era: ' + correctText;
            }
            if (isCorrect) correctCount++;
            updateScore();
          });
        });
      });

      function updateScore() {
        let scoreEl = container.querySelector('.quiz-score');
        if (!scoreEl) {
          scoreEl = document.createElement('div');
          scoreEl.className = 'quiz-score';
          container.insertBefore(scoreEl, container.firstChild);
        }
        const done = container.querySelectorAll('.quiz-question.correct, .quiz-question.incorrect').length;
        scoreEl.textContent = '\u{1F3C6} ' + correctCount + ' / ' + total + ' correctas' +
          (done === total ? (correctCount === total ? ' \u2014 \u00a1Perfecto! \u2B50' : ' \u2014 Sigue practicando \u{1F4AA}') : '');
      }
    });
  }
  initQuiz();

})();

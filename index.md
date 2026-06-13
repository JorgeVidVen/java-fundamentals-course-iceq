---
layout: null
title: Java Fundamentals Course ICEQ — World Map
---

<!DOCTYPE html>
<html lang="es" class="no-js">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Java Fundamentals Course ICEQ — World Map</title>
  <meta name="description" content="Curso introductorio de Java para secundaria. 6 niveles estilo Mario Bros para aprender fundamentos de Java y POO.">
  <!-- Mejora: metadatos sociales y JSON-LD ayudan a compartir y descubrir el curso. -->
  <link rel="canonical" href="https://java-fundamentals-course-iceq.vercel.app/">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%AD%90%3C/text%3E%3C/svg%3E">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Java Fundamentals Course ICEQ — World Map">
  <meta property="og:description" content="Curso introductorio de Java para secundaria con 6 niveles, retos bonus y proyecto final estilo mapa retro.">
  <meta property="og:url" content="https://java-fundamentals-course-iceq.vercel.app/">
  <meta property="og:image" content="https://java-fundamentals-course-iceq.vercel.app/assets/banner.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Java Fundamentals Course ICEQ — World Map">
  <meta name="twitter:description" content="Aprende Java en 6 niveles retro con Replit, retos bonus y una aventura final.">
  <meta name="twitter:image" content="https://java-fundamentals-course-iceq.vercel.app/assets/banner.png">
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Java Fundamentals Course ICEQ",
      "description": "Curso introductorio de Java para estudiantes de secundaria con ruta de 6 niveles, práctica en Replit y proyecto final de consola.",
      "inLanguage": "es",
      "url": "https://java-fundamentals-course-iceq.vercel.app/",
      "provider": {
        "@type": "Organization",
        "name": "ICEQ",
        "url": "https://github.com/JorgeVidVen/java-fundamentals-course-iceq"
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="assets/css/pixel-landing.css">
</head>
<body>

<a class="skip-link" href="#main-content">Saltar al contenido</a>
<div class="wrapper">

  <!-- Mejora visual: shell pixel compartido para que la landing conecte con lecciones, playground y plan. -->
  <nav class="landing-nav reveal" aria-label="Rutas principales">
    <a class="landing-brand" href="/">JAVA ICEQ</a>
    <div class="landing-nav-links">
      <a href="#world-map-title">Mundos</a>
      <a href="/docs/lessons/">Lecciones</a>
      <a href="/playground/">Playground</a>
      <a href="/course-plan/">Plan</a>
    </div>
  </nav>

  <!-- ================================================================
       TITLE SCREEN
  ================================================================ -->
  <!-- Mejora: landmarks y nombres accesibles hacen navegable la landing con lector de pantalla. -->
  <header class="title-screen reveal" aria-labelledby="page-title">
    <button class="landing-theme-toggle" id="landingThemeToggle" type="button" aria-label="Cambiar a modo dia" aria-pressed="true">DAY</button>
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
    <span class="question-block qb-left" aria-hidden="true">?</span>
    <span class="question-block qb-right" aria-hidden="true">?</span>
    <img src="assets/banner.png" alt="Java Fundamentals Course ICEQ" class="banner-img">
    <h1 id="page-title">★ JAVA FUNDAMENTALS ★</h1>
    <p class="subtitle">Curso introductorio de Java para estudiantes de secundaria</p>
    <p class="start-prompt">▶ PRESIONA UN NIVEL PARA EMPEZAR ◀</p>
  </header>

  <main id="main-content" tabindex="-1">

  <!-- ================================================================
       PROGRESS
  ================================================================ -->
  <!-- Mejora: progreso con texto vivo y checkboxes únicos conserva claridad visual y accesible. -->
  <section class="progress-section reveal" aria-labelledby="progress-title">
    <span class="progress-label" id="progress-title">TU AVANCE</span>
    <div class="progress-bar-wrap">
      <progress id="global-progress" value="0" max="6" aria-describedby="progress-status"></progress>
      <span id="progress-status" class="sr-only" aria-live="polite">0 de 6 niveles completados</span>
    </div>
    <div class="progress-checkboxes" id="level-checks">
      <label><input id="progress-1-1" type="checkbox" data-save aria-label="Marcar World 1-1 como completado"><span>1-1</span></label>
      <label><input id="progress-1-2" type="checkbox" data-save aria-label="Marcar World 1-2 como completado"><span>1-2</span></label>
      <label><input id="progress-1-3" type="checkbox" data-save aria-label="Marcar World 1-3 como completado"><span>1-3</span></label>
      <label><input id="progress-1-4" type="checkbox" data-save aria-label="Marcar World 1-4 como completado"><span>1-4</span></label>
      <label><input id="progress-1-5" type="checkbox" data-save aria-label="Marcar World 1-5 como completado"><span>1-5</span></label>
      <label><input id="progress-1-6" type="checkbox" data-save aria-label="Marcar World 1-6 como completado"><span>1-6</span></label>
    </div>
  </section>

  <!-- ================================================================
       WORLD MAP
  ================================================================ -->
  <section class="world-map reveal" aria-labelledby="world-map-title">
    <h2 class="section-title" id="world-map-title">🌍 MAPA DEL MUNDO</h2>

    <div class="map-container">
      <!-- Mejora: caminos SVG decorativos conectan los niveles sin interferir con lectores de pantalla. -->
      <div class="map-connections" aria-hidden="true">
        <svg viewBox="0 0 960 620" preserveAspectRatio="none">
          <path class="map-path" d="M155 145 H480 H805 V475 H480 H155 V145"></path>
          <circle class="map-dot" cx="155" cy="145" r="7"></circle>
          <circle class="map-dot" cx="480" cy="145" r="7"></circle>
          <circle class="map-dot" cx="805" cy="145" r="7"></circle>
          <circle class="map-dot" cx="805" cy="475" r="7"></circle>
          <circle class="map-dot" cx="480" cy="475" r="7"></circle>
          <circle class="map-dot" cx="155" cy="475" r="7"></circle>
        </svg>
      </div>

      <div class="level-grid">

        <!-- WORLD 1-1 -->
        <article class="level-card reveal" aria-labelledby="level-1-title">
          <div class="card-header">
            <span class="level-number">WORLD 1-1</span>
            <span class="level-icon">🌱</span>
          </div>
          <h3 class="card-title" id="level-1-title">Primer programa en Java</h3>
          <ul class="card-objectives">
            <li><input type="checkbox" aria-label="World 1-1 objetivo ejecutar starter sin cambios"> Ejecutar el starter sin cambios</li>
            <li><input type="checkbox" aria-label="World 1-1 objetivo personalizar mensaje en consola"> Personalizar el mensaje en consola</li>
            <li><input type="checkbox" aria-label="World 1-1 objetivo provocar y corregir un error"> Provocar y corregir un error</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup" data-tooltip="Power-up principal del nivel">⚡ System.out.println</span>
            <span class="meta-tag xp-tag" data-tooltip="Puntos de práctica sugeridos">🪙 100 XP</span>
            <span class="meta-tag duration-tag" data-tooltip="Tiempo estimado">⏱ 7 min</span>
          </div>
          <a href="docs/lessons/lesson-01-hello-world/part-01-theory/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-1">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-2 -->
        <article class="level-card reveal" aria-labelledby="level-2-title">
          <div class="card-header">
            <span class="level-number">WORLD 1-2</span>
            <span class="level-icon">📦</span>
          </div>
          <h3 class="card-title" id="level-2-title">Variables y tipos de datos</h3>
          <ul class="card-objectives">
            <li><input type="checkbox" aria-label="World 1-2 objetivo crear variables con tipos correctos"> Crear variables con tipos correctos</li>
            <li><input type="checkbox" aria-label="World 1-2 objetivo imprimir datos con etiquetas"> Imprimir datos con etiquetas</li>
            <li><input type="checkbox" aria-label="World 1-2 objetivo modificar valores y re-ejecutar"> Modificar valores y re-ejecutar</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup" data-tooltip="Power-up principal del nivel">⚡ String, int, double</span>
            <span class="meta-tag xp-tag" data-tooltip="Puntos de práctica sugeridos">🪙 150 XP</span>
            <span class="meta-tag duration-tag" data-tooltip="Tiempo estimado">⏱ 9 min</span>
          </div>
          <a href="docs/lessons/lesson-02-variables/part-01-theory/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-2">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-3 -->
        <article class="level-card reveal" aria-labelledby="level-3-title">
          <div class="card-header">
            <span class="level-number">WORLD 1-3</span>
            <span class="level-icon">🔄</span>
          </div>
          <h3 class="card-title" id="level-3-title">Condiciones y bucles</h3>
          <ul class="card-objectives">
            <li><input type="checkbox" aria-label="World 1-3 objetivo escribir un if con dos caminos"> Escribir un <code>if</code> con dos caminos</li>
            <li><input type="checkbox" aria-label="World 1-3 objetivo usar for para repetir intentos"> Usar <code>for</code> para repetir intentos</li>
            <li><input type="checkbox" aria-label="World 1-3 objetivo agregar break al acertar"> Agregar <code>break</code> al acertar</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup" data-tooltip="Power-up principal del nivel">⚡ if, for, break</span>
            <span class="meta-tag xp-tag" data-tooltip="Puntos de práctica sugeridos">🪙 200 XP</span>
            <span class="meta-tag duration-tag" data-tooltip="Tiempo estimado">⏱ 10 min</span>
          </div>
          <a href="docs/lessons/lesson-03-if-loops/part-01-theory/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-3">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-4 -->
        <article class="level-card reveal" aria-labelledby="level-4-title">
          <div class="card-header">
            <span class="level-number">WORLD 1-4</span>
            <span class="level-icon">🔧</span>
          </div>
          <h3 class="card-title" id="level-4-title">Métodos y entrada por consola</h3>
          <ul class="card-objectives">
            <li><input type="checkbox" aria-label="World 1-4 objetivo crear un método con nombre claro"> Crear un método con nombre claro</li>
            <li><input type="checkbox" aria-label="World 1-4 objetivo leer un número con Scanner"> Leer un número con <code>Scanner</code></li>
            <li><input type="checkbox" aria-label="World 1-4 objetivo separar responsabilidades del main"> Separar responsabilidades del <code>main</code></li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup" data-tooltip="Power-up principal del nivel">⚡ Scanner, métodos</span>
            <span class="meta-tag xp-tag" data-tooltip="Puntos de práctica sugeridos">🪙 250 XP</span>
            <span class="meta-tag duration-tag" data-tooltip="Tiempo estimado">⏱ 10 min</span>
          </div>
          <a href="docs/lessons/lesson-04-methods/part-01-theory/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-4">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-5 -->
        <article class="level-card reveal" aria-labelledby="level-5-title">
          <div class="card-header">
            <span class="level-number">WORLD 1-5</span>
            <span class="level-icon">🧩</span>
          </div>
          <h3 class="card-title" id="level-5-title">Clases y objetos</h3>
          <ul class="card-objectives">
            <li><input type="checkbox" aria-label="World 1-5 objetivo definir una clase con campos privados"> Definir una clase con campos privados</li>
            <li><input type="checkbox" aria-label="World 1-5 objetivo construir objetos con new"> Construir objetos con <code>new</code></li>
            <li><input type="checkbox" aria-label="World 1-5 objetivo llamar métodos del objeto"> Llamar métodos del objeto</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup" data-tooltip="Power-up principal del nivel">⚡ class, new, this</span>
            <span class="meta-tag xp-tag" data-tooltip="Puntos de práctica sugeridos">🪙 300 XP</span>
            <span class="meta-tag duration-tag" data-tooltip="Tiempo estimado">⏱ 12 min</span>
          </div>
          <a href="docs/lessons/lesson-05-classes-objects/part-01-theory/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-5">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-6 — FINAL BOSS -->
        <article class="level-card boss-card reveal" aria-labelledby="level-6-title">
          <div class="card-header">
            <span class="level-number">🏰 WORLD 1-6</span>
            <span class="level-icon">🏰</span>
          </div>
          <h3 class="card-title" id="level-6-title">Encapsulación y proyecto final</h3>
          <ul class="card-objectives">
            <li><input type="checkbox" aria-label="World 1-6 objetivo proteger datos con private"> Proteger datos con <code>private</code></li>
            <li><input type="checkbox" aria-label="World 1-6 objetivo completar la lógica del juego"> Completar la lógica del juego</li>
            <li><input type="checkbox" aria-label="World 1-6 objetivo ejecutar la aventura completa"> Ejecutar la aventura completa</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup" data-tooltip="Power-up principal del jefe final">⚡ Encapsulación</span>
            <span class="meta-tag xp-tag" data-tooltip="Recompensa mayor por integrar todo el curso">🪙 500 XP</span>
            <span class="meta-tag duration-tag" data-tooltip="Tiempo estimado">⏱ 12 min</span>
          </div>
          <a href="docs/lessons/lesson-06-final-project/part-01-theory/" class="btn-start" data-tooltip="Abrir proyecto final y cerrar el mundo">▶ EMPEZAR</a>
        </article>

      </div>
    </div>
  </section>

  <!-- ================================================================
       STAR ROAD
  ================================================================ -->
  <section class="star-road reveal" aria-labelledby="star-road-title">
    <h2 class="star-road-title" id="star-road-title">⭐ STAR ROAD — RETOS BONUS</h2>
    <div class="star-grid">
      <div class="star-card" data-tooltip="Reto creativo para practicar salida por consola">
        <span class="star-icon">🎨</span>
        <h4>Dibujo con texto</h4>
        <p>Crea arte ASCII en la consola usando solo <code>println</code></p>
        <a href="docs/lessons/lesson-01-hello-world/part-02-practice/" class="star-link">⭐ INTENTAR</a>
      </div>
      <div class="star-card" data-tooltip="Reto para dividir operaciones en métodos">
        <span class="star-icon">🧮</span>
        <h4>Calculadora completa</h4>
        <p>Suma, resta y multiplica usando métodos separados</p>
        <a href="docs/lessons/lesson-04-methods/part-02-practice/" class="star-link">⭐ INTENTAR</a>
      </div>
      <div class="star-card" data-tooltip="Reto final para personalizar la aventura">
        <span class="star-icon">🎮</span>
        <h4>Tu propio juego</h4>
        <p>Modifica el proyecto final con tu propia temática</p>
        <a href="docs/lessons/lesson-06-final-project/part-02-practice/" class="star-link">⭐ INTENTAR</a>
      </div>
    </div>
  </section>

  <!-- Mejora: logros tipo estrellas convierten avances técnicos en metas visibles. -->
  <section class="mini-section reveal" aria-labelledby="achievements-title">
    <h2 class="section-title" id="achievements-title">⭐ LOGROS</h2>
    <div class="mini-grid">
      <article class="mini-card">
        <h4>⭐ Primer Run</h4>
        <p>Ejecuta un starter sin cambiar nada y explica qué apareció en consola.</p>
      </article>
      <article class="mini-card">
        <h4>⭐⭐ Debug Hunter</h4>
        <p>Provoca un error pequeño, lee el mensaje y corrígelo sin borrar todo.</p>
      </article>
      <article class="mini-card">
        <h4>⭐⭐⭐ Java Hero</h4>
        <p>Completa la aventura final y explica qué responsabilidad tiene cada clase.</p>
      </article>
    </div>
  </section>

  <!-- Mejora: speedrun route ofrece una ruta de 30 minutos para sesiones cortas. -->
  <section class="mini-section reveal" aria-labelledby="speedrun-title">
    <h2 class="section-title" id="speedrun-title">⏱ SPEEDRUN ROUTE — 30 MIN</h2>
    <div class="mini-grid">
      <article class="mini-card">
        <h4>0-10 min</h4>
        <ul>
          <li>▶ World 1-1: cambia un mensaje.</li>
          <li>▶ World 1-2: imprime una ficha.</li>
        </ul>
      </article>
      <article class="mini-card">
        <h4>10-20 min</h4>
        <ul>
          <li>▶ World 1-3: prueba un intento.</li>
          <li>▶ World 1-4: crea una suma.</li>
        </ul>
      </article>
      <article class="mini-card">
        <h4>20-30 min</h4>
        <ul>
          <li>▶ World 1-5: crea un jugador.</li>
          <li>▶ World 1-6: ejecuta el juego final.</li>
        </ul>
      </article>
    </div>
  </section>

  <!-- Mejora: Goombas enumera errores comunes con solución breve antes de que frenen la práctica. -->
  <section class="mini-section reveal" aria-labelledby="goombas-title">
    <h2 class="section-title" id="goombas-title">🍄 GOOMBAS — ERRORES COMUNES</h2>
    <div class="mini-grid">
      <article class="mini-card">
        <h4>Falta `;`</h4>
        <p>Revisa la línea marcada y la anterior. Java suele señalar dónde se rompió la instrucción.</p>
      </article>
      <article class="mini-card">
        <h4>Llave perdida</h4>
        <p>Cuenta `{` y `}` por clase, método, `if` o `for` antes de mover código.</p>
      </article>
      <article class="mini-card">
        <h4>Nombre distinto</h4>
        <p>`Main`, `main`, variables y métodos distinguen mayúsculas y minúsculas.</p>
      </article>
    </div>
  </section>

  <!-- ================================================================
       WARP ZONE
  ================================================================ -->
  <!-- Mejora: la Warp Zone funciona como navegación de atajos con tuberías CSS. -->
  <nav class="warp-zone reveal" aria-label="Warp Zone: atajos del curso">
    <a href="/docs/quick-start-student/" class="pipe-link" data-tooltip="Ruta mínima para practicar sin leer todo">🟢 TUBERÍA — MODO RÁPIDO</a>
    <a href="/docs/student-mission-map/" class="pipe-link" data-tooltip="Mapa con niveles, puntos e insignias">🟢 TUBERÍA — MAPA DE MISIÓN</a>
    <a href="/docs/replit-lab-guide/" class="pipe-link" data-tooltip="Preparación de Replit antes de programar">🟢 TUBERÍA — GUÍA REPLIT</a>
  </nav>

  <!-- ================================================================
       CONTROLS LEGEND
  ================================================================ -->
  <section class="controls-section reveal" aria-labelledby="controls-title">
    <h3 id="controls-title">🔧 CONTROLES</h3>
    <div class="controls-grid">
      <div class="control-item"><span class="icon">🌱</span> Nivel principiante</div>
      <div class="control-item"><span class="icon">⚡</span> Power-up del nivel</div>
      <div class="control-item"><span class="icon">🪙</span> XP al completar</div>
      <div class="control-item"><span class="icon">☐</span> Objetivo del nivel</div>
      <div class="control-item"><span class="icon">▶</span> Empezar nivel</div>
      <div class="control-item"><span class="icon">⭐</span> Reto bonus</div>
      <div class="control-item"><span class="icon">🏰</span> Jefe final</div>
      <div class="control-item"><span class="icon">🟢</span> Tubería (atajo)</div>
    </div>
  </section>

  <!-- ================================================================
       RESOURCES
  ================================================================ -->
  <section class="resources-section reveal" aria-labelledby="resources-title">
    <h3 id="resources-title">📂 RECURSOS DEL CURSO</h3>
    <div class="resources-grid">
      <a href="/course-plan/" class="resource-link"><span class="icon">📋</span> Plan del curso</a>
      <a href="https://github.com/JorgeVidVen/java-fundamentals-course-iceq/tree/main/starter-files" class="resource-link"><span class="icon">💻</span> Código inicial</a>
      <a href="https://github.com/JorgeVidVen/java-fundamentals-course-iceq/tree/main/completed-examples" class="resource-link"><span class="icon">✅</span> Soluciones completas</a>
      <a href="/docs/lessons/" class="resource-link"><span class="icon">📖</span> Índice de lecciones</a>
      <a href="/docs/online-editor-links/" class="resource-link"><span class="icon">🔗</span> Editores online</a>
      <a href="/playground/" class="resource-link"><span class="icon">▶</span> Java Playground</a>
      <a href="https://github.com/JorgeVidVen/java-fundamentals-course-iceq/tree/main/scripts" class="resource-link"><span class="icon">🎬</span> Guiones de video</a>
      <a href="/contributing/" class="resource-link"><span class="icon">🤝</span> Contribuir</a>
      <a href="https://github.com/JorgeVidVen/java-fundamentals-course-iceq" class="resource-link"><span class="icon">📦</span> Repositorio GitHub</a>
    </div>
  </section>

  </main>

  <!-- ================================================================
       CREDITS
  ================================================================ -->
  <footer class="credits reveal">
    <p class="credit-title">★ JAVA FUNDAMENTALS COURSE ICEQ ★</p>
    <p>UPC — Responsabilidad Social Pre 2026</p>
    <p>Código: 1ASI0729</p>
    <p>
      <a href="https://github.com/JorgeVidVen/java-fundamentals-course-iceq">📂 github.com/JorgeVidVen/java-fundamentals-course-iceq</a>
    </p>
  </footer>

</div>
<!-- Mejora: modo visual propio para la landing autonoma sincronizado con la preferencia global. -->
<script>
  (function () {
    var btn = document.getElementById('landingThemeToggle');
    if (!btn) return;
    var isDark = true;
    try { isDark = localStorage.getItem('iceq-dark-mode') !== 'false'; } catch (e) {}
    function apply() {
      document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
      document.body.classList.toggle('light-mode', !isDark);
      btn.textContent = isDark ? 'DAY' : 'NITE';
      btn.setAttribute('aria-pressed', String(isDark));
      btn.setAttribute('aria-label', isDark ? 'Cambiar a modo dia' : 'Cambiar a modo noche');
    }
    btn.addEventListener('click', function () { isDark = !isDark; try { localStorage.setItem('iceq-dark-mode', String(isDark)); } catch (e) {} apply(); });
    apply();
  })();
</script>
<!-- Mejora: persistencia local del progreso sin depender de servidor y con fallback seguro. -->
<script>
  (function () {
    var boxes = document.querySelectorAll('#level-checks input[data-save]');
    var bar = document.getElementById('global-progress');
    var status = document.getElementById('progress-status');
    function sync() {
      var done = 0;
      boxes.forEach(function (box, i) { if (box.checked) done++; try { localStorage.setItem('java-map-' + i, box.checked ? '1' : '0'); } catch (e) {} });
      bar.value = done;
      status.textContent = done + ' de ' + boxes.length + ' niveles completados';
    }
    boxes.forEach(function (box, i) { try { box.checked = localStorage.getItem('java-map-' + i) === '1'; } catch (e) {} box.addEventListener('change', sync); });
    sync();
  })();
</script>
<!-- Mejora: IntersectionObserver activa fade-in-up al scroll y degrada limpio si no existe. -->
<script>
  (function () {
    document.documentElement.classList.remove('no-js');
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach(function (item) { item.classList.add('is-visible'); }); return; }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (item) { observer.observe(item); });
  })();
</script>
</body>
</html>

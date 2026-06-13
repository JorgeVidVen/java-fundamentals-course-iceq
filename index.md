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
  <link rel="canonical" href="https://jorgevidven.github.io/java-fundamentals-course-iceq/">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ctext y='.9em' font-size='90'%3E%E2%AD%90%3C/text%3E%3C/svg%3E">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Java Fundamentals Course ICEQ — World Map">
  <meta property="og:description" content="Curso introductorio de Java para secundaria con 6 niveles, retos bonus y proyecto final estilo mapa retro.">
  <meta property="og:url" content="https://jorgevidven.github.io/java-fundamentals-course-iceq/">
  <meta property="og:image" content="https://jorgevidven.github.io/java-fundamentals-course-iceq/assets/banner.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Java Fundamentals Course ICEQ — World Map">
  <meta name="twitter:description" content="Aprende Java en 6 niveles retro con Replit, retos bonus y una aventura final.">
  <meta name="twitter:image" content="https://jorgevidven.github.io/java-fundamentals-course-iceq/assets/banner.png">
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Java Fundamentals Course ICEQ",
      "description": "Curso introductorio de Java para estudiantes de secundaria con ruta de 6 niveles, práctica en Replit y proyecto final de consola.",
      "inLanguage": "es",
      "url": "https://jorgevidven.github.io/java-fundamentals-course-iceq/",
      "provider": {
        "@type": "Organization",
        "name": "ICEQ",
        "url": "https://github.com/JorgeVidVen/java-fundamentals-course-iceq"
      }
    }
  </script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&amp;display=swap');

    :root {
      --mario-red: #E52521;
      --pipe-green: #4CAF50;
      --dark-green: #2E7D32;
      --sky-blue: #5C94FC;
      --brick-brown: #8B4513;
      --coin-gold: #FFD700;
      --bg-dark: #0f0f23;
      --card-bg: #161638;
      --card-border: #2a2a5a;
      --text-light: #f0f0f0;
      --text-muted: #b8b8d6;
      --star-purple: #7B2D8E;
      --star-glow: #c084d0;
      --glow-red: rgba(229,37,33,0.3);
      --glow-gold: rgba(255,215,0,0.2);
      --glow-green: rgba(76,175,80,0.3);
      --focus-ring: #ffffff;
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    html {
      scroll-behavior: smooth;
      background: var(--bg-dark);
    }

    body {
      font-family: 'Press Start 2P', 'Courier New', monospace;
      background: var(--bg-dark);
      color: var(--text-light);
      line-height: 1.6;
      min-height: 100vh;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* ---- ESTRELLAS DE FONDO ---- */
    body::before {
      content: '';
      position: fixed;
      inset: 0;
      background:
        radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 50% 10%, rgba(255,255,255,0.5) 0%, transparent 100%),
        radial-gradient(1px 1px at 70% 80%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(1px 1px at 90% 30%, rgba(255,255,255,0.4) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 15% 90%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(1px 1px at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 100%),
        radial-gradient(1px 1px at 45% 40%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 5% 55%, rgba(255,255,255,0.4) 0%, transparent 100%),
        radial-gradient(1px 1px at 60% 15%, rgba(255,255,255,0.2) 0%, transparent 100%),
        radial-gradient(1px 1px at 25% 75%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 85% 90%, rgba(255,255,255,0.2) 0%, transparent 100%),
        radial-gradient(1px 1px at 35% 5%, rgba(255,255,255,0.3) 0%, transparent 100%),
        radial-gradient(1px 1px at 65% 45%, rgba(255,255,255,0.2) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 55% 70%, rgba(255,255,255,0.3) 0%, transparent 100%);
      pointer-events: none;
      z-index: 0;
    }

    /* Mejora: parallax sutil de fondo sin JavaScript ni assets externos. */
    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background:
        radial-gradient(ellipse at 10% 90%, rgba(92,148,252,0.12), transparent 28%),
        radial-gradient(ellipse at 88% 12%, rgba(255,215,0,0.08), transparent 24%);
      pointer-events: none;
      z-index: 0;
    }

    .wrapper {
      max-width: 1100px;
      margin: 0 auto;
      padding: 1.5rem 1rem 2rem;
      position: relative;
      z-index: 1;
    }

    a { color: var(--sky-blue); text-decoration: none; transition: color 0.2s; }
    a:hover { color: var(--coin-gold); }
    a:focus-visible,
    button:focus-visible,
    input:focus-visible,
    [tabindex]:focus-visible {
      outline: 3px solid var(--focus-ring);
      outline-offset: 4px;
      box-shadow: 0 0 0 6px rgba(255,215,0,0.25);
    }

    /* Mejora: skip link y texto solo para lectores de pantalla facilitan navegación por teclado. */
    .skip-link {
      position: fixed;
      left: 1rem;
      top: 1rem;
      z-index: 20;
      transform: translateY(-140%);
      background: var(--coin-gold);
      color: #101020;
      padding: 0.75rem 1rem;
      border: 3px solid #101020;
      border-radius: 6px;
      font-size: 0.5rem;
      transition: transform 0.2s;
    }
    .skip-link:focus { transform: translateY(0); }
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    code {
      font-family: 'Courier New', monospace;
      background: rgba(255,255,255,0.08);
      padding: 0.1em 0.3em;
      border-radius: 3px;
      font-size: 0.8em;
    }

    /* Mejora: tooltips CSS describen power-ups y atajos sin agregar librerías. */
    [data-tooltip] {
      position: relative;
    }
    [data-tooltip]::after {
      content: attr(data-tooltip);
      position: absolute;
      left: 50%;
      bottom: calc(100% + 10px);
      transform: translate(-50%, 6px);
      width: max-content;
      max-width: min(240px, 80vw);
      background: #050512;
      color: var(--text-light);
      border: 2px solid var(--coin-gold);
      border-radius: 6px;
      padding: 0.45rem 0.55rem;
      font-size: 0.34rem;
      line-height: 1.5;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s, transform 0.2s;
      z-index: 10;
    }
    [data-tooltip]:hover::after,
    [data-tooltip]:focus-visible::after {
      opacity: 1;
      transform: translate(-50%, 0);
    }

    /* Mejora: fade-in-up al entrar en viewport aporta ritmo sin bloquear contenido. */
    .reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.65s ease, transform 0.65s ease;
    }
    .reveal.is-visible,
    .no-js .reveal {
      opacity: 1;
      transform: none;
    }

    /* Mejora: bloques ? decorativos refuerzan estética retro sin afectar lectura. */
    .question-block {
      position: absolute;
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      background: linear-gradient(180deg, #ffd85a, #c98717);
      border: 3px solid #5c3300;
      color: #4a2500;
      box-shadow: inset -4px -4px 0 rgba(0,0,0,0.16), inset 4px 4px 0 rgba(255,255,255,0.28);
      font-size: 0.85rem;
      z-index: 1;
    }
    .qb-left { left: 1rem; bottom: 1rem; }
    .qb-right { right: 1rem; top: 1rem; }

    /* ================================================================
       TITLE SCREEN
    ================================================================ */
    .title-screen {
      text-align: center;
      padding: 2rem 1rem 2.5rem;
      position: relative;
      overflow: hidden;
      border-bottom: 4px solid var(--mario-red);
      margin-bottom: 2rem;
      background: linear-gradient(180deg, rgba(229,37,33,0.06) 0%, transparent 100%);
      border-radius: 12px 12px 0 0;
    }

    .title-screen .banner-img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto 1.8rem;
      border-radius: 8px;
      box-shadow: 0 4px 30px rgba(229,37,33,0.15);
    }

    .title-screen h1 {
      font-size: clamp(1rem, 4vw, 1.6rem);
      color: var(--coin-gold);
      animation: pulse 2.5s ease-in-out infinite;
      margin-bottom: 0.6rem;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    .title-screen .subtitle {
      font-size: clamp(0.45rem, 1.8vw, 0.7rem);
      color: var(--text-muted);
      margin-bottom: 1.2rem;
      letter-spacing: 1px;
    }

    .start-prompt {
      font-size: clamp(0.4rem, 1.5vw, 0.6rem);
      color: var(--mario-red);
      animation: blink 1.2s step-end infinite;
      letter-spacing: 3px;
      text-transform: uppercase;
    }

    /* nubes */
    .cloud {
      position: absolute;
      background: rgba(255,255,255,0.04);
      border-radius: 100px;
      pointer-events: none;
      animation: float 7s ease-in-out infinite;
    }
    .cloud-1 { width: 140px; height: 48px; top: 12px; left: -20px; animation-delay: 0s; }
    .cloud-2 { width: 180px; height: 56px; top: 50px; right: -30px; animation-delay: 2.5s; }
    .cloud-3 { width: 100px; height: 36px; top: 90px; left: 25%; animation-delay: 5s; }

    /* ================================================================
       PROGRESS
    ================================================================ */
    .progress-section {
      background: var(--card-bg);
      border: 2px solid var(--card-border);
      border-radius: 10px;
      padding: 1rem 1.5rem;
      margin-bottom: 2rem;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.8rem 1.2rem;
    }

    .progress-label {
      font-size: 0.5rem;
      white-space: nowrap;
      color: var(--text-muted);
      letter-spacing: 1px;
    }

    .progress-bar-wrap {
      flex: 1;
      min-width: 120px;
    }

    progress {
      width: 100%;
      height: 20px;
      appearance: none;
      -webkit-appearance: none;
      border: 2px solid var(--dark-green);
      border-radius: 12px;
      overflow: hidden;
      background: #0a0a1a;
    }
    progress::-webkit-progress-bar { background: #0a0a1a; border-radius: 12px; }
    progress::-webkit-progress-value {
      background: linear-gradient(90deg, var(--pipe-green), var(--coin-gold));
      border-radius: 12px;
      transition: width 0.4s ease;
    }
    progress::-moz-progress-bar {
      background: linear-gradient(90deg, var(--pipe-green), var(--coin-gold));
      border-radius: 12px;
    }

    .progress-checkboxes {
      display: flex;
      gap: 0.4rem;
      flex-wrap: wrap;
    }
    .progress-checkboxes label {
      font-size: 0.4rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.25rem 0.5rem;
      border: 1px solid var(--card-border);
      border-radius: 4px;
      transition: all 0.2s;
      user-select: none;
    }
    .progress-checkboxes label:hover {
      border-color: var(--coin-gold);
      background: rgba(255,215,0,0.05);
    }
    .progress-checkboxes input:checked + span {
      color: var(--coin-gold);
    }
    .progress-checkboxes input {
      accent-color: var(--pipe-green);
      width: 12px;
      height: 12px;
      cursor: pointer;
    }

    /* ================================================================
       WORLD MAP
    ================================================================ */
    .world-map {
      margin-bottom: 2.5rem;
    }

    .section-title {
      font-size: clamp(0.55rem, 2vw, 0.8rem);
      color: var(--coin-gold);
      text-align: center;
      margin-bottom: 1.8rem;
      letter-spacing: 4px;
      text-transform: uppercase;
    }

    .map-container {
      position: relative;
      max-width: 960px;
      margin: 0 auto;
    }

    /* Mejora: caminos SVG conectan niveles como mapa de mundo y escalan mejor que divs absolutos. */
    .map-connections {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }
    .map-connections svg {
      width: 100%;
      height: 100%;
      display: block;
      overflow: visible;
    }
    .map-path {
      fill: none;
      stroke: rgba(255,215,0,0.38);
      stroke-width: 4;
      stroke-linecap: round;
      stroke-dasharray: 10 10;
      filter: drop-shadow(0 0 5px rgba(255,215,0,0.35));
      transition: stroke 0.3s, stroke-dashoffset 0.3s;
    }
    .map-dot {
      fill: var(--coin-gold);
      opacity: 0.72;
    }
    .map-container:hover .map-path {
      stroke: rgba(255,215,0,0.7);
      stroke-dashoffset: -10;
    }

    /* ================================================================
       LEVEL CARDS
    ================================================================ */
    .level-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.2rem;
      position: relative;
      z-index: 1;
    }

    .level-card {
      background: var(--card-bg);
      border: 2px solid var(--card-border);
      border-radius: 12px;
      padding: 1.2rem 1rem 1rem;
      position: relative;
      z-index: 2;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
    .level-card::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 10px;
      background: linear-gradient(135deg, rgba(255,215,0,0.03), transparent);
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .level-card:hover {
      transform: translateY(-6px) scale(1.02);
      border-color: var(--coin-gold);
      box-shadow:
        0 0 24px var(--glow-gold),
        0 8px 30px rgba(0,0,0,0.4);
    }
    .level-card:hover::before { opacity: 1; }
    .level-card:hover .level-icon {
      transform: rotate(-6deg) scale(1.12);
    }

    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.6rem;
    }
    .level-number {
      font-size: 0.45rem;
      color: var(--mario-red);
      background: rgba(229,37,33,0.12);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      letter-spacing: 1px;
    }
    .level-icon {
      font-size: 1.6rem;
      line-height: 1;
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
      transition: transform 0.25s;
    }

    .card-title {
      font-size: clamp(0.45rem, 1.4vw, 0.6rem);
      color: var(--text-light);
      margin-bottom: 0.7rem;
      line-height: 1.5;
      letter-spacing: 0.5px;
      min-height: 2.4em;
    }

    .card-objectives {
      list-style: none;
      margin-bottom: 0.7rem;
      flex: 1;
    }
    .card-objectives li {
      font-size: 0.38rem;
      color: var(--text-muted);
      margin-bottom: 0.35rem;
      display: flex;
      align-items: flex-start;
      gap: 0.3rem;
      line-height: 1.4;
    }
    .card-objectives li input[type="checkbox"] {
      accent-color: var(--pipe-green);
      width: 11px;
      height: 11px;
      margin-top: 0.15em;
      flex-shrink: 0;
      cursor: pointer;
    }

    .card-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 0.8rem;
      font-size: 0.38rem;
    }
    .meta-tag {
      padding: 0.2rem 0.45rem;
      border-radius: 4px;
      letter-spacing: 0.5px;
      display: inline-flex;
      align-items: center;
      gap: 0.2rem;
    }
    .powerup {
      background: rgba(76,175,80,0.1);
      border: 1px solid rgba(76,175,80,0.3);
      color: var(--pipe-green);
    }
    .xp-tag {
      background: rgba(255,215,0,0.08);
      border: 1px solid rgba(255,215,0,0.2);
      color: var(--coin-gold);
    }
    .duration-tag {
      background: rgba(92,148,252,0.08);
      border: 1px solid rgba(92,148,252,0.2);
      color: var(--sky-blue);
    }

    .btn-start {
      display: inline-block;
      background: linear-gradient(135deg, var(--mario-red), #c41e1a);
      color: #fff;
      text-decoration: none;
      font-size: 0.42rem;
      padding: 0.55rem 1rem;
      border-radius: 6px;
      text-align: center;
      transition: all 0.25s;
      border: none;
      cursor: pointer;
      font-family: inherit;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 0 3px 10px var(--glow-red);
    }
    .btn-start:hover {
      background: linear-gradient(135deg, #ff2a1a, var(--mario-red));
      box-shadow: 0 0 18px var(--glow-red), 0 4px 12px rgba(0,0,0,0.3);
      transform: scale(1.04);
      color: #fff;
    }

    /* card final boss */
    .level-card.boss-card {
      border-color: var(--mario-red);
      background: linear-gradient(135deg, var(--card-bg), rgba(229,37,33,0.06));
    }
    .level-card.boss-card .level-number {
      background: rgba(229,37,33,0.2);
      color: var(--coin-gold);
    }
    .level-card.boss-card .card-title {
      color: var(--coin-gold);
    }

    /* ================================================================
       STAR ROAD
    ================================================================ */
    .star-road {
      background: linear-gradient(135deg, #1a0a2e, var(--card-bg));
      border: 2px solid var(--star-purple);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;
    }
    .star-road::before {
      content: '⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐';
      position: absolute;
      top: -8px;
      right: -8px;
      font-size: 1.8rem;
      opacity: 0.08;
      transform: rotate(12deg);
      pointer-events: none;
      letter-spacing: 8px;
      white-space: nowrap;
    }
    .star-road-title {
      font-size: clamp(0.5rem, 1.8vw, 0.7rem);
      color: var(--star-glow);
      text-align: center;
      margin-bottom: 1.2rem;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .star-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
    }
    .star-card {
      background: rgba(123,45,142,0.08);
      border: 1px solid rgba(123,45,142,0.3);
      border-radius: 10px;
      padding: 1.2rem 0.8rem;
      text-align: center;
      transition: all 0.3s;
    }
    .star-card:hover {
      border-color: var(--star-glow);
      box-shadow: 0 0 20px rgba(192,132,208,0.2);
      transform: translateY(-3px);
    }
    .star-card:hover .star-icon {
      transform: scale(1.18) rotate(8deg);
    }
    .star-card .star-icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      display: block;
      transition: transform 0.25s;
    }

    /* Mejora: secciones nuevas resumen logros, ruta rápida y errores comunes con lenguaje de juego. */
    .mini-section {
      background: var(--card-bg);
      border: 2px solid var(--card-border);
      border-radius: 12px;
      padding: 1.4rem;
      margin-bottom: 2rem;
      position: relative;
      overflow: hidden;
    }
    .mini-section::after {
      content: '';
      position: absolute;
      inset: auto 0 0 0;
      height: 5px;
      background: repeating-linear-gradient(90deg, var(--coin-gold) 0 18px, var(--mario-red) 18px 36px, var(--pipe-green) 36px 54px);
      opacity: 0.8;
    }
    .mini-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 0.9rem;
    }
    .mini-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--card-border);
      border-radius: 10px;
      padding: 1rem 0.8rem;
      transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
    }
    .mini-card:hover {
      transform: translateY(-4px);
      border-color: var(--coin-gold);
      box-shadow: 0 0 18px rgba(255,215,0,0.16);
    }
    .mini-card h4 {
      color: var(--coin-gold);
      font-size: 0.45rem;
      margin-bottom: 0.55rem;
      line-height: 1.5;
    }
    .mini-card p,
    .mini-card li {
      color: var(--text-muted);
      font-size: 0.38rem;
      line-height: 1.6;
    }
    .mini-card ul {
      list-style: none;
      display: grid;
      gap: 0.35rem;
    }
    .star-card h4 {
      font-size: 0.45rem;
      margin-bottom: 0.4rem;
      color: var(--coin-gold);
      letter-spacing: 1px;
    }
    .star-card p {
      font-size: 0.38rem;
      color: var(--text-muted);
      margin-bottom: 0.6rem;
      line-height: 1.5;
    }
    .star-link {
      display: inline-block;
      font-size: 0.4rem;
      color: var(--star-glow);
      text-decoration: none;
      border-bottom: 1px dashed var(--star-glow);
      padding-bottom: 2px;
      transition: all 0.2s;
      letter-spacing: 1px;
    }
    .star-link:hover {
      color: var(--coin-gold);
      border-color: var(--coin-gold);
    }

    /* ================================================================
       WARP ZONE
    ================================================================ */
    .warp-zone {
      text-align: center;
      margin-bottom: 2rem;
      padding: 0.5rem 0;
    }
    .pipe-link {
      display: inline-block;
      background: linear-gradient(180deg, var(--pipe-green), var(--dark-green));
      color: #fff;
      text-decoration: none;
      font-size: clamp(0.38rem, 1.4vw, 0.5rem);
      padding: 0.9rem 1.2rem 0.65rem;
      border-radius: 10px 10px 6px 6px;
      margin: 0.3rem;
      border: 2px solid #1B5E20;
      transition: all 0.3s;
      font-family: inherit;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: inset -6px 0 0 rgba(0,0,0,0.16), inset 6px 0 0 rgba(255,255,255,0.14), 0 3px 12px rgba(76,175,80,0.15);
      position: relative;
      overflow: visible;
    }
    .pipe-link::before {
      content: '';
      position: absolute;
      left: 50%;
      top: -12px;
      width: calc(100% + 26px);
      height: 18px;
      transform: translateX(-50%);
      background: linear-gradient(180deg, #7de37f, var(--pipe-green));
      border: 2px solid #1B5E20;
      border-radius: 10px 10px 4px 4px;
      box-shadow: inset -6px 0 0 rgba(0,0,0,0.14), inset 6px 0 0 rgba(255,255,255,0.18);
    }
    .pipe-link::after {
      content: '';
      position: absolute;
      top: 8px;
      left: 14px;
      width: 8px;
      height: calc(100% - 18px);
      border-radius: 10px;
      background: rgba(255,255,255,0.28);
    }
    .pipe-link:hover {
      background: linear-gradient(180deg, #66BB6A, var(--pipe-green));
      box-shadow: 0 0 20px var(--glow-green);
      transform: scale(1.03) translateY(-2px);
      color: #fff;
    }

    /* ================================================================
       CONTROLS
    ================================================================ */
    .controls-section {
      background: var(--card-bg);
      border: 2px solid var(--card-border);
      border-radius: 10px;
      padding: 1.2rem 1.5rem;
      margin-bottom: 2rem;
    }
    .controls-section h3 {
      font-size: clamp(0.45rem, 1.6vw, 0.65rem);
      color: var(--text-muted);
      margin-bottom: 1rem;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .controls-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0.6rem;
    }
    .control-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.38rem;
      color: var(--text-muted);
    }
    .control-item .icon {
      font-size: 1rem;
      width: 24px;
      text-align: center;
      flex-shrink: 0;
    }

    /* ================================================================
       RESOURCES SECTION (original table)
    ================================================================ */
    .resources-section {
      background: var(--card-bg);
      border: 2px solid var(--card-border);
      border-radius: 10px;
      padding: 1.2rem 1.5rem;
      margin-bottom: 2rem;
    }
    .resources-section h3 {
      font-size: clamp(0.45rem, 1.6vw, 0.65rem);
      color: var(--text-muted);
      margin-bottom: 1rem;
      text-align: center;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .resources-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 0.5rem;
    }
    .resource-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.4rem;
      padding: 0.5rem 0.75rem;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--card-border);
      border-radius: 6px;
      transition: all 0.2s;
    }
    .resource-link:hover {
      border-color: var(--sky-blue);
      background: rgba(92,148,252,0.05);
    }
    .resource-link .icon { font-size: 1rem; }

    /* ================================================================
       CREDITS
    ================================================================ */
    .credits {
      text-align: center;
      padding: 1.5rem 1rem 0.5rem;
      border-top: 2px solid var(--card-border);
      font-size: 0.38rem;
      color: var(--text-muted);
      line-height: 2.2;
      letter-spacing: 0.5px;
    }
    .credits .credit-title {
      font-size: 0.5rem;
      color: var(--text-light);
      letter-spacing: 2px;
    }
    .credits a {
      color: var(--sky-blue);
    }
    .credits a:hover { color: var(--coin-gold); }

    /* ================================================================
       KEYFRAMES
    ================================================================ */
    @keyframes pulse {
      0%, 100% { text-shadow: 0 0 4px var(--coin-gold), 0 0 8px rgba(255,215,0,0.2); }
      50% { text-shadow: 0 0 16px var(--coin-gold), 0 0 28px var(--mario-red), 0 0 40px rgba(229,37,33,0.15); }
    }
    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      25% { transform: translateY(-4px) translateX(3px); }
      50% { transform: translateY(-8px) translateX(0); }
      75% { transform: translateY(-4px) translateX(-3px); }
    }

    /* ================================================================
       RESPONSIVE
    ================================================================ */
    @media (max-width: 860px) {
      .level-grid { grid-template-columns: repeat(2, 1fr); }
      .map-connections { display: none; }
      .star-grid { grid-template-columns: 1fr; }
      .mini-grid { grid-template-columns: 1fr; }
      .controls-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 540px) {
      .level-grid { grid-template-columns: 1fr; }
      .level-card { padding: 1rem 0.8rem; }
      .controls-grid { grid-template-columns: 1fr 1fr; }
      .progress-section { flex-direction: column; align-items: stretch; }
      .progress-checkboxes { justify-content: center; }
      .resources-grid { grid-template-columns: 1fr; }
      .resources-section { padding: 0.8rem 1rem; }
      .controls-section { padding: 0.8rem 1rem; }
      .question-block { display: none; }
      .mini-section { padding: 1rem; }
      [data-tooltip]::after { display: none; }
    }

    /* Mejora: prefers-reduced-motion desactiva parpadeos, flotación, scroll suave y reveals animados. */
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
      *, *::before, *::after {
        animation-duration: 0.001ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: 0.001ms !important;
      }
      .reveal {
        opacity: 1;
        transform: none;
      }
      .level-card:hover,
      .star-card:hover,
      .mini-card:hover,
      .pipe-link:hover,
      .btn-start:hover {
        transform: none;
      }
    }
  </style>
</head>
<body>

<a class="skip-link" href="#main-content">Saltar al contenido</a>
<div class="wrapper">

  <!-- ================================================================
       TITLE SCREEN
  ================================================================ -->
  <!-- Mejora: landmarks y nombres accesibles hacen navegable la landing con lector de pantalla. -->
  <header class="title-screen reveal" aria-labelledby="page-title">
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
          <a href="docs/lessons/lesson-01-hello-world/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-1">▶ EMPEZAR</a>
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
          <a href="docs/lessons/lesson-02-variables/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-2">▶ EMPEZAR</a>
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
          <a href="docs/lessons/lesson-03-if-loops/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-3">▶ EMPEZAR</a>
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
          <a href="docs/lessons/lesson-04-methods/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-4">▶ EMPEZAR</a>
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
          <a href="docs/lessons/lesson-05-classes-objects/" class="btn-start" data-tooltip="Abrir teoría, práctica y quiz del World 1-5">▶ EMPEZAR</a>
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
          <a href="docs/lessons/lesson-06-final-project/" class="btn-start" data-tooltip="Abrir proyecto final y cerrar el mundo">▶ EMPEZAR</a>
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
        <a href="docs/lessons/lesson-01-hello-world/part-02-practice.md" class="star-link">⭐ INTENTAR</a>
      </div>
      <div class="star-card" data-tooltip="Reto para dividir operaciones en métodos">
        <span class="star-icon">🧮</span>
        <h4>Calculadora completa</h4>
        <p>Suma, resta y multiplica usando métodos separados</p>
        <a href="docs/lessons/lesson-04-methods/part-02-practice.md" class="star-link">⭐ INTENTAR</a>
      </div>
      <div class="star-card" data-tooltip="Reto final para personalizar la aventura">
        <span class="star-icon">🎮</span>
        <h4>Tu propio juego</h4>
        <p>Modifica el proyecto final con tu propia temática</p>
        <a href="docs/lessons/lesson-06-final-project/part-02-practice.md" class="star-link">⭐ INTENTAR</a>
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
    <a href="docs/quick-start-student.md" class="pipe-link" data-tooltip="Ruta mínima para practicar sin leer todo">🟢 TUBERÍA — MODO RÁPIDO</a>
    <a href="docs/student-mission-map.md" class="pipe-link" data-tooltip="Mapa con niveles, puntos e insignias">🟢 TUBERÍA — MAPA DE MISIÓN</a>
    <a href="docs/replit-lab-guide.md" class="pipe-link" data-tooltip="Preparación de Replit antes de programar">🟢 TUBERÍA — GUÍA REPLIT</a>
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
      <a href="course-plan.md" class="resource-link"><span class="icon">📋</span> Plan del curso</a>
      <a href="starter-files/" class="resource-link"><span class="icon">💻</span> Código inicial</a>
      <a href="completed-examples/" class="resource-link"><span class="icon">✅</span> Soluciones completas</a>
      <a href="docs/lessons/" class="resource-link"><span class="icon">📖</span> Índice de lecciones</a>
      <a href="docs/online-editor-links.md" class="resource-link"><span class="icon">🔗</span> Editores online</a>
      <a href="/playground" class="resource-link"><span class="icon">▶</span> Java Playground</a>
      <a href="scripts/" class="resource-link"><span class="icon">🎬</span> Guiones de video</a>
      <a href="CONTRIBUTING.md" class="resource-link"><span class="icon">🤝</span> Contribuir</a>
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

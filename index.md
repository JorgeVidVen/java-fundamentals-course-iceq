---
layout: null
title: Java Fundamentals Course ICEQ — World Map
---

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Java Fundamentals Course ICEQ — World Map</title>
  <meta name="description" content="Curso introductorio de Java para secundaria. 6 niveles estilo Mario Bros para aprender fundamentos de Java y POO.">
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
      --text-muted: #8888aa;
      --star-purple: #7B2D8E;
      --star-glow: #c084d0;
      --glow-red: rgba(229,37,33,0.3);
      --glow-gold: rgba(255,215,0,0.2);
      --glow-green: rgba(76,175,80,0.3);
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

    .wrapper {
      max-width: 1100px;
      margin: 0 auto;
      padding: 1.5rem 1rem 2rem;
      position: relative;
      z-index: 1;
    }

    a { color: var(--sky-blue); text-decoration: none; transition: color 0.2s; }
    a:hover { color: var(--coin-gold); }

    code {
      font-family: 'Courier New', monospace;
      background: rgba(255,255,255,0.08);
      padding: 0.1em 0.3em;
      border-radius: 3px;
      font-size: 0.8em;
    }

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

    /* caminos decorativos entre tarjetas */
    .map-connections {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }
    .map-connections .hline {
      position: absolute;
      height: 2px;
      background: repeating-linear-gradient(
        90deg,
        var(--text-muted) 0,
        var(--text-muted) 6px,
        transparent 6px,
        transparent 12px
      );
      opacity: 0.3;
      transition: opacity 0.3s;
    }
    .map-connections .vline {
      position: absolute;
      width: 2px;
      background: repeating-linear-gradient(
        0deg,
        var(--text-muted) 0,
        var(--text-muted) 6px,
        transparent 6px,
        transparent 12px
      );
      opacity: 0.3;
      transition: opacity 0.3s;
    }
    .map-connections .arrow {
      position: absolute;
      font-size: 0.7rem;
      color: var(--text-muted);
      opacity: 0.4;
      transition: opacity 0.3s;
    }
    /* horizontal lines: row 1 (cards 1-2, 2-3) */
    .hline-1-2 { top: 22%; left: calc(33.33% + 10px); width: calc(33.33% - 20px); }
    .hline-2-3 { top: 22%; left: calc(66.66% + 10px); width: calc(33.33% - 20px); }
    /* horizontal lines: row 2 (cards 4-5, 5-6) */
    .hline-4-5 { top: 72%; left: calc(33.33% + 10px); width: calc(33.33% - 20px); }
    .hline-5-6 { top: 72%; left: calc(66.66% + 10px); width: calc(33.33% - 20px); }
    /* vertical lines */
    .vline-1 { left: calc(16.66% - 1px); top: calc(22% + 4px); height: calc(50% - 8px); }
    .vline-2 { left: calc(50% - 1px); top: calc(22% + 4px); height: calc(50% - 8px); }
    .vline-3 { left: calc(83.33% - 1px); top: calc(22% + 4px); height: calc(50% - 8px); }
    /* arrows */
    .arrow-r1 { top: calc(22% - 10px); left: calc(66.66% - 4px); }
    .arrow-r2 { top: calc(72% - 10px); left: calc(66.66% - 4px); }

    .map-container:hover .hline,
    .map-container:hover .vline,
    .map-container:hover .arrow {
      opacity: 0.6;
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
    .star-card .star-icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      display: block;
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
      padding: 0.6rem 1.2rem;
      border-radius: 8px;
      margin: 0.3rem;
      border: 2px solid #1B5E20;
      transition: all 0.3s;
      font-family: inherit;
      letter-spacing: 1px;
      text-transform: uppercase;
      box-shadow: 0 3px 12px rgba(76,175,80,0.15);
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
    }
  </style>
</head>
<body>

<div class="wrapper">

  <!-- ================================================================
       TITLE SCREEN
  ================================================================ -->
  <header class="title-screen">
    <div class="cloud cloud-1"></div>
    <div class="cloud cloud-2"></div>
    <div class="cloud cloud-3"></div>
    <img src="assets/banner.png" alt="Java Fundamentals Course ICEQ" class="banner-img">
    <h1>★ JAVA FUNDAMENTALS ★</h1>
    <p class="subtitle">Curso introductorio de Java para estudiantes de secundaria</p>
    <p class="start-prompt">▶ PRESIONA UN NIVEL PARA EMPEZAR ◀</p>
  </header>

  <!-- ================================================================
       PROGRESS
  ================================================================ -->
  <section class="progress-section">
    <span class="progress-label">TU AVANCE</span>
    <div class="progress-bar-wrap">
      <progress id="global-progress" value="0" max="6"></progress>
    </div>
    <div class="progress-checkboxes" id="level-checks">
      <label><input type="checkbox" onchange="updateProgress()"><span>1-1</span></label>
      <label><input type="checkbox" onchange="updateProgress()"><span>1-2</span></label>
      <label><input type="checkbox" onchange="updateProgress()"><span>1-3</span></label>
      <label><input type="checkbox" onchange="updateProgress()"><span>1-4</span></label>
      <label><input type="checkbox" onchange="updateProgress()"><span>1-5</span></label>
      <label><input type="checkbox" onchange="updateProgress()"><span>1-6</span></label>
    </div>
  </section>

  <script>
    function updateProgress() {
      var checks = document.querySelectorAll('#level-checks input[type="checkbox"]');
      var checked = 0;
      for (var i = 0; i < checks.length; i++) {
        if (checks[i].checked) checked++;
      }
      document.getElementById('global-progress').value = checked;
    }
  </script>

  <!-- ================================================================
       WORLD MAP
  ================================================================ -->
  <section class="world-map">
    <h2 class="section-title">🌍 MAPA DEL MUNDO</h2>

    <div class="map-container">
      <div class="map-connections">
        <div class="hline hline-1-2"></div>
        <div class="hline hline-2-3"></div>
        <div class="hline hline-4-5"></div>
        <div class="hline hline-5-6"></div>
        <div class="vline vline-1"></div>
        <div class="vline vline-2"></div>
        <div class="vline vline-3"></div>
      </div>

      <div class="level-grid">

        <!-- WORLD 1-1 -->
        <article class="level-card">
          <div class="card-header">
            <span class="level-number">WORLD 1-1</span>
            <span class="level-icon">🌱</span>
          </div>
          <h3 class="card-title">Primer programa en Java</h3>
          <ul class="card-objectives">
            <li><input type="checkbox"> Ejecutar el starter sin cambios</li>
            <li><input type="checkbox"> Personalizar el mensaje en consola</li>
            <li><input type="checkbox"> Provocar y corregir un error</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup">⚡ System.out.println</span>
            <span class="meta-tag xp-tag">🪙 100 XP</span>
            <span class="meta-tag duration-tag">⏱ 7 min</span>
          </div>
          <a href="docs/lessons/lesson-01-hello-world/" class="btn-start">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-2 -->
        <article class="level-card">
          <div class="card-header">
            <span class="level-number">WORLD 1-2</span>
            <span class="level-icon">📦</span>
          </div>
          <h3 class="card-title">Variables y tipos de datos</h3>
          <ul class="card-objectives">
            <li><input type="checkbox"> Crear variables con tipos correctos</li>
            <li><input type="checkbox"> Imprimir datos con etiquetas</li>
            <li><input type="checkbox"> Modificar valores y re-ejecutar</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup">⚡ String, int, double</span>
            <span class="meta-tag xp-tag">🪙 150 XP</span>
            <span class="meta-tag duration-tag">⏱ 9 min</span>
          </div>
          <a href="docs/lessons/lesson-02-variables/" class="btn-start">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-3 -->
        <article class="level-card">
          <div class="card-header">
            <span class="level-number">WORLD 1-3</span>
            <span class="level-icon">🔄</span>
          </div>
          <h3 class="card-title">Condiciones y bucles</h3>
          <ul class="card-objectives">
            <li><input type="checkbox"> Escribir un <code>if</code> con dos caminos</li>
            <li><input type="checkbox"> Usar <code>for</code> para repetir intentos</li>
            <li><input type="checkbox"> Agregar <code>break</code> al acertar</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup">⚡ if, for, break</span>
            <span class="meta-tag xp-tag">🪙 200 XP</span>
            <span class="meta-tag duration-tag">⏱ 10 min</span>
          </div>
          <a href="docs/lessons/lesson-03-if-loops/" class="btn-start">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-4 -->
        <article class="level-card">
          <div class="card-header">
            <span class="level-number">WORLD 1-4</span>
            <span class="level-icon">🔧</span>
          </div>
          <h3 class="card-title">Métodos y entrada por consola</h3>
          <ul class="card-objectives">
            <li><input type="checkbox"> Crear un método con nombre claro</li>
            <li><input type="checkbox"> Leer un número con <code>Scanner</code></li>
            <li><input type="checkbox"> Separar responsabilidades del <code>main</code></li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup">⚡ Scanner, métodos</span>
            <span class="meta-tag xp-tag">🪙 250 XP</span>
            <span class="meta-tag duration-tag">⏱ 10 min</span>
          </div>
          <a href="docs/lessons/lesson-04-methods/" class="btn-start">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-5 -->
        <article class="level-card">
          <div class="card-header">
            <span class="level-number">WORLD 1-5</span>
            <span class="level-icon">🧩</span>
          </div>
          <h3 class="card-title">Clases y objetos</h3>
          <ul class="card-objectives">
            <li><input type="checkbox"> Definir una clase con campos privados</li>
            <li><input type="checkbox"> Construir objetos con <code>new</code></li>
            <li><input type="checkbox"> Llamar métodos del objeto</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup">⚡ class, new, this</span>
            <span class="meta-tag xp-tag">🪙 300 XP</span>
            <span class="meta-tag duration-tag">⏱ 12 min</span>
          </div>
          <a href="docs/lessons/lesson-05-classes-objects/" class="btn-start">▶ EMPEZAR</a>
        </article>

        <!-- WORLD 1-6 — FINAL BOSS -->
        <article class="level-card boss-card">
          <div class="card-header">
            <span class="level-number">🏰 WORLD 1-6</span>
            <span class="level-icon">🏰</span>
          </div>
          <h3 class="card-title">Encapsulación y proyecto final</h3>
          <ul class="card-objectives">
            <li><input type="checkbox"> Proteger datos con <code>private</code></li>
            <li><input type="checkbox"> Completar la lógica del juego</li>
            <li><input type="checkbox"> Ejecutar la aventura completa</li>
          </ul>
          <div class="card-meta">
            <span class="meta-tag powerup">⚡ Encapsulación</span>
            <span class="meta-tag xp-tag">🪙 500 XP</span>
            <span class="meta-tag duration-tag">⏱ 12 min</span>
          </div>
          <a href="docs/lessons/lesson-06-final-project/" class="btn-start">▶ EMPEZAR</a>
        </article>

      </div>
    </div>
  </section>

  <!-- ================================================================
       STAR ROAD
  ================================================================ -->
  <section class="star-road">
    <h2 class="star-road-title">⭐ STAR ROAD — RETOS BONUS</h2>
    <div class="star-grid">
      <div class="star-card">
        <span class="star-icon">🎨</span>
        <h4>Dibujo con texto</h4>
        <p>Crea arte ASCII en la consola usando solo <code>println</code></p>
        <a href="docs/lessons/lesson-01-hello-world/part-02-practice.md" class="star-link">⭐ INTENTAR</a>
      </div>
      <div class="star-card">
        <span class="star-icon">🧮</span>
        <h4>Calculadora completa</h4>
        <p>Suma, resta y multiplica usando métodos separados</p>
        <a href="docs/lessons/lesson-04-methods/part-02-practice.md" class="star-link">⭐ INTENTAR</a>
      </div>
      <div class="star-card">
        <span class="star-icon">🎮</span>
        <h4>Tu propio juego</h4>
        <p>Modifica el proyecto final con tu propia temática</p>
        <a href="docs/lessons/lesson-06-final-project/part-02-practice.md" class="star-link">⭐ INTENTAR</a>
      </div>
    </div>
  </section>

  <!-- ================================================================
       WARP ZONE
  ================================================================ -->
  <section class="warp-zone">
    <a href="docs/quick-start-student.md" class="pipe-link">🟢 TUBERÍA — MODO RÁPIDO</a>
    <a href="docs/student-mission-map.md" class="pipe-link">🟢 TUBERÍA — MAPA DE MISIÓN</a>
    <a href="docs/replit-lab-guide.md" class="pipe-link">🟢 TUBERÍA — GUÍA REPLIT</a>
  </section>

  <!-- ================================================================
       CONTROLS LEGEND
  ================================================================ -->
  <section class="controls-section">
    <h3>🔧 CONTROLES</h3>
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
  <section class="resources-section">
    <h3>📂 RECURSOS DEL CURSO</h3>
    <div class="resources-grid">
      <a href="course-plan.md" class="resource-link"><span class="icon">📋</span> Plan del curso</a>
      <a href="starter-files/" class="resource-link"><span class="icon">💻</span> Código inicial</a>
      <a href="completed-examples/" class="resource-link"><span class="icon">✅</span> Soluciones completas</a>
      <a href="docs/lessons/" class="resource-link"><span class="icon">📖</span> Índice de lecciones</a>
      <a href="docs/online-editor-links.md" class="resource-link"><span class="icon">🔗</span> Editores online</a>
      <a href="scripts/" class="resource-link"><span class="icon">🎬</span> Guiones de video</a>
      <a href="CONTRIBUTING.md" class="resource-link"><span class="icon">🤝</span> Contribuir</a>
      <a href="https://github.com/JorgeVidVen/java-fundamentals-course-iceq" class="resource-link"><span class="icon">📦</span> Repositorio GitHub</a>
    </div>
  </section>

  <!-- ================================================================
       CREDITS
  ================================================================ -->
  <footer class="credits">
    <p class="credit-title">★ JAVA FUNDAMENTALS COURSE ICEQ ★</p>
    <p>UPC — Responsabilidad Social Pre 2026</p>
    <p>Código: 1ASI0729</p>
    <p>
      <a href="https://github.com/JorgeVidVen/java-fundamentals-course-iceq">📂 github.com/JorgeVidVen/java-fundamentals-course-iceq</a>
    </p>
  </footer>

</div>
</body>
</html>
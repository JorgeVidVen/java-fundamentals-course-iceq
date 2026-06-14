<p align="center">
  <img src="assets/banner.png" alt="Java Fundamentals Course ICEQ" width="100%">
</p>

<div align="center">

# Java Fundamentals Course ICEQ

### Material de curso introductorio de Java para estudiantes de secundaria

[![Java](https://img.shields.io/badge/Java-Fundamentals-orange?style=flat-square)](#)
[![Replit](https://img.shields.io/badge/Editor-Replit-blueviolet?style=flat-square)](#)
[![Audiencia](https://img.shields.io/badge/Audiencia-Secundaria-brightgreen?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Solo_navegador-lightgrey?style=flat-square)](#)

</div>

---

## Propósito

Este repositorio contiene el material fuente para un curso introductorio de aproximadamente una hora sobre fundamentos de Java y Programación Orientada a Objetos. Está orientado a estudiantes de secundaria sin experiencia previa.

La herramienta principal de práctica es **Replit**. OnlineGDB queda como respaldo operativo si Replit no está disponible durante una sesión. Los enlaces directos a starters y soluciones están en `docs/online-editor-links.md`.

## Estructura

```text
starter-files/
  lesson-XX-topic/
    *.java

docs/
  replit-lab-guide.md
  online-editor-links.md
  communication-style-guide.md
  reference-notes.md
  lessons/
    lesson-XX-topic/
      part-01-theory.md
      part-02-practice.md
      part-03-quiz.md

completed-examples/
  lesson-XX-topic/
    *.java
    README.md

scripts/
  video-production-checklist.md
  rubric-self-review.md
  lesson-XX-script.md
```

## Orden recomendado

1. Leer `course-plan.md`.
2. Preparar el entorno con `docs/replit-lab-guide.md` y revisar `docs/online-editor-links.md`.
3. Estudiar cada lección desde `docs/lessons`.
4. Crear un Repl por lección usando solo el código de `starter-files`.
5. Comparar la práctica terminada con `completed-examples`.
6. Revisar `course-plan.md` para enlaces pendientes y evidencias del curso.


>[!NOTE]
> **Cada carpeta de `starter-files` y `completed-examples` está pensada para copiarse y ejecutarse como un Repl independiente. Por eso varias lecciones tienen una clase `Main` en el default package. Si un IDE local intenta compilar todas las carpetas a la vez, puede marcar clases duplicadas; la validación correcta es compilar cada lección por separado.**

## Reglas de comunicación

El curso usa español técnico claro. Se priorizan términos como biblioteca, requisito, aplicación, desplegar, probar y hacer commit, de acuerdo con el enunciado UPC.

## Estado pendiente

- Enlace del repositorio GitHub público.
- Enlaces Replit por lección, si se publican como editor principal.
- Enlaces YouTube no listados.
- Reporte de participación del equipo.


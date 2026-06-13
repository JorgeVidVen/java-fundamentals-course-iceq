---
layout: default
title: Contributing
description: Contribution guide for Java Fundamentals Course ICEQ.
permalink: /contributing/
---

# Contributing

Este repositorio contiene el curso **Java Fundamentals Course ICEQ** para la asignación de Responsabilidad Social UPC Pre 2026. Toda contribución debe mantener el material claro para estudiantes de secundaria, ejecutable en Replit y consistente con la entrega final en Markdown/PDF.

## Equipo y responsabilidades

| Integrante | Responsabilidad principal | Entregables esperados |
|---|---|---|
| Student 1 | Integración general del repositorio y revisión técnica final. | `README.md`, `course-plan.md`, estructura de carpetas, validación de compilación y consistencia del material. |
| Student 2 | Desarrollo de fundamentos iniciales. | Lección 01, Lección 02, starters, ejemplos completos y guiones asociados. |
| Student 3 | Desarrollo de control de flujo y métodos. | Lección 03, Lección 04, ejercicios en Replit, troubleshooting y ejemplos completos. |
| Student 4 | Desarrollo de programación orientada a objetos. | Lección 05, Lección 06, proyecto final, clases Java y solución completa. |
| Student 5 | Revisión de comunicación, recursos visuales y evidencia final. | Banners, diagramas, checklist, rúbrica, enlaces publicados y apoyo para PDF final. |

Las responsabilidades pueden moverse según disponibilidad del equipo, pero el cambio debe reflejarse en este archivo antes de publicar la entrega final.

## Alcance del repositorio

| Ruta | Propósito |
|---|---|
| `course-plan.md` | Plan general del curso, ruta de aprendizaje, enlaces publicados, respaldos y evidencias. |
| `docs/lessons/` | Material principal para estudiantes: teoría, práctica y quiz por lección. |
| `docs/` | Guías de entorno, enlaces de editores, glosario y referencias de apoyo. |
| `starter-files/` | Código Java inicial con comentarios y espacios de trabajo para el estudiante. |
| `completed-examples/` | Soluciones completas que compilan de forma independiente por lección. |
| `scripts/` | Guiones, checklist y rúbrica de revisión del equipo. |
| `assets/` | Banners, diagramas, miniaturas y recursos visuales del curso. |
| `.github/` | Plantillas y configuración pública del repositorio. |

## Estilo Java

- Usar `public class Main` en archivos base que se ejecutan como `Main.java`.
- Mantener los ejemplos sin `package` para facilitar la ejecución en Replit.
- Usar nombres descriptivos como `studentName`, `averageGrade`, `attempt`, `player` y `score`.
- Evitar APIs avanzadas que no se explican en el curso.
- Los starters deben guiar sin resolver completamente el ejercicio.
- Los completed examples deben compilar sin pasos adicionales.

## Estilo Markdown

- El contenido visible para estudiantes debe estar en español.
- Los nombres de archivos y carpetas se mantienen en inglés.
- Cada lección se divide en `part-01-theory.md`, `part-02-practice.md` y `part-03-quiz.md`.
- Usar tablas, citas, bloques de código, listas de verificación, imágenes y bloques `<details>` cuando aporten claridad.
- Evitar frases genéricas, exceso de entusiasmo y texto que parezca instrucción interna del equipo.
- Las instrucciones de grabación o coordinación pertenecen a `scripts/`, no a `docs/lessons/`.

## Revisión antes de integrar

Un cambio está listo cuando otro integrante puede responder con claridad:

- Qué lección o archivo de soporte cambió.
- Qué problema del estudiante resuelve.
- Si el código Java compila por lección.
- Si el material respeta el alcance del enunciado UPC.
- Si las notas internas están separadas del contenido del estudiante.

Si alguna respuesta no es clara, el cambio debe revisarse antes de publicarse.

---
layout: lesson
title: "Leccion 06: Encapsulacion y proyecto final - Quiz"
description: Review questions about integration, encapsulation and game rules.
---

<p align="center">
  <img src="../../../assets/lesson-06-banner.png" alt="Encapsulación y proyecto final" width="100%">
</p>

<div align="center">

# Lección 06: Encapsulación y proyecto final

### Proteger reglas internas en un juego pequeño

[![Nivel](https://img.shields.io/badge/Nivel-Intermedio_inicial-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-12_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Quiz-purple?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** [Crear laboratorio online](/docs/online-editor-links/).
> **Editor de respaldo:** OnlineGDB.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Quiz de comprensión

Responde antes de abrir cada solución. Las preguntas están diseñadas para revisar razonamiento, no memoria de sintaxis.

<details>
<summary><strong>1. ¿Por qué <code>score</code> debe ser privado?</strong></summary>

Porque el puntaje tiene reglas. Si cualquier archivo puede cambiarlo, también puede dejarlo en un estado inválido.

</details>

<details>
<summary><strong>2. ¿Qué responsabilidad debería tener <code>Main</code> en el proyecto final?</strong></summary>

Debe iniciar la aplicación. La lógica del juego debería vivir en `Game` para mantener el punto de entrada limpio.

</details>

<details>
<summary><strong>3. ¿Por qué varias clases pequeñas pueden ser más claras que una clase enorme?</strong></summary>

Porque cada clase tiene una responsabilidad más fácil de explicar, probar y modificar.

</details>

<details>
<summary><strong>4. ¿Qué evidencia demuestra que esta lección sí se entendió?</strong></summary>

El estudiante puede ejecutar el programa, explicar una línea clave, corregir un error real y conectar el concepto con el proyecto final.

</details>

<details>
<summary><strong>5. ¿Qué sería una mejora pequeña y razonable?</strong></summary>

Una mejora razonable cambia un dato, agrega una salida o refina una regla sin introducir temas que todavía no se han explicado.

</details>

<details>
<summary><strong>6. Si agregas dificultad, rol y recompensas, ¿dónde debería vivir cada cambio?</strong></summary>

La dificultad y el avance de niveles pueden vivir en `Game`, porque afectan el flujo. El rol puede guardarse en `Player`, porque describe al jugador. Las recompensas y textos visibles pueden concentrarse en `GameMessage`.

</details>

## Diagnóstico de encapsulación

<details>
<summary><strong>7. ¿Qué problema tiene este diseño?</strong></summary>

```java
public class Player {
    public String name;
    public int score;
}
```

Los atributos son públicos. Cualquier clase podría cambiar `score` directamente, incluso con valores inválidos.

Una versión más cuidada usa `private`:

```java
public class Player {
    private String name;
    private int score;
}
```

Luego se agregan métodos para leer o modificar datos con reglas.

</details>

<details>
<summary><strong>8. ¿Por qué este método protege el puntaje?</strong></summary>

```java
public void addScore(int points) {
    if (points > 0) {
        score = score + points;
    }
}
```

Porque no permite sumar valores negativos o cero. La regla queda dentro de `Player`, que es la clase dueña del puntaje.

</details>

<details>
<summary><strong>9. ¿Qué diferencia hay entre getter y setter?</strong></summary>

Un getter permite leer un dato:

```java
public int getScore() {
    return score;
}
```

Un setter permite reemplazar un dato:

```java
public void setScore(int score) {
    this.score = score;
}
```

En este proyecto conviene evitar un `setScore` directo, porque saltaría la regla de sumar puntos solo cuando sean válidos.

</details>

## Responsabilidades por clase

Relaciona cada clase con su responsabilidad principal.

| Clase | Responsabilidad |
|---|---|
| `Main` | Iniciar la aplicación. |
| `Game` | Coordinar el flujo del programa. |
| `Player` | Proteger nombre y puntaje. |
| `InputHelper` | Leer datos desde consola. |
| `GameMessage` | Agrupar mensajes de salida. |

<details>
<summary><strong>10. ¿Por qué no conviene que <code>Main</code> tenga toda la lógica?</strong></summary>

Porque `Main` se volvería difícil de leer. Si todo vive ahí, cualquier cambio obliga a revisar una clase enorme. Un punto de entrada pequeño facilita entender dónde empieza el programa.

</details>

<details>
<summary><strong>11. ¿Por qué <code>InputHelper</code> no debería calcular puntaje?</strong></summary>

Porque su responsabilidad es leer datos. Calcular puntaje pertenece a la lógica del juego o al objeto que protege el puntaje.

</details>

<details>
<summary><strong>12. ¿Por qué <code>GameMessage</code> no debería leer teclado?</strong></summary>

Porque su responsabilidad es mostrar mensajes. Si también lee teclado, mezcla salida con entrada y se vuelve más difícil de mantener.

</details>

## Detecta el error de diseño

<details>
<summary><strong>13. ¿Qué está mal en este fragmento?</strong></summary>

```java
Player player = new Player("Ana");
player.score = -100;
```

El código intenta modificar `score` directamente. Si `score` es privado, Java no lo permitirá. Esa restricción es positiva porque evita estados inválidos.

Forma correcta:

```java
player.addScore(10);
```

</details>

<details>
<summary><strong>14. ¿Qué problema aparece si el constructor no asigna <code>name</code>?</strong></summary>

```java
public Player(String name) {
    score = 0;
}
```

El atributo `name` quedaría sin el valor recibido. Luego `getName()` podría devolver `null`.

Versión correcta:

```java
public Player(String name) {
    this.name = name;
    this.score = 0;
}
```

</details>

<details>
<summary><strong>15. ¿Por qué se usa <code>this.name</code>?</strong></summary>

Porque el parámetro y el atributo tienen el mismo nombre. `this.name` se refiere al atributo del objeto; `name` se refiere al parámetro recibido.

</details>

## Completa el código

<details>
<summary><strong>16. Completa el constructor</strong></summary>

```java
public Player(String name) {
    ____________;
    ____________;
}
```

Respuesta:

```java
public Player(String name) {
    this.name = name;
    this.score = 0;
}
```

</details>

<details>
<summary><strong>17. Completa el getter de puntaje</strong></summary>

```java
public int getScore() {
    ____________;
}
```

Respuesta:

```java
public int getScore() {
    return score;
}
```

</details>

<details>
<summary><strong>18. Completa una llamada desde <code>Main</code> o <code>Game</code></strong></summary>

Objetivo: crear un jugador llamado Ana y sumar 10 puntos.

```java
Player player = new Player("Ana");
player.__________(10);
```

Respuesta:

```java
Player player = new Player("Ana");
player.addScore(10);
```

</details>

## Arquitectura del proyecto final

<details>
<summary><strong>19. ¿Qué archivo revisarías si el programa no muestra bienvenida?</strong></summary>

Primero revisaría `Game.start()` para confirmar que llama a `GameMessage.printWelcome()`. Luego revisaría `GameMessage`.

</details>

<details>
<summary><strong>20. ¿Qué archivo revisarías si el nombre del jugador aparece como <code>null</code>?</strong></summary>

Revisaría `Player`, especialmente el constructor. Es probable que falte `this.name = name;`.

</details>

<details>
<summary><strong>21. ¿Qué archivo revisarías si el programa falla al leer un número?</strong></summary>

Revisaría `InputHelper`, porque allí está centralizada la lectura de consola. Si el usuario escribe texto cuando el programa espera número, puede aparecer `NumberFormatException`.

</details>

## Decisiones de mejora

<details>
<summary><strong>22. ¿Conviene agregar vidas, niveles o dificultad en esta entrega?</strong></summary>

Solo si no rompe el alcance del curso. Una mejora razonable debe reforzar variables, condiciones, métodos, clases o encapsulación. Si exige arreglos complejos que no se enseñaron, es mejor dejarla como idea futura.

</details>

<details>
<summary><strong>23. ¿Qué mejora pequeña sí es coherente?</strong></summary>

Agregar un mensaje final con nombre y puntaje:

```java
System.out.println("Jugador: " + player.getName());
System.out.println("Puntaje final: " + player.getScore());
```

Usa getters y refuerza encapsulación sin introducir temas avanzados.

</details>

<details>
<summary><strong>24. ¿Qué mejora requiere más cuidado?</strong></summary>

Validar entrada cuando el usuario escribe texto en lugar de número. Es útil, pero puede requerir `try/catch`, un tema que quizá no se explique con profundidad en este curso.

</details>

## Prueba de comprensión integral

Lee este flujo:

```text
Main crea Game.
Game muestra bienvenida.
Game lee nombre.
Game crea Player.
Game ejecuta rondas.
Player protege score.
Game muestra resumen.
```

<details>
<summary><strong>25. ¿Qué principio se observa en ese flujo?</strong></summary>

Separación de responsabilidades. Cada clase tiene un rol reconocible y el programa completo se entiende como colaboración entre clases.

</details>

<details>
<summary><strong>26. ¿Qué pasaría si todas esas acciones estuvieran dentro de <code>Main</code>?</strong></summary>

El programa podría funcionar, pero sería más difícil de explicar, corregir y ampliar. El objetivo de la lección no es solo que corra, sino que tenga una estructura razonable.

</details>

## Mini rúbrica

| Criterio | Logrado | En proceso | Por completar |
|---|---|---|---|
| Explica `private`. |  |  |  |
| Usa getters para leer datos. |  |  |  |
| Evita modificar `score` directamente. |  |  |  |
| Identifica la responsabilidad de cada clase. |  |  |  |
| Mantiene `Main` pequeño. |  |  |  |
| Ejecuta el proyecto final en Replit. |  |  |  |

## Autoevaluación

- [ ] Puedo explicar el concepto principal sin leer la definición.
- [ ] Puedo ubicar el error más común de la lección.
- [ ] Puedo ejecutar el laboratorio en Replit.
- [ ] Puedo decir cómo esta lección prepara el proyecto final.

---

<div align="center">

**Volver al [plan de curso](/course-plan/)**

</div>




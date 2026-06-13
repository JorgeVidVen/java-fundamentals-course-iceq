---
layout: lesson
title: "Leccion 06: Encapsulacion y proyecto final - Teoria"
description: Encapsulation, game classes and final project responsibilities.
---

<p align="center">
  <img src="../../../assets/lesson-06-banner.png" alt="Encapsulación y proyecto final" width="100%">
</p>

<div align="center">

# Lección 06: Encapsulación y proyecto final

### Proteger reglas internas en un juego pequeño

[![Nivel](https://img.shields.io/badge/Nivel-Intermedio_inicial-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-12_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Teoría-orange?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** [Crear laboratorio online](/docs/online-editor-links/).
> **Editor de respaldo:** OnlineGDB.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Punto de partida

La última lección une el curso. El estudiante ya no mira piezas separadas: ahora identifica cómo Main, Game, Player, InputHelper y GameMessage colaboran para producir una aplicación pequeña.

> **Analogía de la lección:** La encapsulación es una caja fuerte con ventanilla. Otros objetos pueden pedir operaciones, pero no deberían modificar directamente el interior.

Antes de abrir Replit, mira el objetivo técnico de esta sesión: al terminar deberías poder **integrar clases, métodos, entrada, bucles y encapsulación en un juego de adivinanzas**. No memorices cada palabra del código; identifica qué responsabilidad cumple cada bloque.

## Conceptos de la sesión

### Encapsulación
Encapsular significa proteger el estado interno de un objeto. `private` evita cambios directos y obliga a usar métodos públicos controlados.

### Getter
Un getter permite leer un dato sin abrir todo el objeto. `getScore()` muestra el puntaje, pero no permite colocarlo en negativo.

### Método de regla
Un método como `addScore(int points)` no solo suma: también decide si el valor recibido es válido.

### Colaboración de clases
El proyecto final usa varias clases pequeñas. `Main` inicia, `Game` coordina, `Player` guarda estado, `InputHelper` lee datos y `GameMessage` ordena mensajes.

## Lectura guiada de código

Lee el proyecto por responsabilidades: Main no debe contener todo el juego; solo debe iniciar Game. Esa separación hace que el código final sea más fácil de leer, revisar y mantener.

El siguiente ejemplo está mal a propósito. En un curso para principiantes, ver el error primero ayuda a entender la regla.

~~~java
public class Player {
    public int score;
}

public class Main {
    public static void main(String[] args) {
        Player player = new Player();
        player.score = -999;
    }
}
~~~

**Qué ocurre:** El puntaje público permite valores imposibles. El objeto pierde control de sus propias reglas. Con private y métodos públicos, la clase protege su estado.

Ahora observa una versión correcta y mínima:

~~~java
public class Player {
    private int score;

    public void addScore(int points) {
        if (points > 0) {
            score += points;
        }
    }

    public int getScore() {
        return score;
    }
}
~~~

### Señales que debes reconocer

- La estructura principal se mantiene estable.
- Los nombres comunican intención.
- El código se puede ejecutar en Replit sin instalación local.
- El ejemplo prepara una pieza del proyecto final, no es una actividad aislada.

## Pausa de comprensión

Responde en una libreta o en un comentario del Repl:

1. ¿Qué línea produce el resultado visible?
2. ¿Qué parte del código no deberías modificar todavía?
3. ¿Qué error sería más fácil de cometer en esta lección?

## Material externo opcional

- Replit se usará como editor principal porque permite ejecutar desde el navegador.
- Dev.java y Oracle Java Tutorials se usan como referencia técnica para validar sintaxis y conceptos.
- JDoodle u OnlineGDB quedan como respaldo si Replit no carga durante la sesión.

## Qué integra el proyecto final

La aplicación final no introduce un lenguaje nuevo ni una herramienta nueva. Integra lo ya visto:

| Lección | Aporte al proyecto final |
|---|---|
| 01 | Mostrar mensajes en consola. |
| 02 | Guardar datos como nombre, puntaje e intentos. |
| 03 | Decidir con `if` y repetir con bucles. |
| 04 | Separar acciones con métodos y leer entrada. |
| 05 | Modelar jugador y sala con clases. |
| 06 | Proteger estado e integrar clases. |

El proyecto se llama **Aventura del Número Secreto** porque el usuario intentará adivinar números en distintas rondas.

La versión completa puede incluir decisiones pequeñas para hacerlo más entretenido: rol del jugador, dificultad y recompensas por nivel. Esas mejoras siguen usando los mismos fundamentos, por eso son buenas extensiones para principiantes.

---

## Arquitectura simple del proyecto

```text
Main
 |
 |-- crea Game
 |-- llama game.start()

Game
 |
 |-- coordina rondas
 |-- usa Player
 |-- usa InputHelper
 |-- usa GameMessage

Player
 |
 |-- guarda nombre, puntaje, vidas y rondas ganadas
 |-- protege reglas del jugador

InputHelper
 |
 |-- lee texto
 |-- lee números
 |-- valida rangos

GameMessage
 |
 |-- imprime bienvenida
 |-- imprime reglas
 |-- imprime resumen
```

Este mapa evita un error típico: poner todo dentro de `Main`.

---

## Encapsulación

Encapsular significa proteger el estado interno de un objeto y ofrecer métodos controlados para interactuar con él.

Sin encapsulación:

~~~java
public int score;
~~~

Otro archivo podría hacer:

~~~java
player.score = -999;
~~~

Eso rompe la regla del juego.

Con encapsulación:

~~~java
private int score;

public void addScore(int points) {
    if (points > 0) {
        score += points;
    }
}
~~~

Ahora el objeto decide qué cambios acepta.

---

## `private`

`private` impide acceso directo desde fuera de la clase.

~~~java
public class Player {
    private int score;
}
~~~

Si desde `Game` intentas:

~~~java
player.score = 100;
~~~

Java puede responder:

```text
score has private access in Player
```

Eso no es un problema del compilador. Es la protección funcionando.

---

## Getters

Un getter permite leer un dato protegido.

~~~java
public int getScore() {
    return score;
}
~~~

Lectura:

```text
Permito consultar el puntaje, pero no modificarlo directamente.
```

Ejemplo:

~~~java
System.out.println("Puntaje: " + player.getScore());
~~~

---

## Métodos de regla

Un método de regla no solo cambia un dato. También valida.

~~~java
public void addScore(int points) {
    if (points > 0) {
        score += points;
    }
}
~~~

Si alguien llama:

~~~java
player.addScore(-50);
~~~

el puntaje no baja, porque la regla lo impide.

Otro ejemplo:

~~~java
public void loseLife() {
    if (lives > 0) {
        lives--;
    }
}
~~~

La vida no baja por debajo de cero.

---

## Estado de `Player`

El jugador puede guardar:

| Atributo | Tipo | Significado |
|---|---|---|
| `name` | `String` | Nombre del jugador. |
| `score` | `int` | Puntaje acumulado. |
| `lives` | `int` | Vidas restantes. |
| `roundsWon` | `int` | Rondas ganadas. |

Estos atributos deben ser privados.

~~~java
private final String name;
private int score;
private int lives;
private int roundsWon;
~~~

`name` puede ser `final` porque no cambia después de crear el jugador.

---

## Flujo del juego

```text
mostrar bienvenida
      |
      v
leer nombre
      |
      v
crear jugador
      |
      v
mostrar reglas
      |
      v
repetir niveles
      |
      v
leer intento
      |
      v
comparar con número secreto
      |
      v
sumar puntos o perder vida
      |
      v
mostrar resumen
```

Este flujo usa todas las lecciones anteriores.

---

## Arrays simples

El proyecto puede usar arreglos para guardar datos de niveles:

~~~java
private final String[] levelNames = {
    "Bosque de Bits",
    "Cueva de Condiciones",
    "Castillo de Clases"
};
~~~

Un arreglo guarda varios valores del mismo tipo.

Índices:

```text
levelNames[0] -> "Bosque de Bits"
levelNames[1] -> "Cueva de Condiciones"
levelNames[2] -> "Castillo de Clases"
```

Los índices empiezan en cero.

---

## Error común con arrays

Si un arreglo tiene tres elementos:

~~~java
String[] levelNames = {"A", "B", "C"};
~~~

estos índices existen:

```text
0, 1, 2
```

Este índice no existe:

~~~java
levelNames[3]
~~~

Puede aparecer:

```text
ArrayIndexOutOfBoundsException
```

---

## `InputHelper`

`InputHelper` separa la lectura de datos.

En vez de poner lectura y validación en `Game`, se crea una clase auxiliar:

~~~java
public class InputHelper {
    private final Scanner scanner;

    public InputHelper(Scanner scanner) {
        this.scanner = scanner;
    }
}
~~~

Esto permite que `Game` se concentre en reglas del juego.

---

## `GameMessage`

`GameMessage` ordena mensajes de consola.

~~~java
public class GameMessage {
    public static void printWelcome() {
        System.out.println("Aventura del Número Secreto");
    }
}
~~~

No guarda estado. Solo agrupa salidas.

Por eso sus métodos pueden ser `static` en este curso.

---

## Responsabilidades finales

| Clase | Responsabilidad |
|---|---|
| `Main` | Punto de entrada. |
| `Game` | Coordinar la partida. |
| `Player` | Proteger estado del jugador. |
| `InputHelper` | Leer y validar entrada. |
| `GameMessage` | Mostrar mensajes. |

Si una clase empieza a hacer todo, el diseño se vuelve difícil de explicar.

---

## Código incorrecto a propósito

~~~java
public class Player {
    public int score;
}

public class Main {
    public static void main(String[] args) {
        Player player = new Player();
        player.score = -999;
    }
}
~~~

Problema:

```text
El puntaje puede quedar en un estado inválido.
```

Versión protegida:

~~~java
public class Player {
    private int score;

    public void addScore(int points) {
        if (points > 0) {
            score += points;
        }
    }

    public int getScore() {
        return score;
    }
}
~~~

---

## Apoyo visual

El modelo de clases muestra cómo se separan responsabilidades entre `Player`, `Game` e `InputHelper`.

![Modelo POO del juego](../../../assets/images/oop-game-model.svg)

El mockup de consola muestra el tipo de experiencia final que se busca construir con entrada, pistas y estado del jugador.

![Pantalla final del juego](../../../assets/images/final-game-screen-mockup.svg)

---

## Checklist antes del laboratorio

- [ ] Sé explicar encapsulación.
- [ ] Sé explicar `private`.
- [ ] Sé explicar getter.
- [ ] Sé explicar método de regla.
- [ ] Sé leer un arreglo simple.
- [ ] Sé identificar responsabilidades por clase.
- [ ] Sé explicar por qué `Main` debe ser pequeño.
- [ ] Sé conectar el proyecto final con las seis lecciones.

---

<div align="center">

**Siguiente:** [Laboratorio en Replit](part-02-practice/)

</div>





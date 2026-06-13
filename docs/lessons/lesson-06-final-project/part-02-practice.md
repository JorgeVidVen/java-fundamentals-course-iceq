---
layout: lesson
title: "Leccion 06: Encapsulacion y proyecto final - Practica"
description: Final lab to complete Aventura del Numero Secreto.
has_compiler: true
---

<p align="center">
  <img src="../../../assets/lesson-06-banner.png" alt="Encapsulación y proyecto final" width="100%">
</p>

<div align="center">

# Lección 06: Encapsulación y proyecto final

### Proteger reglas internas en un juego pequeño

[![Nivel](https://img.shields.io/badge/Nivel-Intermedio_inicial-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-12_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Práctica-blue?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** [Crear laboratorio online](/docs/online-editor-links/).
> **Editor de respaldo:** OnlineGDB.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Laboratorio en Replit

La práctica final no busca añadir temas nuevos. Busca integrar lo aprendido en una aplicación de consola que pueda ejecutarse, revisarse y explicarse con claridad.

**Reto central:** Completar la Aventura del Número Secreto.

### Preparación

1. Abre el enlace de Replit de esta lección.
2. Verifica que el archivo principal sea `Main.java` o el archivo indicado en la práctica.
3. Presiona **Run** una vez antes de editar.
4. Lee la consola. Si aparece un error, úsalo como pista.

> **Respaldo:** si Replit no está disponible, usa OnlineGDB copiando los archivos Java de esta carpeta. La entrega oficial debe mantener Replit como enlace principal.

## Pruébalo aquí mismo 🚀

El editor de abajo tiene el juego completo. Ejecútalo, juega unas partidas, luego modifícalo.

<div data-pym-src="https://www.jdoodle.com/plugin" data-language="java" data-version-index="6">
import java.util.Scanner;
import java.util.Random;

class Player {
    private String name;
    private int score;
    private int lives;

    Player(String name) {
        this.name = name;
        this.score = 0;
        this.lives = 3;
    }

    void addScore(int points) { score += points; }
    boolean hasLives() { return lives > 0; }
    void loseLife() { lives--; }
    String getName() { return name; }
    int getScore() { return score; }
}

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rand = new Random();
        System.out.print("¿Cómo te llamas? ");
        String name = sc.nextLine();
        Player player = new Player(name);
        int secret = rand.nextInt(10) + 1;
        int guess;
        do {
            System.out.print("Adivina el número (1-10): ");
            guess = sc.nextInt();
            if (guess == secret) {
                System.out.println("¡Correcto!");
                player.addScore(100);
                break;
            } else {
                System.out.println("Incorrecto.");
                player.loseLife();
            }
        } while (player.hasLives());
        System.out.println("Puntaje final: " + player.getScore());
        sc.close();
    }
}
</div>

> **Nota:** la versión completa del proyecto final tiene 5 clases. Este editor es una versión simplificada para practicar. Usa Replit para el proyecto completo con varios archivos.

## Trabajo paso a paso

1. Abre el Repl final.
2. Ejecuta el starter y observa qué clases participan.
3. Completa el constructor de `Player`.
4. Protege el puntaje con `private` y métodos públicos.
5. Completa la lógica de intentos en `Game`.
6. Ejecuta varias partidas con valores distintos.

## Reto de extensión

Cuando el juego base funcione, agrega un **modo aventura** sin romper encapsulación:

1. Un rol de jugador elegido al inicio.
2. Una dificultad que cambie el rango del número secreto o los intentos.
3. Una recompensa textual al ganar cada nivel.
4. Un resumen final distinto según rondas ganadas o puntaje.

Mantén la responsabilidad de cada clase:

| Mejora | Clase sugerida |
|---|---|
| Rol, dificultad y avance de niveles | `Game` |
| Nombre, puntaje, vidas y rondas ganadas | `Player` |
| Lectura validada de opciones | `InputHelper` |
| Textos de consola y recompensas | `GameMessage` |

No permitas que otro archivo escriba directamente `lives = -1` o `score = -999`.

## Errores frecuentes y solución

| Error literal | Qué significa | Cómo corregirlo |
|---|---|---|
| `error: score has private access in Player` | Intentaste modificar un atributo protegido desde fuera. | Usa un método público como `addScore(...)`. |
| `ArrayIndexOutOfBoundsException` | Se intentó acceder a una posición inexistente del arreglo. | Revisa índices entre `0` y `length - 1`. |
| `error: cannot find symbol method getScore()` | El método no existe o está mal escrito. | Revisa nombre, paréntesis y ubicación dentro de `Player`. |
| `error: constructor Player in class Player cannot be applied to given types` | La llamada no coincide con el constructor. | Envía el nombre que el constructor solicita. |

## Evidencia de práctica

La práctica queda lista cuando puedes mostrar:

- Una captura o ejecución visible en Replit.
- El código starter modificado con intención clara.
- Una explicación breve del error más importante que corregiste.
- Una frase que conecte esta lección con el proyecto final.
- Si hiciste el modo aventura, muestra rol, dificultad y una recompensa desbloqueada.

## Archivos del proyecto final

Confirma que el Repl contiene:

```text
Main.java
Game.java
Player.java
InputHelper.java
GameMessage.java
```

Cada archivo tiene una responsabilidad distinta.

| Archivo | Acción esperada |
|---|---|
| `Main.java` | Inicia el juego. |
| `Game.java` | Coordina rondas. |
| `Player.java` | Protege datos del jugador. |
| `InputHelper.java` | Lee entrada. |
| `GameMessage.java` | Muestra mensajes. |

---

## Paso 1: mantener `Main` pequeño

`Main.java` debe verse así:

~~~java
public class Main {
    public static void main(String[] args) {
        Game game = new Game();
        game.start();
    }
}
~~~

No coloques toda la lógica del juego en `Main`.

---

## Paso 2: completar `Player`

`Player` debe proteger estado.

Versión sugerida:

~~~java
public class Player {
    private final String name;
    private int score;
    private int lives;
    private int roundsWon;

    public Player(String name) {
        this.name = name;
        this.score = 0;
        this.lives = 5;
        this.roundsWon = 0;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }

    public int getLives() {
        return lives;
    }

    public int getRoundsWon() {
        return roundsWon;
    }

    public boolean hasLives() {
        return lives > 0;
    }

    public void addScore(int points) {
        if (points > 0) {
            score += points;
        }
    }

    public void loseLife() {
        if (lives > 0) {
            lives--;
        }
    }

    public void addRoundWon() {
        roundsWon++;
    }
}
~~~

---

## Paso 3: probar `Player` de forma aislada

Antes de completar todo el juego, puedes probar temporalmente:

~~~java
Player player = new Player("Alex");
player.addScore(10);
player.loseLife();

System.out.println(player.getName());
System.out.println(player.getScore());
System.out.println(player.getLives());
~~~

Salida esperada:

```text
Alex
10
4
```

Luego vuelve a dejar `Main` iniciando `Game`.

---

## Paso 4: completar mensajes

`GameMessage` puede agrupar salidas:

~~~java
public class GameMessage {
    public static void printWelcome() {
        System.out.println("Aventura del Número Secreto");
        System.out.println("Proyecto final de consola en Java");
    }

    public static void printRules(String playerName) {
        System.out.println("Hola, " + playerName + ".");
        System.out.println("Adivina el número secreto antes de quedarte sin vidas.");
    }
}
~~~

Puedes agregar métodos como:

~~~java
printWin()
printHint()
printFinalSummary()
~~~

---

## Paso 5: leer datos con `InputHelper`

`InputHelper` debe evitar que `Game` se llene de detalles de entrada.

Ejemplo:

~~~java
public int readNumber(String message, int min, int max) {
    while (true) {
        System.out.print(message);
        String text = scanner.nextLine();

        try {
            int number = Integer.parseInt(text);

            if (number >= min && number <= max) {
                return number;
            }

            System.out.println("El número debe estar entre " + min + " y " + max + ".");
        } catch (NumberFormatException error) {
            System.out.println("Escribe solo números enteros. Ejemplo: 7");
        }
    }
}
~~~

### Qué introduce este método

- lectura como texto;
- conversión a entero;
- validación de rango;
- repetición hasta recibir un valor válido;
- manejo básico de error.

No hace falta explicar excepciones en profundidad. Basta con entender que el programa no se rompe si el usuario escribe texto.

---

## Paso 6: estructura de `Game`

`Game` coordina:

~~~java
public class Game {
    public void start() {
        GameMessage.printWelcome();
        // leer nombre
        // crear jugador
        // ejecutar rondas
        // mostrar resumen
    }
}
~~~

No debe hacer todo en una sola línea. Debe organizar la partida.

---

## Paso 7: usar arrays para niveles

Ejemplo:

~~~java
private final String[] levelNames = {
    "Bosque de Bits",
    "Cueva de Condiciones",
    "Castillo de Clases"
};

private final int[] maxNumbers = {10, 20, 30};
private final int[] maxAttempts = {4, 5, 6};
~~~

Cada posición se relaciona:

| Índice | Nivel | Máximo | Intentos |
|---:|---|---:|---:|
| 0 | Bosque de Bits | 10 | 4 |
| 1 | Cueva de Condiciones | 20 | 5 |
| 2 | Castillo de Clases | 30 | 6 |

---

## Paso 8: lógica de una ronda

Pseudocódigo:

```text
elegir número secreto
para cada intento permitido:
    leer intento
    si acierta:
        sumar puntos
        registrar ronda ganada
        terminar ronda
    si falla:
        perder vida
        mostrar pista
```

Este pseudocódigo debe convertirse en Java de forma gradual.

---

## Experimento controlado: intentar tocar `score`

Escribe temporalmente desde `Game`:

~~~java
player.score = 100;
~~~

Debe fallar si `score` es privado.

Mensaje probable:

```text
score has private access in Player
```

Corrección:

~~~java
player.addScore(100);
~~~

---

## Experimento controlado: índice incorrecto

Si tienes:

~~~java
String[] levelNames = {"A", "B", "C"};
~~~

Prueba:

~~~java
System.out.println(levelNames[3]);
~~~

Puede aparecer:

```text
ArrayIndexOutOfBoundsException
```

Corrección:

Usar índices `0`, `1` o `2`.

---

## Prueba manual del juego

Prueba al menos estos escenarios:

| Escenario | Qué escribir | Resultado esperado |
|---|---|---|
| Nombre válido | `Alex` | El juego saluda al jugador. |
| Número fuera de rango | `99` en nivel 1 | Mensaje de rango válido. |
| Texto en número | `hola` | Mensaje para escribir enteros. |
| Acierto | número secreto correcto | Suma puntos. |
| Error | número incorrecto | Pierde vida y muestra pista. |

---

## Criterios de finalización

- [ ] `Main` solo inicia `Game`.
- [ ] `Player` usa atributos privados.
- [ ] `Player` tiene getters.
- [ ] `Player` protege puntaje y vidas.
- [ ] `InputHelper` valida números.
- [ ] `GameMessage` agrupa mensajes.
- [ ] `Game` coordina la partida.
- [ ] El juego se ejecuta en Replit.
- [ ] El usuario puede jugar sin modificar código.
- [ ] El código completo puede compararse con `completed-examples`.

---

## Pregunta de cierre

Si otra persona abre tu Repl, ¿podría entender qué cambiaste y por qué? Ajusta nombres, mensajes o comentarios si la respuesta es no.

---

<div align="center">

**Siguiente:** [Quiz de comprensión](part-03-quiz/)

</div>





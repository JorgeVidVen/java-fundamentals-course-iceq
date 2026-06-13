---
layout: lesson
---

<p align="center">
  <img src="../../../assets/lesson-05-banner.png" alt="Clases y objetos" width="100%">
</p>

<div align="center">

# Lección 05: Clases y objetos

### Modelar una idea con datos y comportamiento

[![Nivel](https://img.shields.io/badge/Nivel-Intermedio_inicial-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-12_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Práctica-blue?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** Replit pendiente.  
> **Editor de respaldo:** JDoodle.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Laboratorio en Replit

La práctica convierte variables sueltas en un modelo simple. Es el puente entre programación básica y POO.

**Reto central:** Construir el primer modelo del jugador.

### Preparación

1. Abre el enlace de Replit de esta lección.
2. Verifica que el archivo principal sea `Main.java` o el archivo indicado en la práctica.
3. Presiona **Run** una vez antes de editar.
4. Lee la consola. Si aparece un error, úsalo como pista.

> **Respaldo:** si Replit no está disponible, usa JDoodle copiando los archivos Java de esta carpeta. La entrega oficial debe mantener Replit como enlace principal.

## Pruébalo aquí mismo 🚀

El editor de abajo ya tiene la clase `Player` y el `Main`. Crea un objeto `Player` y llama sus métodos.

<div data-pym-src="https://www.jdoodle.com/plugin" data-language="java" data-version-index="6">
class Player {
    private String name;
    private int score;

    Player(String name) {
        this.name = name;
        this.score = 0;
    }

    void addScore(int points) {
        score += points;
    }

    void showStatus() {
        System.out.println(name + " tiene " + score + " puntos");
    }
}

public class Main {
    public static void main(String[] args) {
        Player p = new Player("Mario");
        p.addScore(100);
        p.showStatus();
    }
}
</div>

> **Experimenta:** crea un segundo jugador con otro nombre y dale puntos.

## Trabajo paso a paso

1. Abre el Repl de la lección 05.
2. En `Player.java`, agrega atributos `name` y `score`.
3. Crea un constructor que reciba `name`.
4. Agrega un método para mostrar estado.
5. En `Main.java`, crea un objeto `Player` con `new`.

## Reto de extensión

Crea un segundo jugador con otro nombre. Ejecuta y explica por qué ambos objetos pueden venir de la misma clase.

## Errores frecuentes y solución

| Error literal | Qué significa | Cómo corregirlo |
|---|---|---|
| `error: non-static variable name cannot be referenced from a static context` | Intentaste usar un atributo del objeto sin crear el objeto. | Crea `Player player = new Player("Alex");`. |
| `error: constructor Player in class Player cannot be applied to given types` | La llamada no coincide con el constructor. | Envía los datos que el constructor pide. |
| `error: class Player is public, should be declared in a file named Player.java` | Una clase pública debe estar en un archivo con el mismo nombre. | Mantén `Player` en `Player.java`. |
| `NullPointerException` | Intentaste usar una referencia sin objeto. | Asegúrate de asignar con `new Player(...)`. |

## Evidencia de práctica

La práctica queda lista cuando puedes mostrar:

- Una captura o ejecución visible en Replit.
- El código starter modificado con intención clara.
- Una explicación breve del error más importante que corregiste.
- Una frase que conecte esta lección con el proyecto final.

## Revisión de archivos en Replit

Esta práctica usa más de un archivo. Antes de editar, confirma que ves:

```text
Main.java
Player.java
TreasureRoom.java
```

Si falta uno, el laboratorio no está completo.

### Responsabilidad de cada archivo

| Archivo | Qué debe contener |
|---|---|
| `Main.java` | Creación y uso de objetos. |
| `Player.java` | Datos y métodos del jugador. |
| `TreasureRoom.java` | Datos y descripción de una sala. |

No escribas todo en `Main.java`. Esta lección existe para practicar separación.

---

## Versión 1: completar `Player`

Abre `Player.java`.

Starter:

~~~java
public class Player {
    // Escribe tus atributos aquí
}
~~~

Agrega:

~~~java
String name;
int score;
~~~

Ahora la clase tiene estado.

~~~java
public class Player {
    String name;
    int score;
}
~~~

Ejecuta. Puede que todavía no veas salida, porque `Main` aún no crea objetos.

---

## Versión 2: agregar constructor

Agrega dentro de `Player`:

~~~java
public Player(String name) {
    this.name = name;
    this.score = 0;
}
~~~

Código:

~~~java
public class Player {
    String name;
    int score;

    public Player(String name) {
        this.name = name;
        this.score = 0;
    }
}
~~~

### Verificación mental

Cuando escribas:

~~~java
new Player("Alex")
~~~

el parámetro `name` valdrá `"Alex"` y el atributo `score` iniciará en `0`.

---

## Versión 3: agregar comportamiento

Agrega:

~~~java
public void showStatus() {
    System.out.println(name + " tiene " + score + " puntos.");
}
~~~

Clase completa hasta ahora:

~~~java
public class Player {
    String name;
    int score;

    public Player(String name) {
        this.name = name;
        this.score = 0;
    }

    public void showStatus() {
        System.out.println(name + " tiene " + score + " puntos.");
    }
}
~~~

---

## Versión 4: crear objeto en `Main`

Abre `Main.java`.

Escribe dentro de `main`:

~~~java
Player player = new Player("Alex");
player.showStatus();
~~~

Código completo:

~~~java
public class Main {
    public static void main(String[] args) {
        Player player = new Player("Alex");
        player.showStatus();
    }
}
~~~

Ejecuta.

Salida esperada:

```text
Alex tiene 0 puntos.
```

---

## Versión 5: sumar puntos

Agrega a `Player`:

~~~java
public void addPoints(int points) {
    score = score + points;
}
~~~

Ahora en `Main`:

~~~java
Player player = new Player("Alex");
player.showStatus();
player.addPoints(10);
player.showStatus();
~~~

Salida esperada:

```text
Alex tiene 0 puntos.
Alex tiene 10 puntos.
```

### Observación

El objeto recuerda su estado. Después de `addPoints(10)`, el puntaje cambia.

---

## Versión 6: crear dos jugadores

En `Main`:

~~~java
Player firstPlayer = new Player("Alex");
Player secondPlayer = new Player("Valeria");

firstPlayer.addPoints(10);
secondPlayer.addPoints(20);

firstPlayer.showStatus();
secondPlayer.showStatus();
~~~

Salida esperada:

```text
Alex tiene 10 puntos.
Valeria tiene 20 puntos.
```

### Pregunta

¿Por qué ambos pueden usar `showStatus()`?

Porque ambos son objetos creados desde la clase `Player`.

---

## Versión 7: usar `TreasureRoom`

Abre `TreasureRoom.java` y revisa:

~~~java
public class TreasureRoom {
    String roomName;
    int secretLimit;

    public TreasureRoom(String roomName, int secretLimit) {
        this.roomName = roomName;
        this.secretLimit = secretLimit;
    }

    public String getDescription() {
        return "Sala: " + roomName + " | Números posibles: 1 a " + secretLimit;
    }
}
~~~

En `Main`:

~~~java
TreasureRoom room = new TreasureRoom("Cueva de Variables", 10);
System.out.println(room.getDescription());
~~~

Salida:

```text
Sala: Cueva de Variables | Números posibles: 1 a 10
```

---

## Experimento controlado: olvidar `new`

Escribe temporalmente:

~~~java
Player player;
player.showStatus();
~~~

Puede aparecer un error porque `player` no fue inicializado.

Corrección:

~~~java
Player player = new Player("Alex");
player.showStatus();
~~~

---

## Experimento controlado: constructor sin argumento

Si tu constructor es:

~~~java
public Player(String name)
~~~

Prueba:

~~~java
Player player = new Player();
~~~

Mensaje probable:

```text
constructor Player in class Player cannot be applied to given types
```

Corrección:

~~~java
Player player = new Player("Alex");
~~~

---

## Experimento controlado: usar atributo desde clase

Prueba:

~~~java
Player.name = "Alex";
~~~

Esto no corresponde a esta clase, porque `name` pertenece al objeto.

Corrección:

~~~java
Player player = new Player("Alex");
~~~

---

## Código final sugerido

`Player.java`

~~~java
public class Player {
    String name;
    int score;

    public Player(String name) {
        this.name = name;
        this.score = 0;
    }

    public void addPoints(int points) {
        score = score + points;
    }

    public void showStatus() {
        System.out.println(name + " tiene " + score + " puntos.");
    }
}
~~~

`Main.java`

~~~java
public class Main {
    public static void main(String[] args) {
        Player firstPlayer = new Player("Alex");
        Player secondPlayer = new Player("Valeria");

        firstPlayer.addPoints(10);
        secondPlayer.addPoints(20);

        firstPlayer.showStatus();
        secondPlayer.showStatus();

        TreasureRoom room = new TreasureRoom("Cueva de Variables", 10);
        System.out.println(room.getDescription());
    }
}
~~~

---

## Troubleshooting adicional

| Error literal | Causa probable | Corrección |
|---|---|---|
| `cannot find symbol class Player` | Falta `Player.java` o el nombre está mal escrito. | Verifica archivo y clase. |
| `constructor Player cannot be applied` | Llamada no coincide con constructor. | Envía el nombre: `new Player("Alex")`. |
| `non-static variable name cannot be referenced from a static context` | Usaste atributo desde clase. | Crea un objeto. |
| `variable player might not have been initialized` | Declaraste referencia sin objeto. | Usa `new Player(...)`. |
| `cannot find symbol method showStatus()` | Método no existe o está mal escrito. | Revisa `Player.java`. |

---

## Criterios de entrega

- [ ] `Player.java` tiene atributos.
- [ ] `Player.java` tiene constructor.
- [ ] `Player.java` tiene al menos un método de comportamiento.
- [ ] `Main.java` crea un objeto `Player`.
- [ ] `Main.java` llama un método del objeto.
- [ ] Se crea al menos una `TreasureRoom`.
- [ ] El programa compila en Replit.
- [ ] Puedes explicar clase vs objeto.

---

## Pregunta de cierre

Si otra persona abre tu Repl, ¿podría entender qué cambiaste y por qué? Ajusta nombres, mensajes o comentarios si la respuesta es no.

---

<div align="center">

**Siguiente:** [Quiz de comprensión](part-03-quiz.md)

</div>





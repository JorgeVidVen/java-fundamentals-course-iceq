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
[![Módulo](https://img.shields.io/badge/Módulo-Quiz-purple?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** Replit pendiente.  
> **Editor de respaldo:** JDoodle.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Quiz de comprensión

Responde antes de abrir cada solución. Las preguntas están diseñadas para revisar razonamiento, no memoria de sintaxis.

<details>
<summary><strong>1. ¿Por qué una clase no es lo mismo que un objeto?</strong></summary>

La clase describe la estructura. El objeto es una instancia concreta con valores propios.

</details>

<details>
<summary><strong>2. ¿Qué problema resuelve un constructor?</strong></summary>

Evita crear objetos incompletos, porque obliga a entregar los datos mínimos al momento de instanciar.

</details>

<details>
<summary><strong>3. ¿Por qué el proyecto final necesita una clase Player?</strong></summary>

Porque el jugador tiene estado y reglas: nombre, puntaje, vidas y acciones. Eso es más claro en un objeto que en variables sueltas.

</details>

<details>
<summary><strong>4. ¿Qué evidencia demuestra que esta lección sí se entendió?</strong></summary>

El estudiante puede ejecutar el programa, explicar una línea clave, corregir un error real y conectar el concepto con el proyecto final.

</details>

<details>
<summary><strong>5. ¿Qué sería una mejora pequeña y razonable?</strong></summary>

Una mejora razonable cambia un dato, agrega una salida o refina una regla sin introducir temas que todavía no se han explicado.

</details>

## Autoevaluación

- [ ] Puedo explicar el concepto principal sin leer la definición.
- [ ] Puedo ubicar el error más común de la lección.
- [ ] Puedo ejecutar el laboratorio en Replit.
- [ ] Puedo decir cómo esta lección prepara el proyecto final.

## Clase u objeto

Marca mentalmente si cada frase habla de clase u objeto.

| Frase | Clase u objeto |
|---|---|
| Define que un jugador tiene nombre y puntaje. |  |
| Representa a Alex con 10 puntos. |  |
| Vive en `Player.java`. |  |
| Se crea con `new Player("Alex")`. |  |
| Puede tener valores distintos de otro jugador. |  |

<details>
<summary><strong>Respuesta</strong></summary>

| Frase | Clase u objeto |
|---|---|
| Define que un jugador tiene nombre y puntaje. | Clase |
| Representa a Alex con 10 puntos. | Objeto |
| Vive en `Player.java`. | Clase |
| Se crea con `new Player("Alex")`. | Objeto |
| Puede tener valores distintos de otro jugador. | Objeto |

</details>

---

## Diagnóstico de errores

### Caso A

~~~java
Player.name = "Alex";
~~~

<details>
<summary><strong>¿Por qué está mal?</strong></summary>

`name` pertenece a un objeto específico. Primero debes crear un objeto.

~~~java
Player player = new Player("Alex");
~~~

</details>

### Caso B

~~~java
Player player;
player.showStatus();
~~~

<details>
<summary><strong>¿Qué falta?</strong></summary>

Falta crear el objeto con `new`.

~~~java
Player player = new Player("Alex");
player.showStatus();
~~~

</details>

### Caso C

~~~java
Player player = new Player();
~~~

Constructor:

~~~java
public Player(String name) {
    this.name = name;
}
~~~

<details>
<summary><strong>¿Por qué falla?</strong></summary>

El constructor pide un `String`. La llamada no envió ningún argumento.

~~~java
Player player = new Player("Alex");
~~~

</details>

### Caso D

~~~java
public class Player {
    String name;

    public void Player(String name) {
        this.name = name;
    }
}
~~~

<details>
<summary><strong>¿Es constructor?</strong></summary>

No. Tiene `void`, por eso es un método, no un constructor. Un constructor no declara tipo de retorno.

Correcto:

~~~java
public Player(String name) {
    this.name = name;
}
~~~

</details>

---

## Completa la clase

~~~java
public class Player {
    String ______;
    int ______;

    public Player(String name) {
        this.name = ______;
        this.score = ______;
    }

    public void showStatus() {
        System.out.println(name + " tiene " + score + " puntos.");
    }
}
~~~

<details>
<summary><strong>Respuesta</strong></summary>

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

</details>

---

## Completa `Main`

~~~java
public class Main {
    public static void main(String[] args) {
        Player player = new ______("Alex");
        player.__________();
    }
}
~~~

<details>
<summary><strong>Respuesta</strong></summary>

~~~java
public class Main {
    public static void main(String[] args) {
        Player player = new Player("Alex");
        player.showStatus();
    }
}
~~~

</details>

---

## Preguntas de diseño

<details>
<summary><strong>1. ¿Por qué <code>Player</code> merece ser una clase?</strong></summary>

Porque agrupa datos y comportamiento relacionados: nombre, puntaje, sumar puntos y mostrar estado.

</details>

<details>
<summary><strong>2. ¿Por qué no basta con variables sueltas?</strong></summary>

Porque si hay más de un jugador, las variables sueltas se multiplican y el programa se vuelve difícil de mantener.

</details>

<details>
<summary><strong>3. ¿Qué responsabilidad debería tener <code>Main</code>?</strong></summary>

Crear objetos y coordinar la demostración. No debería contener toda la lógica interna de `Player`.

</details>

<details>
<summary><strong>4. ¿Qué aporta <code>TreasureRoom</code>?</strong></summary>

Muestra que una aplicación puede tener más de un modelo. No todo debe ser `Player`; también puede haber salas, niveles u otros elementos.

</details>

---

## Mapa de memoria

Observa:

~~~java
Player firstPlayer = new Player("Alex");
Player secondPlayer = new Player("Valeria");

firstPlayer.addPoints(10);
secondPlayer.addPoints(20);
~~~

Completa:

| Objeto | name | score |
|---|---|---:|
| `firstPlayer` |  |  |
| `secondPlayer` |  |  |

<details>
<summary><strong>Respuesta</strong></summary>

| Objeto | name | score |
|---|---|---:|
| `firstPlayer` | Alex | 10 |
| `secondPlayer` | Valeria | 20 |

Ambos objetos usan la misma clase, pero conservan estado distinto.

</details>

---

## Revisión para avanzar

Puedes continuar si respondes:

1. ¿Qué es una clase?
2. ¿Qué es un objeto?
3. ¿Qué es un atributo?
4. ¿Qué hace un constructor?
5. ¿Para qué sirve `this`?
6. ¿Qué hace `new`?
7. ¿Por qué un objeto puede tener valores distintos de otro?
8. ¿Qué se protegerá en la lección de encapsulación?

---

## Rúbrica corta

| Criterio | Logrado | En proceso | Repasar |
|---|---:|---:|---:|
| Diferencia clase y objeto. |  |  |  |
| Crea un objeto con `new`. |  |  |  |
| Usa constructor con argumento. |  |  |  |
| Llama métodos de objeto. |  |  |  |
| Explica `this`. |  |  |  |
| Trabaja con varios archivos Java. |  |  |  |
| Conecta POO con el proyecto final. |  |  |  |

---

<div align="center">

**Volver al [plan de curso](../../../course-plan.md)**

</div>





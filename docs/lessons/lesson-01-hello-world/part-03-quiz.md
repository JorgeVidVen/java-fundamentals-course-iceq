---
layout: lesson
title: "Leccion 01: Primer programa en Java - Quiz"
description: Review questions about main, println and basic Java errors.
---

<p align="center">
  <img src="../../../assets/lesson-01-banner.png" alt="Primer programa en Java" width="100%">
</p>

<div align="center">

# Lección 01: Quiz y revisión

### Comprobar que entiendes tu primer programa Java

[![Nivel](https://img.shields.io/badge/Nivel-Principiante-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-10_a_15_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Quiz-purple?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Indicaciones:** responde antes de abrir cada solución. El objetivo no es memorizar frases, sino comprobar si puedes explicar el programa con tus propias palabras.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

---

## Cómo usar este quiz

Este quiz no funciona como un examen escolar tradicional. Está diseñado como una revisión guiada después del laboratorio.

Úsalo así:

1. Lee la pregunta.
2. Escribe o piensa una respuesta corta.
3. Abre el bloque `<details>`.
4. Compara tu respuesta con la explicación.
5. Si fallaste, vuelve al archivo `part-01-theory.md` o `part-02-practice.md`.

No avances si todavía no puedes ejecutar el programa en Replit. La comprensión debe estar conectada con una experiencia real de ejecución.

---

## Revisión rápida de conceptos

Antes de las preguntas largas, marca tu nivel de seguridad.

| Concepto | Puedo explicarlo | Necesito repasar |
|---|---:|---:|
| Replit como editor online |  |  |
| Archivo `Main.java` |  |  |
| Clase `Main` |  |  |
| Método `main` |  |  |
| Consola |  |  |
| `System.out.println` |  |  |
| Punto y coma |  |  |
| Comillas dobles |  |  |
| Error de compilación |  |  |
| Botón **Run** |  |  |

---

## Preguntas principales

<details>
<summary><strong>1. ¿Cuál es el objetivo real de la Lección 01?</strong></summary>

El objetivo no es aprender todo Java. El objetivo es ejecutar una aplicación mínima, ubicar la estructura básica y modificar una salida de consola sin romper el programa.

Una respuesta completa debería mencionar:

- Replit;
- `Main.java`;
- método `main`;
- `System.out.println`;
- consola;
- ejecución con **Run**.

</details>

<details>
<summary><strong>2. ¿Por qué el curso usa Replit como herramienta principal?</strong></summary>

Porque el enunciado exige herramientas online y gratuitas. Replit permite escribir y ejecutar Java desde el navegador, sin pedir instalación local de Java, JDK o IDE.

JDoodle y OnlineGDB pueden ser respaldo, pero el flujo oficial del curso debe ser Replit para mantener consistencia.

</details>

<details>
<summary><strong>3. ¿Qué representa el archivo <code>Main.java</code>?</strong></summary>

Representa el archivo principal de esta primera práctica. En Java, si una clase pública se llama `Main`, el archivo debe llamarse `Main.java`.

Ese vínculo ayuda a Java a organizar el código antes de ejecutarlo.

</details>

<details>
<summary><strong>4. ¿Qué parte del programa se ejecuta primero?</strong></summary>

El método:

```java
public static void main(String[] args)
```

En esta etapa no necesitas explicar cada palabra. Sí necesitas reconocer que ese método es la entrada del programa.

</details>

<details>
<summary><strong>5. ¿Qué hace <code>System.out.println</code>?</strong></summary>

Imprime una línea de texto en la consola.

Ejemplo:

```java
System.out.println("Hola");
```

Salida:

```text
Hola
```

</details>

<details>
<summary><strong>6. ¿Qué puedes modificar con seguridad en esta lección?</strong></summary>

Puedes modificar el texto dentro de las comillas:

```java
System.out.println("Este texto sí puedo cambiar");
```

Todavía no conviene cambiar la firma del método `main`, el nombre de la clase o la instrucción `System.out.println`.

</details>

<details>
<summary><strong>7. ¿Por qué Java necesita punto y coma?</strong></summary>

El punto y coma marca el final de una instrucción. Ayuda a Java a saber dónde termina una orden.

Sin punto y coma, puede aparecer:

```text
error: ';' expected
```

</details>

<details>
<summary><strong>8. ¿Por qué el texto va entre comillas dobles?</strong></summary>

Porque Java necesita distinguir entre una palabra del lenguaje y un texto que debe mostrarse en consola.

Esto es texto:

```java
"Hola"
```

Esto no es texto válido por sí mismo:

```java
Hola
```

</details>

<details>
<summary><strong>9. ¿Qué diferencia hay entre editor y consola?</strong></summary>

El editor es donde escribes el código. La consola es donde aparece el resultado del programa.

En Replit, normalmente ves ambos espacios en pantalla, pero cumplen responsabilidades diferentes.

</details>

<details>
<summary><strong>10. ¿Qué significa que Java distinga mayúsculas y minúsculas?</strong></summary>

Significa que `System`, `system`, `SYSTEM` y `SyStem` no son lo mismo.

La instrucción correcta es:

```java
System.out.println("texto");
```

</details>

---

## Diagnóstico de errores

Lee cada caso y decide qué error hay antes de abrir la respuesta.

### Caso A

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Java")
    }
}
```

<details>
<summary><strong>Respuesta del caso A</strong></summary>

Falta el punto y coma al final de la instrucción:

```java
System.out.println("Hola Java");
```

Mensaje probable:

```text
error: ';' expected
```

</details>

### Caso B

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Java);
    }
}
```

<details>
<summary><strong>Respuesta del caso B</strong></summary>

Falta cerrar las comillas del texto.

Versión correcta:

```java
System.out.println("Hola Java");
```

Mensaje probable:

```text
error: unclosed string literal
```

</details>

### Caso C

```java
public class Main {
    public static void main(String[] args) {
        system.out.println("Hola Java");
    }
}
```

<details>
<summary><strong>Respuesta del caso C</strong></summary>

`System` debe empezar con mayúscula.

Versión correcta:

```java
System.out.println("Hola Java");
```

Java diferencia mayúsculas y minúsculas.

</details>

### Caso D

```java
public class Main {
    System.out.println("Hola Java");
}
```

<details>
<summary><strong>Respuesta del caso D</strong></summary>

La instrucción está dentro de la clase, pero fuera del método `main`.

Versión correcta:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Java");
    }
}
```

</details>

### Caso E

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Java");
}
```

<details>
<summary><strong>Respuesta del caso E</strong></summary>

Falta una llave de cierre. Se abrió la clase y se abrió el método, pero solo se cerró uno de los dos bloques.

Una versión correcta:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Java");
    }
}
```

</details>

---

## Ordena el programa

Las siguientes líneas están desordenadas:

```text
}
System.out.println("Hola");
public class Main {
public static void main(String[] args) {
}
```

Intenta ordenarlas antes de abrir la respuesta.

<details>
<summary><strong>Respuesta ordenada</strong></summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola");
    }
}
```

Primero va la clase, dentro va el método, dentro va la instrucción.

</details>

---

## Completa los espacios

Completa mentalmente el programa:

```java
public class ______ {
    public static void ______(String[] args) {
        System.out.println("Aprendo Java en ______");
    }
}
```

<details>
<summary><strong>Respuesta esperada</strong></summary>

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Aprendo Java en Replit");
    }
}
```

La clase principal es `Main`, el método de entrada es `main` y el editor principal del curso es Replit.

</details>

---

## Explica con tus palabras

Responde en una o dos frases.

### Pregunta 1

¿Qué ocurre cuando presionas **Run**?

<details>
<summary><strong>Respuesta orientativa</strong></summary>

Replit intenta compilar y ejecutar el programa. Java busca el método `main` y ejecuta las instrucciones dentro de ese método.

</details>

### Pregunta 2

¿Qué ocurre si el código tiene un error de sintaxis?

<details>
<summary><strong>Respuesta orientativa</strong></summary>

Java no puede ejecutar el programa y muestra un mensaje de error. Ese mensaje ayuda a encontrar qué regla falta cumplir.

</details>

### Pregunta 3

¿Por qué no debes borrar todo cuando aparece un error?

<details>
<summary><strong>Respuesta orientativa</strong></summary>

Porque muchas veces el error es pequeño: un punto y coma, una comilla o una mayúscula. Es mejor revisar el último cambio.

</details>

---

## Preguntas de transferencia

Estas preguntas conectan la lección con situaciones nuevas.

<details>
<summary><strong>1. Si quieres imprimir tres mensajes, ¿necesitas tres clases?</strong></summary>

No. Puedes usar tres instrucciones `System.out.println` dentro del mismo método `main`.

```java
System.out.println("Mensaje 1");
System.out.println("Mensaje 2");
System.out.println("Mensaje 3");
```

</details>

<details>
<summary><strong>2. Si quieres cambiar el saludo, ¿debes cambiar el método main?</strong></summary>

No. Solo debes cambiar el texto dentro de las comillas.

</details>

<details>
<summary><strong>3. Si Replit no muestra la salida esperada, ¿qué revisas primero?</strong></summary>

Primero revisas si presionaste **Run**, si el archivo correcto está abierto y si la consola muestra un error.

</details>

<details>
<summary><strong>4. Si más adelante haremos programas más completos, ¿por qué empezamos imprimiendo texto?</strong></summary>

Porque cualquier aplicación de consola necesita mostrar instrucciones, resultados y errores. La salida de texto es la primera forma de comunicación con el usuario.

</details>

---

## Autoevaluación por niveles

### Nivel inicial

Marca si puedes:

- [ ] abrir Replit;
- [ ] ubicar `Main.java`;
- [ ] presionar **Run**;
- [ ] ver la salida en consola.

### Nivel básico

Marca si puedes:

- [ ] cambiar texto dentro de comillas;
- [ ] agregar otra línea `System.out.println`;
- [ ] corregir un punto y coma faltante;
- [ ] corregir comillas sin cerrar.

### Nivel sólido

Marca si puedes:

- [ ] explicar qué hace el método `main`;
- [ ] explicar por qué el código debe estar dentro de una clase;
- [ ] leer un error literal sin borrar todo;
- [ ] explicar por qué la consola es útil antes de aprender temas más avanzados.

---

## Rubrica corta de la lección

| Criterio | Logrado | En proceso | Necesita repaso |
|---|---:|---:|---:|
| Ejecuta el programa en Replit. |  |  |  |
| Modifica texto sin romper estructura. |  |  |  |
| Agrega varias salidas en consola. |  |  |  |
| Corrige un error provocado. |  |  |  |
| Explica `System.out.println`. |  |  |  |
| Reconoce `main` como punto de entrada. |  |  |  |
| Mantiene el archivo `Main.java`. |  |  |  |

---

## Preguntas para discusión

Estas preguntas pueden usarse para conversar, repasar o preparar una explicación oral:

1. ¿Por qué una computadora no entiende instrucciones ambiguas?
2. ¿Qué parte del código parece más extraña al inicio?
3. ¿Qué error fue más fácil de corregir?
4. ¿Qué parte del programa se parece a una estructura de inicio?
5. ¿Qué frase imprimirías para saludar a un usuario?
6. ¿Qué información mostraría un programa antes de pedir datos?
7. ¿Por qué el curso evita instalaciones locales?
8. ¿Qué ventaja tiene poder ejecutar en el navegador?

---

## Revisión de vocabulario técnico

Relaciona cada palabra con su explicación.

| Palabra | Explicación |
|---|---|
| Clase | Contenedor principal de código Java. |
| Método | Bloque con instrucciones. |
| Consola | Espacio donde aparece la salida. |
| String | Texto entre comillas. |
| Compilar | Revisar y traducir código. |
| Ejecutar | Hacer correr el programa. |
| Error | Mensaje que indica una regla incumplida. |
| Replit | Editor online principal del curso. |

### Pregunta

¿Cuál de esas palabras se relaciona directamente con `System.out.println`?

<details>
<summary><strong>Respuesta</strong></summary>

Se relaciona con consola, String, ejecutar y método. La instrucción vive dentro del método, imprime un String y muestra el resultado en consola al ejecutar.

</details>

---

## Mini caso: explicación a un compañero

Imagina que un compañero dice:

> "Solo copié el código, pero no sé qué hace."

Redacta una explicación de cuatro frases:

```text
1. El archivo Main.java contiene el programa.
2. La clase Main organiza el código.
3. El método main es donde Java empieza.
4. System.out.println muestra texto en la consola.
```

<details>
<summary><strong>Versión mejorada</strong></summary>

`Main.java` es el archivo principal del proyecto. Dentro está `public class Main`, que funciona como contenedor. Java empieza a ejecutar dentro del método `main`. La línea `System.out.println` muestra el mensaje que escribimos entre comillas.

</details>

---

## Mini caso: revisión de entrega

Un estudiante entrega este código:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola");
        System.out.println("Soy Luis");
        System.out.println("Aprendo Java");
    }
}
```

### Pregunta

¿Cumple el objetivo de la lección?

<details>
<summary><strong>Respuesta</strong></summary>

Sí, cumple el objetivo básico. El programa conserva la estructura, ejecuta desde `main` e imprime varias líneas en consola.

Podría mejorar agregando un mensaje más claro, una segunda línea o una indicación para quien ejecuta el programa.

</details>

---

## Mini caso: entrega con error

Un estudiante entrega este código:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola")
        System.out.println("Soy Luis");
    }
}
```

### Pregunta

¿Qué comentario técnico le darías?

<details>
<summary><strong>Respuesta</strong></summary>

El programa está casi correcto, pero falta un punto y coma después de la primera instrucción.

Comentario sugerido:

> Revisa el final de la línea que imprime `"Hola"`. En Java cada instrucción debe cerrar con `;`.

</details>

---

## Preguntas de metacognición

Estas preguntas revisan cómo estás aprendiendo.

1. ¿Qué hiciste cuando apareció el primer error?
2. ¿Leíste el mensaje o solo miraste que estaba en rojo?
3. ¿Qué cambio pequeño produjo una salida visible?
4. ¿Qué parte del código ya reconoces sin ayuda?
5. ¿Qué parte prefieres repasar antes de la lección 02?

---

## Registro personal

Completa:

```text
Hoy aprendí que Java necesita:

Lo más fácil fue:

Lo más difícil fue:

El error que corregí fue:

En la siguiente lección quiero entender:
```

Este registro puede servir para el reporte de participación del equipo si se usa como evidencia de aprendizaje.

---

## Cierre del quiz

Si puedes responder estas tres preguntas sin abrir la teoría, estás listo para avanzar:

1. ¿Dónde empieza un programa Java?
2. ¿Qué instrucción imprime texto?
3. ¿Qué haces cuando Replit muestra un error?

Respuestas esperadas:

```text
1. En el método main.
2. System.out.println.
3. Leo el error, ubico la línea y corrijo el cambio más pequeño.
```

---

## Puente hacia la Lección 02

En esta lección, el texto estuvo fijo:

```java
System.out.println("Nombre: Valeria");
```

En la siguiente, el texto podrá usar datos guardados:

```java
String name = "Valeria";
System.out.println("Nombre: " + name);
```

La diferencia es que el programa empieza a recordar información. Esa es la función de las variables.

---

---

<div align="center">

**Volver al [plan de curso](/course-plan/)**

</div>







---
layout: lesson
---

<p align="center">
  <img src="../../../assets/lesson-04-banner.png" alt="Métodos y entrada por consola" width="100%">
</p>

<div align="center">

# Lección 04: Métodos y entrada por consola

### Reutilizar acciones y escuchar al usuario

[![Nivel](https://img.shields.io/badge/Nivel-Básico-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-10_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Práctica-blue?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** Replit pendiente.  
> **Editor de respaldo:** OnlineGDB.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Laboratorio en Replit

La calculadora es pequeña, pero enseña dos ideas centrales para cualquier programa de consola: leer datos y separar acciones repetibles.

**Reto central:** Crear una calculadora mínima en Replit.

### Preparación

1. Abre el enlace de Replit de esta lección.
2. Verifica que el archivo principal sea `Main.java` o el archivo indicado en la práctica.
3. Presiona **Run** una vez antes de editar.
4. Lee la consola. Si aparece un error, úsalo como pista.

> **Respaldo:** si Replit no está disponible, usa OnlineGDB copiando los archivos Java de esta carpeta. La entrega oficial debe mantener Replit como enlace principal.

## Pruébalo aquí mismo 🚀

El editor de abajo ya tiene la estructura de la calculadora. Completa el método `add` y presiona **Run**.

<div data-pym-src="https://www.jdoodle.com/plugin" data-language="java" data-version-index="4">
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Ingresa el primer número: ");
        int a = sc.nextInt();
        System.out.print("Ingresa el segundo número: ");
        int b = sc.nextInt();
        int result = add(a, b);
        System.out.println("La suma es: " + result);
        sc.close();
    }

    static int add(int a, int b) {
        return a + b;
    }
}
</div>

> **Experimenta:** agrega un método `multiply` y úsalo.

## Trabajo paso a paso

1. Abre el Repl de la lección 04.
2. Crea `printStartMessage`.
3. Lee un número entero con `scanner.nextInt()`.
4. Crea un método `add(int a, int b)`.
5. Imprime el resultado usando una frase clara.

## Reto de extensión

Agrega un método `multiply(int a, int b)` y muestra suma y multiplicación sin duplicar lectura de datos.

## Errores frecuentes y solución

| Error literal | Qué significa | Cómo corregirlo |
|---|---|---|
| `error: method add in class Main cannot be applied to given types` | La llamada no coincide con los parámetros. | Usa `add(first, second)`. |
| `error: cannot find symbol class Scanner` | Falta importar Scanner. | Agrega `import java.util.Scanner;` arriba de la clase. |
| `java.util.InputMismatchException` | El usuario escribió texto cuando se esperaba número. | En la práctica, escribe números enteros como `7`. |
| `error: missing return statement` | Un método promete devolver algo y no devuelve nada. | Agrega `return` con un valor del tipo correcto. |

## Evidencia de práctica

La práctica queda lista cuando puedes mostrar:

- Una captura o ejecución visible en Replit.
- El código starter modificado con intención clara.
- Una explicación breve del error más importante que corregiste.
- Una frase que explique cómo los métodos ordenan un programa.

## Construcción por versiones

No intentes escribir la calculadora completa en un solo intento. Trabaja por versiones.

### Versión 1: solo encabezado

Objetivo: crear y llamar un método `printStartMessage`.

~~~java
public class Main {
    public static void main(String[] args) {
        printStartMessage();
    }

    public static void printStartMessage() {
        System.out.println("CALCULADORA DE PRÁCTICA");
        System.out.println("Suma dos números enteros.");
    }
}
~~~

Ejecuta.

Salida esperada:

```text
CALCULADORA DE PRÁCTICA
Suma dos números enteros.
```

Si esto funciona, ya comprobaste que puedes crear un método `void`.

### Versión 2: importar Scanner

Agrega arriba del archivo:

~~~java
import java.util.Scanner;
~~~

El archivo debe empezar así:

~~~java
import java.util.Scanner;

public class Main {
    // resto del código
}
~~~

No pongas el `import` dentro de la clase.

### Versión 3: crear Scanner

Dentro de `main`:

~~~java
Scanner scanner = new Scanner(System.in);
~~~

Código parcial:

~~~java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    printStartMessage();
}
~~~

Ejecuta. Todavía no pedirá números, pero debe compilar.

### Versión 4: leer primer número

~~~java
System.out.print("Primer número: ");
int first = scanner.nextInt();
~~~

Ejecuta y escribe un número entero en la consola.

### Versión 5: leer segundo número

~~~java
System.out.print("Segundo número: ");
int second = scanner.nextInt();
~~~

Ahora el programa debe pedir dos valores.

### Versión 6: crear método `add`

Fuera de `main`, pero dentro de la clase:

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

### Versión 7: llamar el método

Dentro de `main`:

~~~java
int result = add(first, second);
System.out.println("Resultado: " + result);
~~~

---

## Código esperado al final de la primera ronda

~~~java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        printStartMessage();

        System.out.print("Primer número: ");
        int first = scanner.nextInt();

        System.out.print("Segundo número: ");
        int second = scanner.nextInt();

        int result = add(first, second);
        System.out.println("Resultado: " + result);
    }

    public static void printStartMessage() {
        System.out.println("CALCULADORA DE PRÁCTICA");
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

---

## Pruebas manuales

Ejecuta varias veces.

| Primer número | Segundo número | Resultado esperado |
|---:|---:|---:|
| 2 | 3 | 5 |
| 10 | 5 | 15 |
| 0 | 8 | 8 |
| -2 | 7 | 5 |
| 100 | 250 | 350 |

Si el resultado no coincide, revisa:

- si leíste ambos números;
- si llamaste `add(first, second)`;
- si el método devuelve `a + b`;
- si imprimiste `result` y no otra variable.

---

## Experimento controlado: llamar mal el método

Cambia temporalmente:

~~~java
int result = add(first, second);
~~~

por:

~~~java
int result = add();
~~~

Ejecuta.

Mensaje esperado o parecido:

```text
error: method add in class Main cannot be applied to given types
```

### Interpretación

El método `add` pide dos enteros. La llamada no envió ninguno.

### Corrección

~~~java
int result = add(first, second);
~~~

---

## Experimento controlado: olvidar `return`

Cambia temporalmente:

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

por:

~~~java
public static int add(int a, int b) {
    int result = a + b;
}
~~~

Ejecuta.

Mensaje probable:

```text
error: missing return statement
```

### Interpretación

El método prometió devolver un `int`, pero no entregó nada.

### Corrección

~~~java
public static int add(int a, int b) {
    int result = a + b;
    return result;
}
~~~

---

## Experimento controlado: escribir texto en vez de número

Ejecuta el programa. Cuando pregunte:

```text
Primer número:
```

escribe:

```text
hola
```

Puede aparecer:

```text
java.util.InputMismatchException
```

### Interpretación

`nextInt()` esperaba un entero. El usuario escribió texto.

### Qué hacer en esta lección

Por ahora, escribe números enteros.

### Qué haremos más adelante

En una versión más cuidada, se puede leer texto y convertirlo con validación. Más adelante esa responsabilidad puede separarse en una clase propia.

---

## Reto de extensión: multiplicación

Agrega un método:

~~~java
public static int multiply(int a, int b) {
    return a * b;
}
~~~

Luego en `main`:

~~~java
int sum = add(first, second);
int product = multiply(first, second);

System.out.println("Suma: " + sum);
System.out.println("Multiplicación: " + product);
~~~

### Resultado esperado

Si escribes `4` y `5`:

```text
Suma: 9
Multipación: 20
```

Revisa bien la palabra visible. Si escribiste "Multipación", corrige a:

```text
Multiplicación
```

El texto de salida también comunica calidad.

---

## Reto de extensión: método para mostrar resultados

Puedes separar la salida:

~~~java
public static void printResults(int sum, int product) {
    System.out.println("Suma: " + sum);
    System.out.println("Multiplicación: " + product);
}
~~~

Y llamar:

~~~java
printResults(sum, product);
~~~

### Pregunta

¿Por qué `printResults` es `void`?

Porque muestra datos en consola, pero no necesita devolver un valor.

---

## Reto de extensión: nombre del usuario

Para leer texto y números juntos, hay que tener cuidado con `Scanner`. En esta lección puedes mantenerlo simple:

~~~java
System.out.print("Nombre: ");
String name = scanner.next();
~~~

`next()` lee una palabra. Si quieres leer nombres con espacios, eso requiere otra explicación.

Ejemplo:

~~~java
System.out.println("Hola, " + name + ". Este es tu resultado:");
~~~

---

## Checklist técnico

- [ ] Importé `Scanner`.
- [ ] Creé `Scanner scanner = new Scanner(System.in);`.
- [ ] Leí el primer número.
- [ ] Leí el segundo número.
- [ ] Creé `add(int a, int b)`.
- [ ] Llamé `add(first, second)`.
- [ ] Usé `return`.
- [ ] Mostré el resultado.
- [ ] Probé al menos tres pares de números.
- [ ] Corregí un error provocado.

---

## Relación con programas más completos

En un programa más completo, el usuario escribirá datos:

~~~java
System.out.print("Escribe un número: ");
int guess = scanner.nextInt();
~~~

También aparecerán métodos:

~~~java
printWelcome();
calculatePoints();
printFinalSummary();
~~~

Esta práctica es el puente entre programas que solo muestran información y programas que reciben datos del usuario.

---

## Pregunta de cierre

Si otra persona abre tu Repl, ¿podría entender qué cambiaste y por qué? Ajusta nombres, mensajes o comentarios si la respuesta es no.

---

<div align="center">

**Siguiente:** [Quiz de comprensión](part-03-quiz.md)

</div>








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
[![Módulo](https://img.shields.io/badge/Módulo-Teoría-orange?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** Replit pendiente.  
> **Editor de respaldo:** OnlineGDB.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Punto de partida

Hasta ahora el programa decide con datos escritos en el código. Esta lección abre la puerta a la interacción: el usuario escribe un dato y el programa lo procesa.

> **Analogía de la lección:** Un método se parece a una receta con nombre. Puedes llamarla varias veces sin volver a escribir todos los pasos.

Antes de abrir Replit, mira el objetivo técnico de esta sesión: al terminar deberías poder **crear métodos simples y leer datos con Scanner**. No memorices cada palabra del código; identifica qué responsabilidad cumple cada bloque.

## Conceptos de la sesión

### Método
Un método agrupa instrucciones bajo un nombre. Si el nombre está bien elegido, el programa se lee casi como una lista de acciones.

### Parámetro
Un parámetro es un dato que el método necesita para trabajar. Permite reutilizar la misma acción con valores distintos.

### `return`
`return` devuelve un resultado. Si un método promete entregar un `int`, debe devolver un número entero.

### `Scanner`
`Scanner` permite leer texto o números desde la consola. Para usarlo se importa desde la biblioteca estándar de Java con `import java.util.Scanner;`.

## Lectura guiada de código

Lee primero los nombres de métodos: printStartMessage prepara la pantalla, add calcula, main coordina. Esa separación reduce ruido.

El siguiente ejemplo está mal a propósito. En un curso para principiantes, ver el error primero ayuda a entender la regla.

~~~java
public class Main {
    public static void main(String[] args) {
        int result = add();
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

**Qué ocurre:** El método add pide dos parámetros, pero se llama sin enviar ninguno. La firma del método y la llamada deben coincidir.

Ahora observa una versión correcta y mínima:

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

        System.out.println("Resultado: " + add(first, second));
    }

    public static void printStartMessage() {
        System.out.println("Calculadora de práctica");
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

### Señales que debes reconocer

- La estructura principal se mantiene estable.
- Los nombres comunican intención.
- El código se puede ejecutar en Replit sin instalación local.
- El ejemplo prepara una habilidad reutilizable: dividir un programa en acciones con nombre.

## Por qué aparecen los métodos

Hasta ahora, el programa podía crecer copiando líneas dentro de `main`. Esa técnica funciona por poco tiempo. El problema aparece cuando una misma acción se repite o cuando una tarea se vuelve demasiado larga.

Observa este programa sin métodos auxiliares:

~~~java
public class Main {
    public static void main(String[] args) {
        System.out.println("CALCULADORA DE PRÁCTICA");
        System.out.println("La aplicación suma dos números.");
        System.out.println("Ingresa los datos cuando la consola los solicite.");
    }
}
~~~

No está mal, pero todo vive en `main`. Si mañana quieres usar el mismo encabezado en otro lugar, tendrías que copiar las mismas líneas.

Con un método, le das nombre a esa acción:

~~~java
public static void printHeader() {
    System.out.println("CALCULADORA DE PRÁCTICA");
    System.out.println("La aplicación suma dos números.");
}
~~~

Luego `main` puede leer mejor:

~~~java
public static void main(String[] args) {
    printHeader();
}
~~~

La idea central:

```text
main coordina
métodos auxiliares hacen tareas específicas
```

---

## Método como acción con nombre

Un método debe responder a una pregunta:

> ¿Qué acción realiza este bloque?

Si el método imprime un encabezado, un buen nombre sería:

~~~java
printHeader()
~~~

Si el método suma dos números:

~~~java
add()
~~~

Si el método lee un número:

~~~java
readGuess()
~~~

### Nombres pobres

~~~java
doStuff()
thing()
method1()
x()
~~~

Esos nombres no explican nada.

### Nombres más claros

~~~java
printWelcomeMessage()
readPlayerAttempt()
calculateTotalScore()
showFinalSummary()
~~~

Un curso introductorio debe enseñar desde temprano que nombrar bien no es decoración. Nombrar bien reduce la carga mental.

---

## Anatomía de un método

Ejemplo:

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

Partes:

| Parte | Significado inicial | Ejemplo |
|---|---|---|
| `public` | Puede ser llamado desde el contexto actual. | `public` |
| `static` | Se puede llamar desde `main` sin crear objeto. | `static` |
| `int` | Tipo de dato que devuelve. | `int` |
| `add` | Nombre del método. | `add` |
| `(int a, int b)` | Datos que recibe. | dos enteros |
| `{ ... }` | Bloque de instrucciones. | cuerpo |
| `return` | Valor que entrega. | `return a + b;` |

No es necesario dominar cada palabra de inmediato. Sí es necesario reconocer que un método puede:

- tener nombre;
- recibir datos;
- ejecutar instrucciones;
- devolver un resultado.

---

## Parámetros y argumentos

Los parámetros son espacios que el método espera recibir.

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

Aquí `a` y `b` son parámetros.

Los argumentos son los valores reales enviados al llamar el método.

~~~java
int result = add(8, 5);
~~~

Aquí `8` y `5` son argumentos.

### Mapa visual

```text
llamada: add(8, 5)
             |  |
             v  v
método: add(int a, int b)
             |      |
             v      v
          a = 8   b = 5
```

### Error común

~~~java
int result = add();
~~~

Java responderá algo parecido a:

```text
error: method add in class Main cannot be applied to given types
```

Traducción:

> El método pide datos, pero la llamada no envió los datos necesarios.

Corrección:

~~~java
int result = add(8, 5);
~~~

---

## Métodos `void`

No todos los métodos devuelven un valor. Algunos solo realizan una acción.

Ejemplo:

~~~java
public static void printStartMessage() {
    System.out.println("Calculadora de práctica");
}
~~~

`void` significa que el método no devuelve un valor.

Puedes llamarlo así:

~~~java
printStartMessage();
~~~

No puedes usarlo como si entregara un resultado:

~~~java
int result = printStartMessage();
~~~

Eso no tiene sentido porque el método imprime, pero no devuelve un número.

### Cuándo usar `void`

Usa `void` cuando el objetivo sea:

- imprimir un mensaje;
- mostrar un menú;
- pedir una pausa visual;
- ejecutar una acción sin entregar dato.

### Cuándo devolver un valor

Devuelve un valor cuando el método calcula o produce algo que se usará después:

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

---

## `return`

`return` entrega un valor y termina la ejecución del método.

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

Si el método promete devolver `int`, debe devolver un entero.

### Error: falta `return`

~~~java
public static int add(int a, int b) {
    int result = a + b;
}
~~~

Mensaje probable:

```text
error: missing return statement
```

Corrección:

~~~java
public static int add(int a, int b) {
    int result = a + b;
    return result;
}
~~~

O más directo:

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

---

## Entrada por consola con `Scanner`

Hasta esta lección, los datos estaban escritos en el código:

~~~java
int first = 8;
int second = 5;
~~~

Con `Scanner`, el usuario puede escribirlos en la consola.

~~~java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Primer número: ");
        int first = scanner.nextInt();

        System.out.print("Segundo número: ");
        int second = scanner.nextInt();

        System.out.println("Resultado: " + add(first, second));
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

### ¿Por qué aparece `import`?

`Scanner` pertenece a una biblioteca estándar de Java. Para usarlo, se escribe:

~~~java
import java.util.Scanner;
~~~

Esto va antes de la clase.

### ¿Qué hace `new Scanner(System.in)`?

Crea un lector conectado a la entrada estándar, es decir, a lo que el usuario escribe en consola.

### ¿Qué hace `nextInt()`?

Lee un número entero.

~~~java
int first = scanner.nextInt();
~~~

Si el usuario escribe `8`, la variable `first` guarda `8`.

---

## `print` vs `println`

En esta lección aparecen dos instrucciones parecidas:

~~~java
System.out.print("Primer número: ");
System.out.println("Resultado: " + result);
~~~

`print` no salta a la siguiente línea.

`println` imprime y luego salta a la siguiente línea.

### Ejemplo con `print`

~~~java
System.out.print("Nombre: ");
System.out.print("Valeria");
~~~

Salida:

```text
Nombre: Valeria
```

### Ejemplo con `println`

~~~java
System.out.println("Nombre: ");
System.out.println("Valeria");
~~~

Salida:

```text
Nombre:
Valeria
```

En entradas de usuario, `print` suele sentirse mejor:

~~~java
System.out.print("Escribe tu edad: ");
~~~

El cursor queda al lado de la pregunta.

---

## Flujo completo de la calculadora

```text
mostrar encabezado
      |
      v
pedir primer número
      |
      v
pedir segundo número
      |
      v
llamar add(first, second)
      |
      v
mostrar resultado
```

En Java:

~~~java
printStartMessage();
int first = scanner.nextInt();
int second = scanner.nextInt();
int result = add(first, second);
System.out.println("Resultado: " + result);
~~~

Esta secuencia muestra una idea importante: `main` no tiene que hacerlo todo directamente. Puede coordinar métodos.

---

## Diseño mínimo de responsabilidades

| Responsabilidad | Dónde debería vivir | Por qué |
|---|---|---|
| Mostrar título | `printStartMessage` | Es una acción visual separada. |
| Leer datos | `main` por ahora | Todavía no creamos clases auxiliares. |
| Sumar | `add` | Es una operación reutilizable. |
| Mostrar resultado | `main` | Coordina el flujo visible. |

Más adelante, algunas responsabilidades podrán pasar a clases separadas. Por ahora basta con reconocer que un método debe tener una tarea clara.

---

## Errores frecuentes con métodos

### Llamar sin parámetros

~~~java
int result = add();
~~~

Si el método está definido como:

~~~java
public static int add(int a, int b)
~~~

La llamada debe enviar dos enteros:

~~~java
int result = add(first, second);
~~~

### Devolver tipo incorrecto

~~~java
public static int getMessage() {
    return "Hola";
}
~~~

El método promete `int`, pero devuelve `String`.

Corrección:

~~~java
public static String getMessage() {
    return "Hola";
}
~~~

### Método dentro de otro método

Incorrecto:

~~~java
public static void main(String[] args) {
    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

En Java, un método no se declara dentro de otro método.

Correcto:

~~~java
public static void main(String[] args) {
    int result = add(2, 3);
}

public static int add(int a, int b) {
    return a + b;
}
~~~

---

## Errores frecuentes con `Scanner`

### Olvidar el import

~~~java
Scanner scanner = new Scanner(System.in);
~~~

Sin:

~~~java
import java.util.Scanner;
~~~

Java puede mostrar:

```text
error: cannot find symbol class Scanner
```

### Escribir texto cuando se espera número

Si el programa usa:

~~~java
int age = scanner.nextInt();
~~~

y el usuario escribe:

```text
quince
```

puede aparecer:

```text
java.util.InputMismatchException
```

Para esta lección, la solución es escribir números enteros. En programas más cuidados se puede usar lectura con texto y conversión controlada.

---

## Relación con programas más completos

Un programa completo necesita métodos para que el código no se convierta en una sola lista enorme de instrucciones.

Ejemplos futuros:

~~~java
printWelcome();
readNumber();
calculatePoints();
printFinalSummary();
~~~

También necesita entrada:

~~~java
System.out.print("Escribe un número: ");
int guess = scanner.nextInt();
~~~

Sin métodos, el programa sería difícil de leer. Sin entrada, el usuario no podría interactuar.

---

## Mapa conceptual

```text
Método
 |
 |-- tiene nombre
 |-- puede recibir parámetros
 |-- puede devolver valor
 |-- puede ser void
 |-- agrupa instrucciones
 |-- permite reutilizar acciones

Scanner
 |
 |-- se importa
 |-- lee desde consola
 |-- nextInt lee enteros
 |-- requiere que el usuario escriba el tipo esperado
```

---

## Apoyo visual

El flujo de esta lección puede leerse así:

```text
Usuario escribe número
        |
        v
Scanner lo lee
        |
        v
Variable guarda el número
        |
        v
Método add calcula
        |
        v
Consola muestra resultado
```

---

## Referencias externas opcionales

- Oracle Java Tutorials: métodos, parámetros y retorno.
- Oracle Java API: `Scanner`.
- Dev.java: fundamentos de ejecución y estructura.

Estas referencias son apoyo. La práctica principal debe realizarse en Replit con el material del repositorio.

---

## Checklist antes del laboratorio

- [ ] Sé qué problema resuelve un método.
- [ ] Sé diferenciar parámetro y argumento.
- [ ] Sé cuándo usar `void`.
- [ ] Sé cuándo usar `return`.
- [ ] Sé importar `Scanner`.
- [ ] Sé leer un entero con `nextInt`.
- [ ] Sé interpretar un error por parámetros faltantes.
- [ ] Sé interpretar un error por `Scanner` no importado.
- [ ] Sé explicar cómo los métodos ayudan a ordenar programas más grandes.

---

<div align="center">

**Siguiente:** [Laboratorio en Replit](part-02-practice.md)

</div>





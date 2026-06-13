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
[![Módulo](https://img.shields.io/badge/Módulo-Quiz-purple?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** Replit pendiente.  
> **Editor de respaldo:** OnlineGDB.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Quiz de comprensión

Responde antes de abrir cada solución. Las preguntas están diseñadas para revisar razonamiento, no memoria de sintaxis.

<details>
<summary><strong>1. ¿Por qué conviene crear un método para imprimir el inicio?</strong></summary>

Porque separa una acción con nombre. Aunque sea corta, muestra la idea de organizar responsabilidades.

</details>

<details>
<summary><strong>2. ¿Qué relación debe existir entre parámetros y argumentos?</strong></summary>

Los parámetros definen qué datos necesita el método; los argumentos son los valores concretos enviados al llamarlo.

</details>

<details>
<summary><strong>3. ¿Qué riesgo aparece cuando el usuario escribe texto en vez de número?</strong></summary>

El programa puede lanzar una excepción de entrada. Por eso se debe explicar qué debe escribir el estudiante y, más adelante, validar entradas.

</details>

<details>
<summary><strong>4. ¿Qué evidencia demuestra que esta lección sí se entendió?</strong></summary>

El estudiante puede ejecutar el programa, explicar una línea clave, corregir un error real y justificar por qué conviene separar acciones en métodos.

</details>

<details>
<summary><strong>5. ¿Qué sería una mejora pequeña y razonable?</strong></summary>

Una mejora razonable cambia un dato, agrega una salida o refina una regla sin introducir temas que todavía no se han explicado.

</details>

## Autoevaluación

- [ ] Puedo explicar el concepto principal sin leer la definición.
- [ ] Puedo ubicar el error más común de la lección.
- [ ] Puedo ejecutar el laboratorio en Replit.
- [ ] Puedo decir cómo esta lección prepara programas más ordenados.

## Diagnóstico de métodos

Lee cada fragmento antes de abrir la respuesta. La meta es reconocer el tipo de problema, no adivinar de memoria.

### Caso A: método que promete devolver pero no devuelve

~~~java
public static int add(int a, int b) {
    int result = a + b;
}
~~~

<details>
<summary><strong>¿Qué falta?</strong></summary>

Falta `return`. El método promete devolver un `int`, por eso debe entregar un valor entero.

Versión corregida:

~~~java
public static int add(int a, int b) {
    int result = a + b;
    return result;
}
~~~

También se puede escribir:

~~~java
public static int add(int a, int b) {
    return a + b;
}
~~~

</details>

### Caso B: llamada sin argumentos

~~~java
int result = add();
~~~

<details>
<summary><strong>¿Por qué falla si existe <code>add(int a, int b)</code>?</strong></summary>

Porque el método espera dos argumentos. La llamada no envió ninguno.

Versión corregida:

~~~java
int result = add(first, second);
~~~

Mapa mental:

```text
add(first, second)
     |       |
     v       v
 add(int a, int b)
```

</details>

### Caso C: `void` devolviendo valor

~~~java
public static void printHeader() {
    return 10;
}
~~~

<details>
<summary><strong>¿Qué regla rompe?</strong></summary>

Un método `void` no devuelve un valor. Si solo imprime un encabezado, no necesita `return 10`.

Versión corregida:

~~~java
public static void printHeader() {
    System.out.println("Calculadora de práctica");
}
~~~

</details>

### Caso D: método dentro de otro método

~~~java
public static void main(String[] args) {
    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

<details>
<summary><strong>¿Dónde está el problema?</strong></summary>

El método `add` está declarado dentro de `main`. En Java, los métodos se declaran dentro de la clase, no dentro de otros métodos.

Estructura correcta:

~~~java
public class Main {
    public static void main(String[] args) {
        int result = add(2, 3);
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

</details>

---

## Diagnóstico de Scanner

### Caso A: falta import

~~~java
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
    }
}
~~~

<details>
<summary><strong>¿Qué puede faltar?</strong></summary>

Falta importar `Scanner`:

~~~java
import java.util.Scanner;
~~~

Debe ir antes de `public class Main`.

</details>

### Caso B: entrada incompatible

El programa ejecuta:

~~~java
int age = scanner.nextInt();
~~~

El usuario escribe:

```text
quince
```

<details>
<summary><strong>¿Qué puede ocurrir?</strong></summary>

Puede aparecer `java.util.InputMismatchException`, porque `nextInt()` espera un número entero y recibió texto.

Para esta lección, la corrección práctica es escribir un entero como `15`. En una aplicación más cuidada se agrega validación.

</details>

### Caso C: declarar Scanner fuera del método por accidente

~~~java
import java.util.Scanner;

public class Main {
    Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int number = scanner.nextInt();
    }
}
~~~

<details>
<summary><strong>¿Por qué puede confundir a un principiante?</strong></summary>

Porque `main` es `static` y `scanner` no lo es. Para esta lección, mantén el `Scanner` dentro de `main`.

Versión simple:

~~~java
public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    int number = scanner.nextInt();
}
~~~

</details>

---

## Relaciona conceptos

| Concepto | Pregunta que responde | Ejemplo |
|---|---|---|
| Método | ¿Qué acción quiero nombrar? | `add` |
| Parámetro | ¿Qué dato necesita el método? | `int a` |
| Argumento | ¿Qué valor envío al método? | `add(4, 5)` |
| `return` | ¿Qué valor entrega el método? | `return a + b;` |
| `void` | ¿El método solo hace una acción? | `printHeader()` |
| `Scanner` | ¿Cómo leo datos del usuario? | `new Scanner(System.in)` |
| `nextInt()` | ¿Cómo leo un entero? | `scanner.nextInt()` |

<details>
<summary><strong>¿Cuál se conecta más con programas grandes?</strong></summary>

Varios conceptos se conectan. `Scanner` permite leer datos del usuario. Los métodos permiten separar acciones como mostrar bienvenida, leer un número, calcular un resultado y mostrar un resumen final.

</details>

---

## Completa el código

~~~java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Primer número: ");
        int first = scanner.________();

        System.out.print("Segundo número: ");
        int second = scanner.________();

        int result = add(_____, _____);
        System.out.println("Resultado: " + result);
    }

    public static int add(int a, int b) {
        return _______;
    }
}
~~~

<details>
<summary><strong>Respuesta</strong></summary>

~~~java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Primer número: ");
        int first = scanner.nextInt();

        System.out.print("Segundo número: ");
        int second = scanner.nextInt();

        int result = add(first, second);
        System.out.println("Resultado: " + result);
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
~~~

</details>

---

## Preguntas de diseño

<details>
<summary><strong>1. ¿Por qué no dejar todo dentro de <code>main</code>?</strong></summary>

Porque `main` se vuelve difícil de leer cuando concentra todas las responsabilidades. Es mejor que coordine acciones y delegue tareas específicas a métodos.

</details>

<details>
<summary><strong>2. ¿Cuándo un método debería ser <code>void</code>?</strong></summary>

Cuando solo realiza una acción y no necesita devolver un valor. Por ejemplo, imprimir un encabezado o mostrar instrucciones.

</details>

<details>
<summary><strong>3. ¿Cuándo un método debería devolver <code>int</code>?</strong></summary>

Cuando calcula o produce un número entero que se usará después. Por ejemplo, sumar dos números o calcular puntaje.

</details>

<details>
<summary><strong>4. ¿Qué ventaja tiene <code>add(first, second)</code> frente a escribir <code>first + second</code> directamente?</strong></summary>

Para una suma simple, ambas opciones funcionan. La ventaja del método aparece cuando quieres nombrar la operación, reutilizarla o preparar operaciones más complejas.

</details>

<details>
<summary><strong>5. ¿Por qué <code>Scanner</code> no debería mezclarse con demasiadas reglas en la misma línea?</strong></summary>

Porque leer datos ya es una responsabilidad. Si además validas, calculas e imprimes en la misma zona, el programa se vuelve difícil de seguir para principiantes.

</details>

---

## Ordena el flujo

Ordena mentalmente estas acciones:

```text
mostrar resultado
crear Scanner
pedir primer número
llamar add
pedir segundo número
mostrar encabezado
```

<details>
<summary><strong>Orden sugerido</strong></summary>

```text
crear Scanner
mostrar encabezado
pedir primer número
pedir segundo número
llamar add
mostrar resultado
```

Ese orden permite que el usuario entienda qué está pasando antes de escribir datos.

</details>

---

## Rúbrica corta

| Criterio | Logrado | En proceso | Repasar |
|---|---:|---:|---:|
| Importa `Scanner` correctamente. |  |  |  |
| Lee dos enteros desde consola. |  |  |  |
| Crea un método `void`. |  |  |  |
| Crea un método con `return`. |  |  |  |
| Diferencia parámetro y argumento. |  |  |  |
| Corrige una llamada sin argumentos. |  |  |  |
| Explica cómo esto ayuda a ordenar un programa. |  |  |  |

---

## Revisión para avanzar

Puedes continuar si respondes:

1. ¿Qué es un parámetro?
2. ¿Qué es un argumento?
3. ¿Qué hace `return`?
4. ¿Qué significa `void`?
5. ¿Por qué se importa `Scanner`?
6. ¿Qué lee `nextInt()`?
7. ¿Dónde se declara un método en Java?
8. ¿Cómo se conecta esta lección con una aplicación de consola más completa?

---

<div align="center">

**Volver al [plan de curso](../../../course-plan.md)**

</div>





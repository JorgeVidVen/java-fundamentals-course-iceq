---
layout: lesson
title: "Leccion 02: Variables y tipos de datos - Teoria"
description: Basic types, variables and formatted output in Java.
---

<p align="center">
  <img src="../../../assets/lesson-02-banner.png" alt="Variables y tipos de datos" width="100%">
</p>

<div align="center">

# Lección 02: Variables y tipos de datos

### Guardar información para que el programa pueda usarla

[![Nivel](https://img.shields.io/badge/Nivel-Principiante-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-9_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Teoría-orange?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** [Crear laboratorio online](/docs/online-editor-links/).
> **Archivo base:** `starter-files/lesson-02-variables/Main.java`.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## De imprimir texto a guardar datos

En la Lección 01 imprimiste texto fijo:

```java
System.out.println("Nombre: Valeria");
```

Ese enfoque funciona para una presentación corta, pero tiene un límite: si quieres cambiar el nombre en varias partes del programa, tendrías que buscar cada texto y editarlo manualmente.

Las variables resuelven ese problema. Una variable permite guardar un dato con nombre para usarlo después.

```java
String studentName = "Valeria";
System.out.println("Nombre: " + studentName);
```

Ahora el dato `Valeria` tiene una etiqueta: `studentName`.

Esta lección marca un cambio importante:

```text
Lección 01: mostrar texto
Lección 02: guardar datos y mostrarlos
```

---

## Imagen mental: cajas con etiqueta

Una variable puede imaginarse como una caja con etiqueta.

```text
+--------------------------+
| etiqueta: studentName    |
| contenido: "Valeria"     |
+--------------------------+

+--------------------------+
| etiqueta: age            |
| contenido: 15            |
+--------------------------+

+--------------------------+
| etiqueta: averageGrade   |
| contenido: 18.5          |
+--------------------------+
```

La etiqueta ayuda a recordar qué contiene la caja. El tipo de dato indica qué clase de contenido acepta.

No es lo mismo una caja para texto que una caja para números. Java revisa esa diferencia antes de ejecutar.

---

## ¿Qué es una variable?

Una variable es un espacio con nombre donde el programa guarda un valor.

En Java, declarar una variable normalmente requiere tres partes:

```java
String studentName = "Valeria";
```

Descomposición:

```text
String        studentName        =        "Valeria";
  |               |              |             |
tipo            nombre        asigna        valor
```

El punto y coma sigue siendo necesario porque la declaración es una instrucción.

---

## La estructura de una declaración

### Tipo

El tipo indica qué clase de dato se guardará.

```java
String
int
double
boolean
```

### Nombre

El nombre identifica la variable.

```java
studentName
age
averageGrade
active
```

### Valor

El valor es el contenido inicial.

```java
"Valeria"
15
18.5
true
```

### Declaración completa

```java
String studentName = "Valeria";
int age = 15;
double averageGrade = 18.5;
boolean active = true;
```

---

## Tipos básicos de esta lección

### `String`

`String` guarda texto.

```java
String courseName = "Java Fundamentals";
```

Reglas importantes:

- el texto va entre comillas dobles;
- `String` empieza con mayúscula;
- se usa para nombres, mensajes, títulos y descripciones.

Ejemplos:

```java
String studentName = "Renato";
String city = "Lima";
String courseName = "Java Fundamentals";
```

### `int`

`int` guarda números enteros.

```java
int age = 15;
```

Se usa para:

- edad;
- edad;
- calificación;
- asistencias;
- posiciones simples.

Ejemplos:

```java
int attendanceCount = 3;
int grade = 15;
int position = 5;
```

### `double`

`double` guarda números con decimales.

```java
double averageGrade = 18.5;
```

Se usa para:

- promedios;
- medidas;
- porcentajes;
- resultados con decimal.

Ejemplos:

```java
double temperature = 36.5;
double progress = 75.5;
double average = 16.8;
```

### `boolean`

`boolean` guarda verdadero o falso.

```java
boolean active = true;
```

Se usa para representar estados:

```java
boolean gameStarted = false;
boolean hasLives = true;
boolean passed = true;
```

Solo acepta:

```java
true
false
```

No acepta:

```java
"true"
"sí"
1
0
```

---

## Tabla de selección rápida

| Quiero guardar | Tipo sugerido | Ejemplo |
|---|---|---|
| Nombre de estudiante | `String` | `String name = "Ana";` |
| Edad | `int` | `int age = 14;` |
| Promedio | `double` | `double average = 17.5;` |
| Está activo | `boolean` | `boolean active = true;` |
| Edad | `int` | `int age = 15;` |
| Nombre del curso | `String` | `String courseName = "Java";` |
| Calificación | `int` | `int grade = 18;` |
| Temperatura | `double` | `double temperature = 22.7;` |

---

## Nombres de variables

Un buen nombre reduce explicación.

### Nombre pobre

```java
String x = "Valeria";
int y = 15;
```

El programa compila, pero el lector no sabe qué representan `x` e `y`.

### Nombre claro

```java
String studentName = "Valeria";
int studentAge = 15;
```

El lector entiende el dato sin preguntar.

### Regla práctica

Usa nombres que respondan:

```text
¿Qué dato guarda esta variable?
```

Si el nombre no responde eso, probablemente es demasiado genérico.

---

## Convención camelCase

En Java, las variables suelen escribirse en `camelCase`.

Ejemplos:

```java
studentName
averageGrade
attendanceCount
courseName
isActive
```

No se recomienda para variables:

```java
StudentName
average_grade
TOTAL_ATTENDANCE_COUNT
nombre del estudiante
```

### ¿Por qué importa?

Porque el código no solo debe funcionar. También debe poder leerse por otra persona del equipo.

---

## Asignación

El símbolo `=` en Java no significa exactamente "es igual" como en matemáticas. En una declaración significa:

```text
guarda este valor en esta variable
```

Ejemplo:

```java
int grade = 0;
```

Lectura:

```text
Crea una variable entera llamada grade y guarda el valor 0.
```

Después puedes reasignar:

```java
grade = 10;
```

Lectura:

```text
Ahora grade vale 10.
```

No repites el tipo cuando reasignas.

---

## Declarar vs reasignar

### Declarar

```java
int attendanceCount = 3;
```

Aquí creas la variable por primera vez.

### Reasignar

```java
attendanceCount = 4;
```

Aquí cambias el valor de una variable que ya existe.

### Error común

```java
int attendanceCount = 3;
int attendanceCount = 4;
```

Java puede mostrar:

```text
error: variable attendanceCount is already defined
```

Corrección:

```java
int attendanceCount = 3;
attendanceCount = 4;
```

---

## Usar variables en salida

Para mostrar variables en consola, se usa concatenación con `+`.

```java
String studentName = "Valeria";
int age = 15;

System.out.println(studentName + " tiene " + age + " años.");
```

Salida:

```text
Valeria tiene 15 años.
```

El operador `+` une texto y valores.

---

## Lectura de una concatenación

Código:

```java
System.out.println(studentName + " tiene " + age + " años.");
```

Partes:

```text
studentName     -> valor guardado en la variable
" tiene "       -> texto fijo con espacios
age             -> valor guardado en la variable
" años."        -> texto fijo
```

Los espacios dentro de comillas son importantes.

Sin espacios:

```java
System.out.println(studentName + "tiene" + age + "años.");
```

Salida:

```text
Valeriatiene15años.
```

Versión legible:

```java
System.out.println(studentName + " tiene " + age + " años.");
```

---

## Código incorrecto a propósito

Observa:

```java
public class Main {
    public static void main(String[] args) {
        age = 15;
        String grade = 18.5;
        System.out.println(name);
    }
}
```

Este fragmento tiene varios problemas.

### Problema 1: variable no declarada

```java
age = 15;
```

Java no sabe qué es `age` porque no se declaró con tipo.

Corrección:

```java
int age = 15;
```

### Problema 2: tipo incorrecto

```java
String grade = 18.5;
```

`18.5` es un número decimal, no texto.

Corrección:

```java
double grade = 18.5;
```

### Problema 3: nombre inexistente

```java
System.out.println(name);
```

No existe una variable llamada `name`.

Corrección:

```java
String name = "Valeria";
System.out.println(name);
```

---

## Versión correcta

```java
public class Main {
    public static void main(String[] args) {
        String studentName = "Valeria";
        int age = 15;
        double averageGrade = 18.5;
        boolean active = true;

        System.out.println("Ficha de estudiante");
        System.out.println("Nombre: " + studentName);
        System.out.println("Edad: " + age);
        System.out.println("Promedio: " + averageGrade);
        System.out.println("Activo: " + active);
    }
}
```

Salida esperada:

```text
Ficha de estudiante
Nombre: Valeria
Edad: 15
Promedio: 18.5
Activo: true
```

---

## Memoria mental del programa

Antes de imprimir, el programa guarda:

```text
studentName  -> "Valeria"
age          -> 15
averageGrade -> 18.5
active       -> true
```

Después imprime cada valor.

```text
variables guardadas -> println -> consola
```

Esta idea prepara POO. Más adelante, un objeto podrá guardar varios datos relacionados dentro de una misma unidad.

---

## Variables en programas reales

En programas reales necesitaremos datos como:

```java
String playerName = "Alex";
int secretNumber = 7;
int attendanceCount = 3;
int grade = 0;
boolean sessionStarted = false;
```

La Lección 02 es la base para eso. Sin variables, un programa sería puro texto fijo.

Con variables, el programa puede recordar:

- quién juega;
- qué edad tiene una persona;
- qué calificación se obtuvo;
- cuántas asistencias se registraron;
- si la inscripción está activa.

---

## Apoyo visual

Una variable puede imaginarse como una caja con etiqueta:

```text
studentName -> "Valeria"
age         -> 15
grade       -> 0
active      -> true
```

---

## Errores típicos de esta lección

### Error: usar una variable antes de declararla

```java
System.out.println(grade);
int grade = 0;
```

Java lee de arriba hacia abajo dentro del método. No puede imprimir `grade` antes de conocerla.

Versión correcta:

```java
int grade = 0;
System.out.println(grade);
```

### Error: confundir texto con número

```java
int age = "15";
```

`"15"` es texto, no entero.

Versión correcta:

```java
int age = 15;
```

### Error: olvidar comillas en String

```java
String name = Valeria;
```

Java cree que `Valeria` es una variable.

Versión correcta:

```java
String name = "Valeria";
```

### Error: escribir boolean con comillas

```java
boolean active = "true";
```

`"true"` es texto.

Versión correcta:

```java
boolean active = true;
```

---

## Checklist de comprensión

- [ ] Sé declarar una variable `String`.
- [ ] Sé declarar una variable `int`.
- [ ] Sé declarar una variable `double`.
- [ ] Sé declarar una variable `boolean`.
- [ ] Sé elegir un tipo según el dato.
- [ ] Sé usar `+` para concatenar.
- [ ] Sé distinguir declaración y reasignación.
- [ ] Sé leer un error de tipo.
- [ ] Sé explicar por qué el nombre de una variable importa.
- [ ] Sé explicar por qué las variables evitan repetir datos fijos.

---

## Cierre

La Lección 01 mostró cómo imprimir texto. La Lección 02 muestra cómo guardar información para imprimirla después.

Este cambio hace que el programa empiece a tener memoria.

```text
sin variables -> texto fijo
con variables -> datos con nombre
```

En la siguiente lección, esos datos se usarán para decidir. Por ejemplo:

```java
if (grade >= 10) {
    System.out.println("Buen puntaje");
}
```

Antes de decidir, el programa necesita datos. Por eso las variables son el puente hacia condiciones, bucles y objetos.

---

<div align="center">

**Siguiente:** [Laboratorio en Replit](part-02-practice/)

</div>








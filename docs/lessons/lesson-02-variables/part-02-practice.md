---
layout: lesson
title: "Leccion 02: Variables y tipos de datos - Practica"
description: Lab to create a student profile with Java variables.
has_compiler: true
---

<p align="center">
  <img src="../../../assets/lesson-02-banner.png" alt="Variables y tipos de datos" width="100%">
</p>

<div align="center">

# Lección 02: Laboratorio en Replit

### Construir una ficha de estudiante con variables

[![Nivel](https://img.shields.io/badge/Nivel-Principiante-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-20_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Práctica-blue?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** [Crear laboratorio online](/docs/online-editor-links/).
> **Archivo base:** `starter-files/lesson-02-variables/Main.java`.
> **Solución de referencia:** `completed-examples/lesson-02-variables/`.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

---

## Objetivo del laboratorio

En este laboratorio transformarás una presentación escrita con texto fijo en una ficha construida con datos guardados en variables.

Al terminar, tu programa mostrará información como:

```text
FICHA DE ESTUDIANTE
Nombre: Valeria
Edad: 15
Promedio: 18.5
Curso: Java Fundamentals
Calificación inicial: 0
Activo en el curso: true
Registro generado en Java
```

Lo importante no es la ficha en sí. Lo importante es entender que cada dato vive en una variable con tipo y nombre.

---

## Pruébalo aquí mismo 🚀

El editor de abajo ya tiene el código base con variables. Modifica los valores, presiona **Run** y ve el resultado.

<div data-pym-src="https://www.jdoodle.com/plugin" data-language="java" data-version-index="6">
public class Main {
    public static void main(String[] args) {
        String studentName = "Valeria";
        int age = 15;
        double averageGrade = 18.5;
        boolean active = true;
        System.out.println("Nombre: " + studentName);
        System.out.println("Edad: " + age);
        System.out.println("Promedio: " + averageGrade);
        System.out.println("Activo: " + active);
    }
}
</div>

> **Consejo:** cambia los valores de las variables y presiona Run otra vez.

---

## Revisar el starter

Abre `Main.java`.

Deberías ver algo parecido a esto:

```java
// Lección 2: Variables
// Tarea 1: Crea variables para tu nombre y edad.
// Tarea 2: Imprime esas variables.

public class Main {
    public static void main(String[] args) {
        // Escribe tus variables aquí


        // Imprime tus variables

    }
}
```

Este starter compila porque los comentarios no afectan la ejecución. Sin embargo, todavía no hace nada visible.

### Ejecuta antes de editar

Presiona **Run**.

Resultado posible:

```text
```

Es decir, puede no aparecer nada. Eso no significa que Replit esté roto; significa que todavía no hay instrucciones de impresión.

---

## Crear la primera variable: nombre

Dentro de `main`, debajo del comentario de variables, escribe:

```java
String studentName = "Valeria";
```

Ahora imprime:

```java
System.out.println("Nombre: " + studentName);
```

Código parcial:

```java
public class Main {
    public static void main(String[] args) {
        String studentName = "Valeria";

        System.out.println("Nombre: " + studentName);
    }
}
```

Ejecuta.

Salida esperada:

```text
Nombre: Valeria
```

### Cambio personal

Reemplaza `Valeria` por tu nombre.

No cambies todavía `String`.

---

## Crear una variable entera: edad

Agrega:

```java
int age = 15;
```

Imprime:

```java
System.out.println("Edad: " + age);
```

Código:

```java
String studentName = "Valeria";
int age = 15;

System.out.println("Nombre: " + studentName);
System.out.println("Edad: " + age);
```

### Observación

`age` no lleva comillas porque es un número entero.

Correcto:

```java
int age = 15;
```

Incorrecto para esta práctica:

```java
int age = "15";
```

---

## Agregar un decimal: promedio

Agrega:

```java
double averageGrade = 18.5;
```

Imprime:

```java
System.out.println("Promedio: " + averageGrade);
```

### Pregunta

¿Por qué no usamos `int`?

Porque `18.5` tiene decimal. `int` guarda enteros.

---

## Agregar un booleano

Agrega:

```java
boolean active = true;
```

Imprime:

```java
System.out.println("Activo en el curso: " + active);
```

### Nota

`true` no lleva comillas.

Correcto:

```java
boolean active = true;
```

Incorrecto:

```java
boolean active = "true";
```

---

## Agregar un encabezado claro

Al inicio de la salida:

```java
System.out.println("FICHA DE ESTUDIANTE");
```

Al final:

```java
System.out.println("Registro generado en Java");
```

Esto no cambia la lógica, pero mejora la lectura.

---

## Código completo de primera versión

```java
public class Main {
    public static void main(String[] args) {
        String studentName = "Valeria";
        int age = 15;
        double averageGrade = 18.5;
        boolean active = true;

        System.out.println("FICHA DE ESTUDIANTE");
        System.out.println("Nombre: " + studentName);
        System.out.println("Edad: " + age);
        System.out.println("Promedio: " + averageGrade);
        System.out.println("Activo en el curso: " + active);
        System.out.println("Registro generado en Java");
    }
}
```

Ejecuta antes de continuar.

---

## Variación 1: datos de estudiante

Agrega una variable relacionada con el perfil del estudiante:

```java
int attendanceCount = 3;
```

Imprime:

```java
System.out.println("Asistencias registradas: " + attendanceCount);
```

Ubica esa línea junto a los demás datos.

### Salida esperada

```text
Asistencias registradas: 3
```

### Conexión

En programas más completos, una variable como `age` o `grade` permitirá tomar decisiones más adelante.

---

## Variación 2: calificación inicial

Agrega:

```java
int grade = 0;
```

Imprime:

```java
System.out.println("Calificación inicial: " + grade);
```

### Pregunta

¿Por qué la calificación inicial es `int`?

Porque en este ejemplo usaremos valores enteros: 0, 10, 15, 20.

---

## Variación 3: nombre del curso

Agrega:

```java
String courseName = "Java Fundamentals";
```

Imprime:

```java
System.out.println("Curso: " + courseName);
```

### Resultado

```text
Curso: Java Fundamentals
```

---

## Mini reto: cambiar datos sin cambiar impresión

Una ventaja de las variables es que puedes cambiar los datos arriba y conservar la salida.

Cambia:

```java
String studentName = "Valeria";
```

por:

```java
String studentName = "Diego";
```

Ejecuta.

La línea de impresión no cambia:

```java
System.out.println("Nombre: " + studentName);
```

Pero la salida sí.

---

## Experimento controlado: variable no declarada

Escribe temporalmente:

```java
System.out.println("Ciudad: " + city);
```

Ejecuta.

Mensaje probable:

```text
error: cannot find symbol
```

### Por qué ocurre

No existe una variable llamada `city`.

### Corrección

Declara la variable antes:

```java
String city = "Lima";
System.out.println("Ciudad: " + city);
```

---

## Experimento controlado: tipo incorrecto

Escribe:

```java
int averageGrade = 18.5;
```

Ejecuta.

Mensaje probable:

```text
error: incompatible types: possible lossy conversion from double to int
```

### Traducción simple

Java no quiere guardar un decimal en una variable entera porque se perdería información.

### Corrección

```java
double averageGrade = 18.5;
```

---

## Experimento controlado: String sin comillas

Escribe:

```java
String studentName = Valeria;
```

Ejecuta.

Mensaje probable:

```text
error: cannot find symbol
```

### Traducción simple

Java cree que `Valeria` es el nombre de una variable, no un texto.

### Corrección

```java
String studentName = "Valeria";
```

---

## Experimento controlado: declarar dos veces

Escribe:

```java
int attendanceCount = 3;
int attendanceCount = 5;
```

Ejecuta.

Mensaje probable:

```text
error: variable attendanceCount is already defined
```

### Corrección

```java
int attendanceCount = 3;
attendanceCount = 5;
```

Primero declaras. Después reasignas.

---

## Versión final sugerida

```java
public class Main {
    public static void main(String[] args) {
        String studentName = "Valeria";
        int age = 15;
        double averageGrade = 18.5;
        boolean active = true;
        String courseName = "Java Fundamentals";
        int grade = 0;

        System.out.println("FICHA DE ESTUDIANTE");
        System.out.println("Nombre: " + studentName);
        System.out.println("Edad: " + age);
        System.out.println("Promedio: " + averageGrade);
        System.out.println("Activo en el curso: " + active);
        System.out.println("Curso: " + courseName);
        System.out.println("Calificación inicial: " + grade);
        System.out.println("Registro generado en Java");
    }
}
```

---

## Troubleshooting

| Error literal | Qué significa | Cómo corregirlo |
|---|---|---|
| `error: cannot find symbol variable age` | Se usó `age` sin declararla. | Escribe `int age = 15;` antes de usarla. |
| `error: incompatible types: String cannot be converted to int` | Intentaste guardar texto en un entero. | Quita comillas si debe ser número. |
| `error: incompatible types: possible lossy conversion from double to int` | Intentaste guardar decimal en entero. | Usa `double`. |
| `error: variable attendanceCount is already defined` | Declaraste la misma variable dos veces. | Reasigna sin repetir `int`. |
| `error: unclosed string literal` | Falta cerrar comillas. | Revisa textos `String`. |
| `error: ';' expected` | Falta punto y coma. | Revisa el final de la línea. |

---

## Evidencia de práctica

Tu práctica está lista cuando puedes mostrar:

- código ejecutado en Replit;
- al menos cinco variables;
- al menos cuatro tipos usados;
- salida ordenada con separadores;
- un error provocado y corregido;
- conexión con programas más completos.

---

## Bitácora

```text
Nombre:
Fecha:

Variable String que usé:

Variable int que usé:

Variable double que usé:

Variable boolean que usé:

Error que provoqué:

Cómo lo corregí:

Dato que podría usar en una aplicación de consola:
```

---

## Cierre

Ahora el programa ya no solo muestra texto fijo. Guarda datos, los identifica con nombres y los imprime después.

Este patrón aparecerá todo el curso:

```text
guardar dato -> usar dato -> mostrar resultado
```

En la Lección 03, esos datos servirán para tomar decisiones.

---

---

<div align="center">

**Siguiente:** [Quiz de comprensión](part-03-quiz/)

</div>








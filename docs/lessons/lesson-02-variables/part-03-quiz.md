---
layout: lesson
title: "Leccion 02: Variables y tipos de datos - Quiz"
description: Review questions about types, values and concatenation.
---

<p align="center">
  <img src="../../../assets/lesson-02-banner.png" alt="Variables y tipos de datos" width="100%">
</p>

<div align="center">

# Lección 02: Quiz y revisión

### Elegir tipos, nombrar datos y leer errores

[![Nivel](https://img.shields.io/badge/Nivel-Principiante-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-10_a_15_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Quiz-purple?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Indicaciones:** responde primero sin abrir la solución. Si dudas, vuelve al laboratorio y ejecuta un ejemplo mínimo en Replit.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

---

## Revisión inicial

Marca tu seguridad antes de empezar.

| Tema | Seguro | En proceso |
|---|---:|---:|
| Declarar `String` |  |  |
| Declarar `int` |  |  |
| Declarar `double` |  |  |
| Declarar `boolean` |  |  |
| Concatenar con `+` |  |  |
| Diferenciar declaración y reasignación |  |  |
| Leer error de tipo |  |  |
| Elegir nombres claros |  |  |
| Conectar variables con programas reales |  |  |

---

## Preguntas principales

<details>
<summary><strong>1. ¿Qué problema resuelve una variable?</strong></summary>

Una variable permite guardar un dato con nombre para usarlo después. Sin variables, el programa depende de texto fijo repetido en muchas líneas.

Ejemplo:

```java
String name = "Valeria";
System.out.println("Nombre: " + name);
```

</details>

<details>
<summary><strong>2. ¿Cuáles son las tres partes principales de una declaración?</strong></summary>

Tipo, nombre y valor.

```java
int age = 15;
```

- `int`: tipo.
- `age`: nombre.
- `15`: valor.

</details>

<details>
<summary><strong>3. ¿Por qué <code>String</code> empieza con mayúscula?</strong></summary>

Porque `String` es una clase de Java. En esta etapa basta con recordar que debe escribirse con `S` mayúscula.

```java
String name = "Ana";
```

</details>

<details>
<summary><strong>4. ¿Qué tipo usarías para guardar una edad?</strong></summary>

Usaría `int`, porque una edad normalmente se representa como número entero.

```java
int age = 15;
```

</details>

<details>
<summary><strong>5. ¿Qué tipo usarías para guardar un promedio de 18.5?</strong></summary>

Usaría `double`, porque el valor tiene decimal.

```java
double averageGrade = 18.5;
```

</details>

<details>
<summary><strong>6. ¿Qué tipo usarías para saber si una sesión empezó?</strong></summary>

Usaría `boolean`, porque la respuesta solo puede ser verdadera o falsa.

```java
boolean gameStarted = true;
```

</details>

<details>
<summary><strong>7. ¿Por qué <code>"15"</code> no es lo mismo que <code>15</code>?</strong></summary>

`"15"` es texto porque está entre comillas. `15` es un número entero. Java los trata como tipos distintos.

</details>

<details>
<summary><strong>8. ¿Qué hace el operador <code>+</code> en una impresión?</strong></summary>

Une textos y valores para formar una salida.

```java
System.out.println("Edad: " + age);
```

</details>

<details>
<summary><strong>9. ¿Qué diferencia hay entre declarar y reasignar?</strong></summary>

Declarar crea la variable:

```java
int score = 0;
```

Reasignar cambia su valor:

```java
score = 10;
```

</details>

<details>
<summary><strong>10. ¿Por qué los nombres claros importan?</strong></summary>

Porque el código debe poder leerse. `studentName` comunica intención; `x` obliga a adivinar.

</details>

---

## Elige el tipo correcto

Completa mentalmente la tabla.

| Dato | Tipo |
|---|---|
| Nombre del estudiante |  |
| Puntaje inicial |  |
| Promedio del estudiante |  |
| La sesión está activa |  |
| Número secreto |  |
| Ciudad |  |
| Cantidad de vidas |  |
| Porcentaje de avance |  |

<details>
<summary><strong>Respuesta sugerida</strong></summary>

| Dato | Tipo |
|---|---|
| Nombre del estudiante | `String` |
| Puntaje inicial | `int` |
| Promedio del estudiante | `double` |
| La sesión está activa | `boolean` |
| Número secreto | `int` |
| Ciudad | `String` |
| Cantidad de vidas | `int` |
| Porcentaje de avance | `double` |

</details>

---

## Diagnóstico de errores

### Caso A

```java
public class Main {
    public static void main(String[] args) {
        age = 15;
        System.out.println(age);
    }
}
```

<details>
<summary><strong>Respuesta del caso A</strong></summary>

Falta declarar la variable con tipo.

Corrección:

```java
int age = 15;
System.out.println(age);
```

</details>

### Caso B

```java
int age = "15";
```

<details>
<summary><strong>Respuesta del caso B</strong></summary>

`age` es `int`, pero `"15"` es texto.

Corrección:

```java
int age = 15;
```

</details>

### Caso C

```java
double averageGrade = "18.5";
```

<details>
<summary><strong>Respuesta del caso C</strong></summary>

`"18.5"` está entre comillas, por lo tanto es texto. Para `double`, el valor debe ir sin comillas.

```java
double averageGrade = 18.5;
```

</details>

### Caso D

```java
boolean active = "true";
```

<details>
<summary><strong>Respuesta del caso D</strong></summary>

`"true"` es texto. El booleano correcto usa `true` sin comillas.

```java
boolean active = true;
```

</details>

### Caso E

```java
String name = Valeria;
```

<details>
<summary><strong>Respuesta del caso E</strong></summary>

Faltan comillas. Java interpreta `Valeria` como si fuera otra variable.

```java
String name = "Valeria";
```

</details>

### Caso F

```java
int attendanceCount = 3;
int attendanceCount = 5;
```

<details>
<summary><strong>Respuesta del caso F</strong></summary>

La variable se declaró dos veces. Para cambiar el valor, no se repite el tipo.

```java
int attendanceCount = 3;
attendanceCount = 5;
```

</details>

---

## Completa el programa

Completa los espacios:

```java
public class Main {
    public static void main(String[] args) {
        ______ studentName = "Valeria";
        ______ age = 15;
        ______ averageGrade = 18.5;
        ______ active = true;

        System.out.println("Nombre: " + ______);
        System.out.println("Edad: " + ______);
    }
}
```

<details>
<summary><strong>Respuesta</strong></summary>

```java
public class Main {
    public static void main(String[] args) {
        String studentName = "Valeria";
        int age = 15;
        double averageGrade = 18.5;
        boolean active = true;

        System.out.println("Nombre: " + studentName);
        System.out.println("Edad: " + age);
    }
}
```

</details>

---

## Orden correcto

¿Cuál orden es correcto?

### Opción A

```java
System.out.println("Nombre: " + studentName);
String studentName = "Valeria";
```

### Opción B

```java
String studentName = "Valeria";
System.out.println("Nombre: " + studentName);
```

<details>
<summary><strong>Respuesta</strong></summary>

La opción B. La variable debe declararse antes de usarse.

</details>

---

## Preguntas de razonamiento

<details>
<summary><strong>1. ¿Por qué no conviene llamar a una variable <code>x</code>?</strong></summary>

Porque no comunica qué dato guarda. En ejercicios muy pequeños puede funcionar, pero en un programa con más líneas dificulta leer y mantener el código.

</details>

<details>
<summary><strong>2. ¿Por qué <code>attendanceCount</code> debería ser <code>int</code>?</strong></summary>

Porque representa una cantidad entera. No tendría sentido guardar 3.5 estudiantes o 3.5 Asistencias si la regla trabaja con unidades completas.

</details>

<details>
<summary><strong>3. ¿Por qué <code>sessionStarted</code> debería ser <code>boolean</code>?</strong></summary>

Porque solo representa dos estados: ganó o no ganó.

</details>

<details>
<summary><strong>4. ¿Qué ventaja tiene guardar el nombre de una persona en una variable?</strong></summary>

Puedes usarlo muchas veces sin escribir el nombre fijo en cada línea. Si cambia el nombre, solo actualizas el valor de la variable.

</details>

---

## Código para revisar

Lee este programa:

```java
public class Main {
    public static void main(String[] args) {
        String playerName = "Alex";
        int attendanceCount = 3;
        int grade = 0;
        boolean gameStarted = false;

        System.out.println("Jugador: " + playerName);
        System.out.println("Asistencias: " + attendanceCount);
        System.out.println("Calificación: " + grade);
        System.out.println("Juego iniciado: " + gameStarted);
    }
}
```

Responde:

1. ¿Cuántas variables hay?
2. ¿Qué tipo tiene `playerName`?
3. ¿Qué tipo tiene `attendanceCount`?
4. ¿Qué imprime la última línea?
5. ¿Qué variable se relaciona más con la Lección 03?

<details>
<summary><strong>Respuestas</strong></summary>

1. Hay cuatro variables.
2. `playerName` es `String`.
3. `attendanceCount` es `int`.
4. Imprime `Juego iniciado: false`.
5. `attendanceCount` representa una cantidad entera de registros.

</details>

---

## Autoevaluación por desempeño

### Nivel 1: Reconozco

- [ ] Reconozco variables en un programa.
- [ ] Reconozco tipos básicos.
- [ ] Reconozco un valor entre comillas.

### Nivel 2: Escribo

- [ ] Declaro variables sin errores.
- [ ] Uso nombres claros.
- [ ] Imprimo valores con concatenación.

### Nivel 3: Corrijo

- [ ] Corrijo variables no declaradas.
- [ ] Corrijo tipos incorrectos.
- [ ] Corrijo comillas mal usadas.

### Nivel 4: Conecto

- [ ] Relaciono variables con programas reales.
- [ ] Identifico datos para una persona o registro simple.
- [ ] Explico por qué un dato debe ser `int`, `double`, `String` o `boolean`.

---

## Preguntas para discusión

1. ¿Por qué Java no permite guardar cualquier valor en cualquier variable?
2. ¿Qué tipo usarías para guardar la cantidad de asistencias de un estudiante?
3. ¿Qué tipo usarías para guardar si el usuario inició sesión?
4. ¿Qué tipo usarías para guardar el nombre de una ciudad?
5. ¿Qué pasa si declaras una variable y nunca la usas?
6. ¿Qué pasa si usas una variable que nunca declaraste?
7. ¿Por qué los nombres en inglés pueden ayudar en código?
8. ¿Cuándo sería útil cambiar el valor de una variable?

---

## Vocabulario

| Palabra | Explicación |
|---|---|
| Variable | Espacio con nombre para guardar un dato. |
| Tipo | Categoría del dato. |
| Declarar | Crear una variable. |
| Asignar | Guardar un valor. |
| Reasignar | Cambiar el valor. |
| Concatenar | Unir texto y valores. |
| String | Texto. |
| int | Entero. |
| double | Decimal. |
| boolean | Verdadero o falso. |

---

## Revisión contra programas más completos

Completa la tabla con tipos:

| Dato del programa | Tipo |
|---|---|
| Nombre del estudiante |  |
| Número secreto |  |
| Asistencias restantes |  |
| Puntaje |  |
| Ganó la partida |  |
| Nombre del nivel |  |
| Progreso del curso |  |

<details>
<summary><strong>Respuesta sugerida</strong></summary>

| Dato del programa | Tipo |
|---|---|
| Nombre del estudiante | `String` |
| Número secreto | `int` |
| Asistencias restantes | `int` |
| Puntaje | `int` |
| Ganó la partida | `boolean` |
| Nombre del nivel | `String` |
| Progreso del curso | `double` |

</details>

---

## Registro personal

```text
La variable más fácil de entender fue:

El tipo que más debo practicar es:

El error que más probablemente cometería es:

Un dato que usaré en un programa futuro es:

Mi pregunta para la siguiente lección es:
```

---

## Cierre del quiz

Puedes avanzar si respondes estas tres preguntas:

1. ¿Qué tipo guarda texto?
2. ¿Qué tipo guarda enteros?
3. ¿Qué haces si Java dice `cannot find symbol`?

Respuestas esperadas:

```text
1. String.
2. int.
3. Reviso si declaré la variable y si escribí bien su nombre.
```

---

## Puente hacia la Lección 03

Las variables guardan datos. Las condiciones usan esos datos para decidir.

Ejemplo próximo:

```java
int grade = 12;

if (grade >= 10) {
    System.out.println("Buen puntaje");
}
```

Sin `grade`, no hay decisión. Por eso esta lección es la base de la siguiente.

---

---

<div align="center">

**Volver al [plan de curso](/course-plan/)**

</div>








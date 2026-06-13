---
layout: lesson
---

<p align="center">
  <img src="../../../assets/lesson-03-banner.png" alt="Condiciones y bucles" width="100%">
</p>

<div align="center">

# Lección 03: Condiciones y bucles

### Reglas que deciden y acciones que se repiten

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
<summary><strong>1. ¿Por qué un bucle necesita una condición de parada?</strong></summary>

Porque sin una condición que eventualmente deje de cumplirse, el programa puede repetir la misma acción sin terminar.

</details>

<details>
<summary><strong>2. ¿Qué diferencia hay entre <code>=</code> y <code>==</code>?</strong></summary>

`=` asigna un valor. `==` compara dos valores. En una condición normalmente necesitas comparar.

</details>

<details>
<summary><strong>3. ¿Cuándo tiene sentido usar <code>break</code>?</strong></summary>

Cuando ya se cumplió el objetivo del bucle y continuar produciría trabajo innecesario o mensajes incorrectos.

</details>

<details>
<summary><strong>4. ¿Qué evidencia demuestra que esta lección sí se entendió?</strong></summary>

El estudiante puede ejecutar el programa, explicar una línea clave, corregir un error real y proponer dónde usaría una condición o un bucle.

</details>

<details>
<summary><strong>5. ¿Qué sería una mejora pequeña y razonable?</strong></summary>

Una mejora razonable cambia un dato, agrega una salida o refina una regla sin introducir temas que todavía no se han explicado.

</details>

## Diagnóstico de condiciones

Lee cada fragmento y decide si compila, si falla o si produce una salida inesperada.

<details>
<summary><strong>6. ¿Qué problema tiene este código?</strong></summary>

```java
int age = 15;

if (age = 15) {
    System.out.println("Edad registrada");
}
```

`=` asigna. En una condición con números se necesita comparar, por ejemplo `age == 15`.

Código corregido:

```java
int age = 15;

if (age == 15) {
    System.out.println("Edad registrada");
}
```

</details>

<details>
<summary><strong>7. ¿Por qué este código imprime un mensaje aunque la condición parece falsa?</strong></summary>

```java
int score = 40;

if (score >= 60);
{
    System.out.println("Aprobado");
}
```

El punto y coma después del `if` termina la instrucción. El bloque siguiente queda separado y se ejecuta siempre.

Código corregido:

```java
int score = 40;

if (score >= 60) {
    System.out.println("Aprobado");
}
```

</details>

<details>
<summary><strong>8. ¿Cuál es el orden correcto para clasificar una nota?</strong></summary>

Opción A:

```java
if (grade >= 11) {
    System.out.println("Aprobado");
} else if (grade >= 18) {
    System.out.println("Excelente");
}
```

Opción B:

```java
if (grade >= 18) {
    System.out.println("Excelente");
} else if (grade >= 11) {
    System.out.println("Aprobado");
}
```

La opción B es mejor. La condición más exigente debe ir primero. Si `grade` vale 19, también cumple `grade >= 11`, por eso la opción A nunca llegaría a "Excelente".

</details>

## Diagnóstico de bucles

<details>
<summary><strong>9. ¿Cuántas veces se imprime el mensaje?</strong></summary>

```java
for (int attempt = 1; attempt <= 4; attempt++) {
    System.out.println("Intento " + attempt);
}
```

Se imprime 4 veces:

```text
Intento 1
Intento 2
Intento 3
Intento 4
```

Cuando `attempt` llega a 5, la condición `attempt <= 4` es falsa.

</details>

<details>
<summary><strong>10. ¿Qué error lógico aparece aquí?</strong></summary>

```java
for (int attempt = 1; attempt <= 5; attempt--) {
    System.out.println(attempt);
}
```

El contador disminuye. Como empieza en 1 y cada vez será menor, la condición `attempt <= 5` seguirá siendo verdadera. El bucle puede no terminar.

La actualización correcta para contar hacia arriba es:

```java
attempt++
```

</details>

<details>
<summary><strong>11. ¿Qué hace <code>break</code> en este caso?</strong></summary>

```java
for (int number = 1; number <= 10; number++) {
    if (number == 4) {
        break;
    }

    System.out.println(number);
}
```

Imprime:

```text
1
2
3
```

Cuando `number` vale 4, se ejecuta `break` y el bucle termina antes de imprimir 4.

</details>

## Completa la lógica

Completa mentalmente los espacios antes de abrir la respuesta.

<details>
<summary><strong>12. Completa una regla de mayoría de edad</strong></summary>

Objetivo:

```text
Si age es mayor o igual a 18, imprimir "Mayor de edad".
Si no, imprimir "Menor de edad".
```

Código:

```java
int age = 16;

if (__________) {
    System.out.println("Mayor de edad");
} else {
    System.out.println("Menor de edad");
}
```

Respuesta:

```java
age >= 18
```

</details>

<details>
<summary><strong>13. Completa un bucle de tres repeticiones</strong></summary>

```java
for (int step = 1; __________; step++) {
    System.out.println("Paso " + step);
}
```

Respuesta:

```java
step <= 3
```

Salida:

```text
Paso 1
Paso 2
Paso 3
```

</details>

<details>
<summary><strong>14. Completa una condición de rango</strong></summary>

Objetivo: aceptar una temperatura entre 2 y 8, incluyendo ambos límites.

```java
int temperature = 5;

if (temperature >= 2 && temperature <= 8) {
    System.out.println("Rango aceptado");
} else {
    System.out.println("Fuera de rango");
}
```

La condición usa `&&` porque ambas reglas deben cumplirse al mismo tiempo.

</details>

## Preguntas de razonamiento

<details>
<summary><strong>15. ¿Por qué no conviene copiar cinco veces el mismo mensaje?</strong></summary>

Porque dificulta cambios futuros. Si el mensaje cambia, habría que editar varias líneas. Un bucle expresa la repetición con una regla.

</details>

<details>
<summary><strong>16. ¿Qué ventaja tiene nombrar el contador <code>attempt</code> o <code>step</code>?</strong></summary>

El nombre explica el propósito del contador. Una letra como `i` puede servir en ejemplos pequeños, pero un nombre claro ayuda a estudiantes que recién leen código.

</details>

<details>
<summary><strong>17. ¿Qué ocurre si el <code>else</code> se elimina?</strong></summary>

El programa solo tendrá acción para el caso verdadero. Eso puede estar bien si no se necesita mensaje alternativo, pero en ejercicios de decisión suele ser útil mostrar ambos caminos.

</details>

<details>
<summary><strong>18. ¿Por qué esta lección prepara programas más completos?</strong></summary>

Porque un programa útil no solo imprime texto fijo. Necesita evaluar reglas, repetir acciones y detenerse cuando una condición se cumple.

</details>

## Lectura de consola

Observa la salida:

```text
Paso 1
Paso 2
Paso 3
Fin
```

<details>
<summary><strong>19. ¿Qué estructura pudo producir esa salida?</strong></summary>

Una posibilidad es:

```java
for (int step = 1; step <= 3; step++) {
    System.out.println("Paso " + step);
}

System.out.println("Fin");
```

La palabra `Fin` aparece fuera del bucle porque solo se imprime una vez.

</details>

## Mini rúbrica

| Criterio | Logrado | En proceso | Pendiente |
|---|---|---|---|
| Distingue `=` de `==`. |  |  |  |
| Explica qué hace `if`. |  |  |  |
| Explica qué hace `else`. |  |  |  |
| Traza un bucle `for`. |  |  |  |
| Identifica un bucle sin salida. |  |  |  |
| Usa `break` con propósito. |  |  |  |

## Autoevaluación

- [ ] Puedo explicar el concepto principal sin leer la definición.
- [ ] Puedo ubicar el error más común de la lección.
- [ ] Puedo ejecutar el laboratorio en Replit.
- [ ] Puedo decir cómo esta lección ayuda a construir programas con reglas.

---

<div align="center">

**Volver al [plan de curso](../../../course-plan.md)**

</div>




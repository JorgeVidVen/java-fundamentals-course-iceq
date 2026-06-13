---
layout: lesson
---

<p align="center">
  <img src="../../../assets/lesson-01-banner.png" alt="Primer programa en Java" width="100%">
</p>

<div align="center">

# Lección 01: Laboratorio en Replit

### Personalizar, ejecutar y corregir el primer programa Java

[![Nivel](https://img.shields.io/badge/Nivel-Principiante-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-15_a_20_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Práctica-blue?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** Replit pendiente.  
> **Archivo base:** `starter-files/lesson-01-hello-world/Main.java`.  
> **Solución de referencia:** `completed-examples/lesson-01-hello-world/`.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

---

## Propósito del laboratorio

Este laboratorio no busca que el estudiante copie un programa terminado. Busca que practique el ciclo básico de programación:

```text
abrir -> ejecutar -> observar -> modificar -> ejecutar -> corregir
```

La actividad debe sentirse pequeña, pero completa. Un estudiante debe terminar con una presentación en consola hecha por él o ella, no con una línea genérica que no entiende.

Al finalizar, el estudiante tendrá:

- un programa Java que compila;
- varias líneas impresas en consola;
- una modificación personalizada;
- al menos un error provocado y corregido;
- una explicación breve de qué hace `System.out.println`.

---

## Pruébalo aquí mismo 🚀

No necesitas salir de esta página. El editor de abajo ya tiene el código starter. Modifícalo, presiona **Run** y ve el resultado en la consola.

<div data-pym-src="https://www.jdoodle.com/plugin" data-language="java" data-version-index="4">
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}
</div>

> **Consejo:** cambia el texto dentro de las comillas y presiona Run otra vez. También puedes usar Replit si prefieres un entorno más completo (ver más abajo).

---

## Preparación del entorno

### abrir Replit

Abre el enlace Replit de la lección 01 cuando esté disponible en el plan de curso.

Si todavía no existe el Repl, el equipo puede crearlo así:

1. Entrar a Replit.
2. Crear un proyecto Java.
3. Nombrarlo `java-iceq-01-hello-world`.
4. Copiar el archivo `Main.java` desde esta carpeta.
5. Presionar **Run**.
6. Confirmar que aparece texto en consola.

### ubicar zonas principales

Antes de tocar código, identifica estas zonas:

```text
Replit
 |
 |-- Files / Archivos
 |     |
 |     |-- Main.java
 |
 |-- Editor
 |     |
 |     |-- aquí escribes Java
 |
 |-- Console / Terminal
       |
       |-- aquí ves la salida
```

### confirmar el archivo correcto

El archivo para esta práctica debe llamarse:

```text
Main.java
```

Si abres otro archivo o si el nombre cambia, Java podría mostrar errores que no pertenecen al tema de la lección.

---

## Ejecutar antes de modificar

El archivo inicial debe verse parecido a esto:

```java
// Lesson 01: Hello World
// Task: Modify the message inside the quotation marks.

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}
```

Presiona **Run** sin cambiar nada.

### Qué debes observar

En la consola debe aparecer:

```text
Hello, World
```

Si aparece eso, el entorno funciona. Este paso importa porque separa dos tipos de problemas:

- problemas del entorno;
- problemas causados por cambios en el código.

> **Consejo:** si algo falla antes de modificar, no intentes resolverlo cambiando muchas líneas. Primero verifica que el archivo esté completo y que Replit esté usando Java.

---

## Primera modificación segura

Cambia solo el texto dentro de las comillas:

```java
System.out.println("Iniciando mi primera práctica de Java.");
```

No cambies todavía:

```java
public class Main
```

No cambies:

```java
public static void main(String[] args)
```

No cambies:

```java
System.out.println
```

Presiona **Run** otra vez.

### Resultado esperado

```text
Iniciando mi primera práctica de Java.
```

### Pregunta rápida

¿Qué cambió?

- Cambió el texto que se imprime.
- No cambió la estructura del programa.
- No cambió el método de entrada.
- No cambió la instrucción que imprime.

---

## Agregar una segunda línea

Ahora agrega otra instrucción debajo de la primera:

```java
System.out.println("Estoy usando Replit desde el navegador.");
```

El programa debería quedar así:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Iniciando mi primera práctica de Java.");
        System.out.println("Estoy usando Replit desde el navegador.");
    }
}
```

Ejecuta.

### Resultado esperado

```text
Iniciando mi primera práctica de Java.
Estoy usando Replit desde el navegador.
```

### Observación

Cada `System.out.println` imprime una línea nueva. Por eso el resultado aparece en dos líneas separadas.

---

## Crear una tarjeta de presentación

Construye una salida de al menos cinco líneas.

Ejemplo:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("MI PRESENTACIÓN EN JAVA");
        System.out.println("Nombre: Valeria");
        System.out.println("Edad: 15");
        System.out.println("Objetivo: aprender a programar");
        System.out.println("Estado: primera práctica completada");
    }
}
```

Puedes cambiar:

- nombre;
- edad;
- objetivo;
- mensaje final;
- frase de cierre.

No agregues todavía variables. Eso será parte de la Lección 02.

---

## Revisión de formato visual

La consola puede verse más ordenada si usas separadores.

Ejemplo con guiones:

```java
System.out.println("--------------------------------");
System.out.println("Primer programa Java");
System.out.println("--------------------------------");
```

Ejemplo con signos iguales:

```java
System.out.println("Replit + Java");
```

Ejemplo con espacios:

```java
System.out.println("");
System.out.println("Bloque principal");
System.out.println("");
```

### Cuándo usar separadores

Úsalos cuando:

- quieras distinguir título y contenido;
- la salida tenga varias líneas;
- prepares una demostración para otra persona;
- quieras que otra persona lea la consola sin explicación adicional.

### Cuándo no abusar

No pongas veinte separadores si solo hay una línea. La salida debe verse limpia, no saturada.

---

## Experimento controlado: quitar el punto y coma

Ahora haremos algo importante: romper el código a propósito.

Elige una línea:

```java
System.out.println("Nombre: Valeria");
```

Quita el punto y coma:

```java
System.out.println("Nombre: Valeria")
```

Presiona **Run**.

### Qué debería pasar

Replit debe mostrar un error parecido a:

```text
error: ';' expected
```

### Qué significa

Java llegó al final de una instrucción y esperaba `;`.

### Cómo corregir

Vuelve a escribir:

```java
System.out.println("Nombre: Valeria");
```

Ejecuta otra vez.

### Aprendizaje

El error no era "todo el programa está mal". El error era un símbolo faltante.

---

## Experimento controlado: cerrar mal las comillas

Código correcto:

```java
System.out.println("Estoy aprendiendo Java");
```

Código incorrecto:

```java
System.out.println("Estoy aprendiendo Java);
```

Presiona **Run**.

### Mensaje probable

```text
error: unclosed string literal
```

### Traducción

Java encontró el inicio de un texto, pero no encontró el cierre.

### Corrección

```java
System.out.println("Estoy aprendiendo Java");
```

### Nota para el estudiante

Las comillas dobles no son decoración. Marcan dónde empieza y termina un texto.

---

## Experimento controlado: cambiar mayúsculas

Código correcto:

```java
System.out.println("Hola");
```

Código incorrecto:

```java
system.out.println("Hola");
```

o:

```java
System.out.Println("Hola");
```

### Qué ocurre

Java distingue mayúsculas y minúsculas. `System` y `system` no son lo mismo. `println` y `Println` tampoco.

### Regla práctica

Copia esta instrucción exactamente:

```java
System.out.println("texto");
```

Luego cambia solo el texto.

---

## Mini reto 1: salida biográfica

Crea una salida como esta, pero con tus propios datos:

```text
MI PERFIL
Nombre: Diego
Grado: 4to de secundaria
Me interesa: tecnología
Meta del curso: crear mi primer programa
```

Código sugerido:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("MI PERFIL");
        System.out.println("Nombre: Diego");
        System.out.println("Grado: 4to de secundaria");
        System.out.println("Me interesa: tecnología");
        System.out.println("Meta del curso: crear mi primer programa");
    }
}
```

### Revisión

- ¿Hay al menos cinco líneas?
- ¿Todas terminan con punto y coma?
- ¿Los textos tienen comillas dobles?
- ¿El programa mantiene la clase `Main`?

---

## Mini reto 2: dibujo con texto

Los programas de consola también pueden dibujar figuras simples con caracteres.

Ejemplo:

```text
   *
  ***
 *****
*******
  |||
```

Código:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("   *");
        System.out.println("  ***");
        System.out.println(" *****");
        System.out.println("*******");
        System.out.println("  |||");
    }
}
```

### Qué se practica

- Cada línea de consola corresponde a una instrucción.
- Los espacios dentro de comillas sí se imprimen.
- La consola respeta el orden de las instrucciones.

---

## Mini reto 3: mensaje de bienvenida

Crea una salida de consola con varias líneas. La idea es practicar mensajes ordenados, no construir todavía una aplicación completa.

Salida esperada:

```text
Curso de Java
Primer programa en Replit
Objetivo: entender la consola
Paso actual: modificar texto entre comillas
Fin de la prueba
```

Código base:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Curso de Java");
        System.out.println("Primer programa en Replit");
        System.out.println("Objetivo: entender la consola");
        System.out.println("Paso actual: modificar texto entre comillas");
        System.out.println("Fin de la prueba");
    }
}
```

### Por qué este reto importa

Este reto confirma que cada instrucción produce una línea visible. Más adelante ese texto podrá combinarse con variables, condiciones, métodos y objetos.

---

## Troubleshooting

| Error literal | Causa probable | Acción sugerida |
|---|---|---|
| `error: ';' expected` | Falta punto y coma. | Revisa la línea anterior al error. |
| `error: unclosed string literal` | Falta cerrar comillas. | Cuenta comillas dobles en la línea. |
| `error: cannot find symbol` | Una palabra está mal escrita. | Revisa mayúsculas y minúsculas. |
| `Error: Main method not found in class Main` | Falta el método `main`. | Verifica la firma completa. |
| `class Main is public, should be declared in a file named Main.java` | Nombre de clase y archivo no coinciden. | Mantén archivo `Main.java`. |
| La consola no cambia | No se ejecutó el código actualizado. | Presiona **Run** otra vez. |
| La salida aparece en una línea inesperada | Falta o sobra un `println`. | Revisa el orden de instrucciones. |
| Replit parece congelado | Problema temporal del navegador o conexión. | Recarga, espera o usa el editor de respaldo. |

---

## Bitácora del estudiante

Completa esta bitácora después de practicar.

```text
Fecha:
Nombre:
Lección:

1. ¿Qué logré ejecutar?

2. ¿Qué cambié en el código?

3. ¿Qué error provoqué?

4. ¿Cómo lo corregí?

5. ¿Qué parte todavía me parece confusa?
```

La bitácora ayuda a preparar preguntas para resolver dudas con el equipo o con quien acompañe la práctica.

---

## Revisión antes de compartir el laboratorio

Antes de compartir tu práctica, verificar:

- [ ] El Repl abre desde una ventana privada.
- [ ] El archivo se llama `Main.java`.
- [ ] El botón **Run** funciona.
- [ ] La consola se lee con claridad.
- [ ] Puedes mostrar al menos un error real que corregiste.
- [ ] Puedes corregir sin borrar todo el programa.
- [ ] No dependes de instalación local.
- [ ] El enlace Replit queda en `course-plan.md`.

---

## Entrega de la práctica

Para considerar terminada la práctica, el estudiante debe tener un programa que:

- compile sin errores;
- imprima una presentación personalizada;
- use al menos cinco instrucciones `System.out.println`;
- tenga separadores visuales en consola;
- conserve la estructura `public class Main`;
- haya sido ejecutado en Replit;
- pueda explicarse en menos de un minuto.

---

## Código final sugerido

Este no es el único resultado válido. Es una referencia.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("MI PRIMER PROGRAMA EN JAVA");
        System.out.println("Nombre: Valeria");
        System.out.println("Curso: Java Fundamentals");
        System.out.println("Editor: Replit");
        System.out.println("Meta: entender cómo empieza un programa");
    }
}
```

### Lectura del resultado

Si la consola muestra todas las líneas en orden, el programa cumple el objetivo de la lección.

---

## Preguntas de cierre

1. ¿Qué línea cambiaste con más seguridad?
2. ¿Qué símbolo te parece más fácil de olvidar?
3. ¿Qué error apareció cuando quitaste el punto y coma?
4. ¿Qué parte del programa inicia la ejecución?
5. ¿Qué diferencia hay entre editor y consola?
6. ¿Por qué no se instalará Java localmente en este curso?
7. ¿Qué texto usarías como pantalla de inicio del proyecto final?
8. ¿Cómo explicarías `println` a un compañero?

---

## Siguiente paso

En la Lección 02, los textos dejarán de estar fijos. Aprenderás a guardar datos como nombre, edad, puntaje e intentos usando variables.

El programa pasará de esto:

```java
System.out.println("Nombre: Valeria");
```

a esto:

```java
String name = "Valeria";
System.out.println("Nombre: " + name);
```

Ese cambio parece pequeño, pero abre la puerta a programas más flexibles.

---

---

<div align="center">

**Siguiente:** [Quiz de comprensión](part-03-quiz.md)

</div>










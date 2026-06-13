---
layout: lesson
title: "Leccion 01: Primer programa en Java - Teoria"
description: Minimal Java program structure, main method and console output.
---

<p align="center">
  <img src="../../../assets/lesson-01-banner.png" alt="Primer programa en Java" width="100%">
</p>

<div align="center">

# Lección 01: Primer programa en Java

### Qué ocurre cuando presionas Run en Replit

[![Nivel](https://img.shields.io/badge/Nivel-Principiante-brightgreen?style=flat-square)](#)
[![Duración](https://img.shields.io/badge/Duración-7_min-blue?style=flat-square)](#)
[![Módulo](https://img.shields.io/badge/Módulo-Teoría-orange?style=flat-square)](#)
[![Editor](https://img.shields.io/badge/Editor_principal-Replit-blueviolet?style=flat-square)](#)
[![Sin_instalación](https://img.shields.io/badge/Sin_instalación-Navegador-lightgrey?style=flat-square)](#)

</div>

> **Laboratorio principal:** [Crear laboratorio online](/docs/online-editor-links/).
> **Editor de respaldo:** OnlineGDB, solo si Replit no carga durante la sesión.

---

<p align="center">
  <img src="../../../assets/separator.png" alt="Separador visual del curso" width="100%">
</p>

## Antes de escribir código

Esta primera lección debe resolver una ansiedad común: muchas personas creen que programar empieza memorizando palabras extrañas. En realidad, programar empieza entendiendo una relación simple:

> Una persona escribe instrucciones.
> La computadora las revisa.
> Si las instrucciones tienen forma válida, las ejecuta.
> Si algo no encaja, muestra un error.

Java es estricto, pero esa exigencia no es un obstáculo. Es una forma de recibir retroalimentación clara. El compilador no se burla del estudiante; señala una regla que todavía no se cumplió.

En esta lección no buscamos que el estudiante entienda todo lo que aparece en `public static void main(String[] args)`. Eso llegará después. Buscamos que pueda abrir Replit, reconocer el archivo principal, ejecutar un programa mínimo y modificar una salida en consola sin destruir la estructura.

### Resultado esperado

Al terminar esta parte, el estudiante debe poder:

- abrir un proyecto Java en Replit;
- identificar el archivo `Main.java`;
- reconocer la clase `Main`;
- ubicar el método `main`;
- explicar qué hace `System.out.println`;
- ejecutar el programa con **Run**;
- leer al menos un error común sin entrar en pánico.

### Lo que todavía no se espera

No se espera que el estudiante pueda explicar:

- qué significa internamente `static`;
- cómo funciona la JVM;
- qué es bytecode;
- cómo se instala un JDK;
- qué son paquetes, imports o clases avanzadas;
- cómo se diseña una aplicación completa.

Mantener esos límites hace que el curso sea más realista. Un buen curso introductorio no intenta mostrar todo en la primera sesión; construye confianza técnica paso a paso.

---

## Replit como aula de programación

Replit será el entorno principal del curso porque cumple el requisito central del enunciado: el estudiante solo necesita un navegador. No se instalará Java localmente y no se pedirá configurar IntelliJ, Eclipse o Visual Studio Code.

Cuando un estudiante abre Replit para Java, normalmente verá tres zonas:

```text
+---------------------------------------------------------------+
| Panel de archivos       | Editor de código                    |
|                         |                                     |
| Main.java               | public class Main {                 |
|                         |     public static void main(...) {  |
|                         |         ...                         |
|                         |     }                               |
|                         | }                                   |
+-------------------------+-------------------------------------+
| Consola / Terminal                                            |
| Aquí aparece el resultado cuando presionas Run                 |
+---------------------------------------------------------------+
```

### Zona 1: panel de archivos

El panel de archivos muestra qué documentos forman parte del proyecto. Para esta lección nos interesa `Main.java`.

El nombre importa. En Java, si una clase pública se llama `Main`, el archivo debe llamarse `Main.java`. Este detalle parece pequeño, pero aparece en errores reales de compilación.

### Zona 2: editor

El editor es el espacio donde se escribe código. Es parecido a un documento de texto, pero con reglas más estrictas:

- las mayúsculas importan;
- las comillas importan;
- los paréntesis importan;
- las llaves importan;
- el punto y coma importa.

No es porque Java quiera ser difícil. Es porque la computadora necesita instrucciones sin ambigüedad.

### Zona 3: consola

La consola muestra el resultado del programa. En esta lección solo usaremos salida de texto, así que todo lo visible ocurrirá ahí.

> **Consejo de lectura:** aumenta el tamaño de fuente de Replit si el código se ve pequeño. El objetivo es leer cada símbolo sin forzar la vista.

---

## Imagen mental de la lección

Piensa en un escenario escolar.

- La **clase** es el salón donde ocurre la presentación.
- El **método `main`** es la señal de inicio.
- La **instrucción** es lo que se dice en voz alta.
- La **consola** es la pantalla donde el público ve el mensaje.
- El botón **Run** es la orden para comenzar.

```text
Run
 |
 v
Java busca el método main
 |
 v
Ejecuta la instrucción println
 |
 v
La consola muestra el mensaje
```

Esta imagen no explica todo Java, pero sí ayuda a ubicar la primera idea: el programa tiene una entrada, una instrucción y una salida.

---

## ¿Qué es programar?

Programar es escribir instrucciones precisas para que una computadora haga algo. La palabra clave es **precisas**.

Una persona puede entender una frase incompleta por contexto:

> "Pon eso allá."

La computadora no entiende "eso" ni "allá". Necesita nombres, orden, símbolos y límites claros.

En Java, una instrucción debe estar dentro de una estructura. Por eso el primer programa no es solo:

```java
System.out.println("Hola");
```

Esa línea expresa una intención, pero todavía no tiene un lugar válido para vivir. Java necesita una clase y un método de entrada.

---

## ¿Por qué Java para un curso inicial?

Java no es el lenguaje más corto para escribir el primer programa. Python, por ejemplo, permite imprimir texto con una línea. Pero Java tiene una ventaja educativa: obliga a ver estructura desde el inicio.

Eso es útil para este trabajo porque el curso debe introducir fundamentos de Programación Orientada a Objetos. Java permite pasar de un programa mínimo a clases, objetos, métodos y encapsulación sin cambiar de lenguaje.

### Java se usa en contextos reales

Java se utiliza en:

- aplicaciones empresariales;
- servicios web;
- aplicaciones Android;
- sistemas bancarios;
- herramientas educativas;
- videojuegos y proyectos de escritorio;
- plataformas de gran escala.

No necesitamos mostrar esos sistemas ahora. Basta con que el estudiante entienda que lo que aprende no es un truco de aula, sino una base técnica usada en el mundo real.

### Java es estricto

Java exige declarar estructura. Eso ayuda a formar hábitos:

- nombrar bien;
- cerrar bloques;
- separar responsabilidades;
- leer errores;
- pensar antes de ejecutar.

### Java prepara POO

Desde el primer archivo aparece una clase:

```java
public class Main {
}
```

Todavía no diseñamos objetos, pero ya estamos dentro del mundo donde las clases importan.

---

## El primer programa completo

Este es el programa mínimo de la lección:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Java desde Replit");
    }
}
```

No lo copies como una frase mágica. Léelo por capas.

### Capa 1: la clase

```java
public class Main {
    // aquí vive el contenido de la clase
}
```

`public class Main` declara una clase llamada `Main`.

Por ahora, una clase será nuestro contenedor principal. Más adelante una clase podrá representar conceptos más específicos, como una calculadora, un registro de estudiante o una parte de una aplicación.

### Capa 2: el método de entrada

```java
public static void main(String[] args) {
    // aquí empieza el programa
}
```

El método `main` es el punto de entrada. Cuando presionas **Run**, Java busca este método para iniciar la ejecución.

No hace falta memorizar todas las palabras por separado hoy. Sí hace falta respetar la línea completa.

### Capa 3: la instrucción visible

```java
System.out.println("Hola Java desde Replit");
```

Esta instrucción imprime texto en la consola.

Descomposición:

- `System`: acceso al sistema.
- `out`: salida estándar.
- `println`: imprimir una línea.
- `"Hola Java desde Replit"`: texto que se mostrará.
- `;`: fin de la instrucción.

### Capa 4: las llaves

Las llaves `{` y `}` marcan bloques.

```text
class Main
  {
    main
      {
        println
      }
  }
```

Si falta una llave, Java no sabe dónde termina una parte del programa.

---

## Lectura línea por línea

### Línea 1

```java
public class Main {
```

Esta línea dice: "declaro una clase pública llamada Main".

Para el estudiante:

- no cambies `Main` en esta lección;
- no borres la llave `{`;
- recuerda que el archivo debe llamarse `Main.java`.

### Línea 2

```java
    public static void main(String[] args) {
```

Esta línea abre el método donde comienza el programa.

Para el estudiante:

- escríbela exactamente;
- respeta paréntesis;
- respeta corchetes;
- respeta la llave final.

### Línea 3

```java
        System.out.println("Hola Java desde Replit");
```

Esta línea produce el resultado visible.

Para el estudiante:

- puedes cambiar el texto dentro de comillas;
- no cambies `System.out.println` todavía;
- no olvides el punto y coma.

### Línea 4

```java
    }
```

Cierra el método `main`.

### Línea 5

```java
}
```

Cierra la clase `Main`.

---

## Qué se puede modificar sin romper la estructura

En la primera práctica, el estudiante debe distinguir entre partes seguras y partes delicadas.

### Seguro para modificar

```java
"Hola Java desde Replit"
```

Puedes cambiarlo por:

```java
"Mi primer programa"
```

o:

```java
"Estoy aprendiendo Java"
```

### Todavía no modificar

```java
public class Main
```

```java
public static void main(String[] args)
```

```java
System.out.println
```

No porque sean imposibles de cambiar, sino porque todavía cumplen reglas que el curso no ha explicado por completo.

---

## Errores intencionales

Un curso real no oculta los errores. Los usa como material de aprendizaje. Esta lección debe mostrar errores pequeños y corregibles.

### Error 1: instrucción fuera del método

Código incorrecto:

```java
System.out.println("Hola Java");

public class Main {
}
```

Problema:

> La instrucción está fuera de un método. Java no ejecuta instrucciones sueltas.

Versión correcta:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hola Java");
    }
}
```

### Error 2: falta punto y coma

Código incorrecto:

```java
System.out.println("Hola Java")
```

Mensaje probable:

```text
error: ';' expected
```

Traducción:

> Java esperaba el símbolo que marca el final de la instrucción.

Versión correcta:

```java
System.out.println("Hola Java");
```

### Error 3: mayúsculas incorrectas

Código incorrecto:

```java
system.out.println("Hola Java");
```

Mensaje probable:

```text
error: package system does not exist
```

o:

```text
error: cannot find symbol
```

Traducción:

> Java distingue mayúsculas y minúsculas. `System` no es lo mismo que `system`.

Versión correcta:

```java
System.out.println("Hola Java");
```

### Error 4: comillas sin cerrar

Código incorrecto:

```java
System.out.println("Hola Java);
```

Mensaje probable:

```text
error: unclosed string literal
```

Traducción:

> El texto empezó con comillas, pero nunca se cerró.

Versión correcta:

```java
System.out.println("Hola Java");
```

---

## Mini glosario de la lección

| Término | Definición para esta lección | Ejemplo |
|---|---|---|
| Programa | Conjunto de instrucciones ejecutables. | El archivo `Main.java`. |
| Clase | Contenedor principal de código Java. | `public class Main`. |
| Método | Bloque con instrucciones ejecutables. | `main`. |
| Consola | Zona donde aparece el resultado. | Salida de `println`. |
| Instrucción | Orden individual dentro del programa. | `System.out.println(...)`. |
| String | Texto entre comillas dobles. | `"Hola"`. |
| Compilar | Revisar y traducir el código antes de ejecutar. | Replit lo hace al presionar Run. |
| Ejecutar | Hacer que el programa corra. | Presionar Run. |

---

## Mapa de responsabilidades

```text
Main.java
 |
 |-- public class Main
 |     |
 |     |-- public static void main(String[] args)
 |            |
 |            |-- System.out.println("Hola Java desde Replit");
 |
 |-- consola muestra: Hola Java desde Replit
```

Este mapa ayuda a explicar que no todo está al mismo nivel. La instrucción vive dentro del método, y el método vive dentro de la clase.

---

## Apoyo visual

En esta lección conviene reconocer tres zonas del entorno:

```text
[1] Archivos        [2] Editor
Main.java           public class Main {
                        ...
                    }

[3] Consola
Hola Java desde Replit
```

---

## Referencias externas opcionales

Para ampliar o verificar conceptos, se puede revisar documentación oficial:

- Dev.java: introducción moderna a Java.
- Oracle Java Tutorials: primer programa y método `main`.
- Replit Docs: uso del entorno desde navegador.

No se debe depender de un recurso externo para completar la lección. El material del repositorio debe sostener la explicación por sí mismo.

---

## Preguntas de lectura antes del laboratorio

Responde sin ejecutar todavía:

1. ¿Qué archivo abre Replit para esta lección?
2. ¿Qué línea imprime texto?
3. ¿Qué parte indica dónde empieza el programa?
4. ¿Qué símbolo termina la instrucción?
5. ¿Qué ocurriría si cambias `System` por `system`?
6. ¿Qué ocurriría si borras una llave?
7. ¿Qué parte puedes personalizar con tu nombre?
8. ¿Por qué el texto va entre comillas?
9. ¿Qué zona de Replit muestra el resultado?
10. ¿Qué diferencia hay entre escribir código y ejecutarlo?

---

## Lectura comparada: texto normal vs código

Texto normal:

```text
Muéstrame un saludo.
```

Código Java:

```java
System.out.println("Hola");
```

El texto normal expresa una intención. El código expresa una instrucción exacta.

Texto normal:

```text
Empieza el programa aquí.
```

Código Java:

```java
public static void main(String[] args) {
}
```

La computadora no adivina el inicio. Java busca una firma específica.

---

## Buenas prácticas desde la primera lección

Aunque el programa sea pequeño, se pueden formar buenos hábitos.

### Escribir con intención

Evita mensajes vacíos como:

```java
System.out.println("asdf");
```

Prefiere mensajes que expliquen algo:

```java
System.out.println("Inicio de la práctica de Java");
```

### Ejecutar después de cambios pequeños

No escribas veinte líneas antes de ejecutar. Cambia una línea, presiona **Run**, observa la consola y continúa.

### Leer errores completos

No basta con ver que hay letras rojas. Lee:

- el tipo de error;
- la línea mencionada;
- el símbolo esperado;
- el archivo afectado.

### No borrar todo

Cuando aparece un error, no borres el programa completo. Aísla el cambio más reciente.

---

## Por qué empezar con texto

Un primer programa de Java debe ser pequeño. Antes de pedir datos, tomar decisiones o crear objetos, conviene confirmar que el entorno ejecuta código y que la consola muestra resultados.

```java
System.out.println("Hello, World");
System.out.println("Bienvenido al curso de Java");
System.out.println("Este programa se ejecuta en la consola");
System.out.println("Fin de la primera prueba");
```

Los mensajes de consola serán la primera forma de comunicarse con el usuario.

Por eso esta lección no es decorativa. Enseña la primera interacción visible entre programa y estudiante.

---

## Resumen técnico

Un programa Java mínimo necesita:

```java
public class Main {
    public static void main(String[] args) {
        // instrucciones
    }
}
```

Para imprimir texto:

```java
System.out.println("texto");
```

Para ejecutar:

```text
Presiona Run en Replit.
```

Para revisar:

```text
Mira la consola.
```

---

## Checklist antes de pasar a la práctica

- [ ] Sé abrir el proyecto en Replit.
- [ ] Sé ubicar `Main.java`.
- [ ] Sé reconocer `public class Main`.
- [ ] Sé reconocer el método `main`.
- [ ] Sé cambiar texto dentro de comillas.
- [ ] Sé ejecutar con **Run**.
- [ ] Sé mirar la consola.
- [ ] Sé explicar por qué el punto y coma importa.
- [ ] Sé corregir una comilla faltante.
- [ ] Sé decir qué parte no debo modificar todavía.

---

## Cierre de teoría

Esta lección parece pequeña porque imprime una frase. Técnicamente, sin embargo, ya presentó el ciclo completo de programación:

```text
escribir -> ejecutar -> observar -> corregir -> volver a ejecutar
```

Ese ciclo se repetirá en todas las lecciones. La diferencia es que cada vez habrá más elementos: variables, condiciones, bucles, métodos, objetos y reglas protegidas.

El objetivo inmediato es simple: que el estudiante llegue al laboratorio sabiendo qué puede cambiar, qué debe cuidar y cómo interpretar la primera respuesta de Replit.

---

<div align="center">

**Siguiente:** [Laboratorio en Replit](part-02-practice/)

</div>







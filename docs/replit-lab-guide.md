---
layout: default
title: "Guia de entorno Replit"
description: Instructions to prepare and run Java labs in Replit.
---

# Guía de entorno Replit

Replit es el editor principal del curso porque permite escribir y ejecutar Java desde el navegador. No se necesita instalar Java, JDK, IntelliJ, Eclipse ni extensiones locales.

## Qué se necesita

| Recurso | Uso |
|---|---|
| Navegador moderno | Abrir Replit y ejecutar los laboratorios. |
| Cuenta de Replit | Guardar avances y compartir enlaces. |
| Archivos de `starter-files` | Código inicial de cada lección. |
| Archivos de `completed-examples` | Soluciones completas para comparar después del intento propio. |
| JDoodle u OnlineGDB | Respaldo si Replit no carga. |

## Crear un Repl

1. Abrir Replit en el navegador.
2. Crear un proyecto nuevo con plantilla Java.
3. Usar un nombre claro para la lección.
4. Confirmar que exista un archivo `Main.java`.
5. Presionar **Run** una vez antes de modificar código.

Nombres sugeridos:

| Lección | Nombre sugerido |
|---|---|
| 01 | `java-iceq-01-hello-world` |
| 02 | `java-iceq-02-variables` |
| 03 | `java-iceq-03-if-loops` |
| 04 | `java-iceq-04-methods` |
| 05 | `java-iceq-05-classes-objects` |
| 06 | `java-iceq-06-final-project` |

## Copiar archivos starter

Cada práctica empieza con una carpeta dentro de `starter-files`.

```text
starter-files/
  lesson-01-hello-world/
    Main.java
```

Para una lección con varios archivos, todos los `.java` de esa carpeta pertenecen al mismo Repl.

```text
starter-files/
  lesson-05-classes-objects/
    Main.java
    Player.java
    TreasureRoom.java
```

Las soluciones completas de `completed-examples` se revisan después de intentar la práctica. No son el punto de partida.

## Regla de `Main.java`

En Java, un archivo con una clase pública debe tener el mismo nombre que esa clase.

Correcto:

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World");
    }
}
```

Archivo esperado:

```text
Main.java
```

Error frecuente:

```text
class Program is public, should be declared in a file named Program.java
```

Ese error aparece cuando el archivo y la clase pública no coinciden.

## Cómo trabajar durante un laboratorio

```text
Leer -> Ejecutar -> Cambiar poco -> Ejecutar -> Corregir -> Explicar
```

| Paso | Acción |
|---|---|
| Leer | Revisar el objetivo del archivo y los comentarios del starter. |
| Ejecutar | Presionar **Run** antes de editar. |
| Cambiar poco | Resolver una parte pequeña del ejercicio. |
| Ejecutar | Verificar si el cambio funcionó. |
| Corregir | Leer el error literal si aparece. |
| Explicar | Escribir una frase sobre el cambio realizado. |

## Consola de Replit

La consola muestra la salida del programa.

```java
System.out.println("Hello, World");
```

Resultado:

```text
Hello, World
```

Cuando el programa usa `Scanner`, la consola también recibe datos. Si el programa parece detenido, puede estar esperando que se escriba una respuesta y se presione **Enter**.

## Errores iniciales comunes

| Error literal o síntoma | Causa probable | Solución |
|---|---|---|
| `class Main is public, should be declared in a file named Main.java` | El archivo no se llama `Main.java`. | Renombrar el archivo o ajustar el nombre de clase. |
| `cannot find symbol` | Nombre de variable, método o clase escrito de forma distinta. | Revisar mayúsculas, minúsculas y ortografía. |
| `';' expected` | Falta punto y coma al final de una instrucción. | Revisar la línea indicada y la anterior. |
| `reached end of file while parsing` | Falta una llave de cierre `}`. | Contar llaves de clase, método, `if` o `for`. |
| La consola no muestra nada | El programa no imprime o espera entrada. | Revisar `System.out.println` o la lectura con `Scanner`. |


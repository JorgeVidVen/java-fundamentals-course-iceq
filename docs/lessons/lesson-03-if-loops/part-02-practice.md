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

La práctica introduce reglas, intentos y repetición controlada mediante un ejemplo pequeño.

**Reto central:** Simular intentos de un número secreto.

### Preparación

1. Abre el enlace de Replit de esta lección.
2. Verifica que el archivo principal sea `Main.java` o el archivo indicado en la práctica.
3. Presiona **Run** una vez antes de editar.
4. Lee la consola. Si aparece un error, úsalo como pista.

> **Respaldo:** si Replit no está disponible, usa OnlineGDB copiando los archivos Java de esta carpeta. La entrega oficial debe mantener Replit como enlace principal.

## Pruébalo aquí mismo 🚀

El editor de abajo ya tiene el código base con el número secreto. Modifica el bucle y las condiciones, presiona **Run** y prueba.

<div data-pym-src="https://www.jdoodle.com/plugin" data-language="java" data-version-index="4">
public class Main {
    public static void main(String[] args) {
        int secretNumber = 7;
        int guess = 7;
        for (int i = 1; i <= 5; i++) {
            if (guess == secretNumber) {
                System.out.println("¡Acertaste!");
                break;
            } else {
                System.out.println("Intento " + i + " incorrecto");
            }
        }
    }
}
</div>

> **Experimenta:** cambia `guess` a otro número, usa `>` y `<` para pistas de "mayor" y "menor".

## Trabajo paso a paso

1. Abre el Repl de la lección 03.
2. Crea un bucle `for` con cinco intentos.
3. Dentro del bucle, compara `guess` con `secretNumber`.
4. Muestra mensajes diferentes para acierto y error.
5. Usa `break` cuando el número sea correcto.

## Reto de extensión

Cambia guess para probar el camino de error. Luego cambia secretNumber y explica por qué el resultado cambia.

## Errores frecuentes y solución

| Error literal | Qué significa | Cómo corregirlo |
|---|---|---|
| `error: incompatible types: int cannot be converted to boolean` | Se usó `=` donde Java esperaba una comparación. | Usa `==`, `>=`, `<=`, `>` o `<`. |
| `error: ')' expected` | Falta cerrar la condición. | Revisa `if (condición)` y `for (...)`. |
| `error: reached end of file while parsing` | Falta una llave de cierre. | Cuenta las llaves de `class`, `main`, `for` e `if`. |
| `Runtime Exceed` | El bucle no termina. | Verifica que el contador avance y la condición pueda volverse falsa. |

## Evidencia de práctica

La práctica queda lista cuando puedes mostrar:

- Una captura o ejecución visible en Replit.
- El código starter modificado con intención clara.
- Una explicación breve del error más importante que corregiste.
- Una frase que explique dónde usarías condiciones y bucles en otro programa.

## Pregunta de cierre

Si otra persona abre tu Repl, ¿podría entender qué cambiaste y por qué? Ajusta nombres, mensajes o comentarios si la respuesta es no.

## Construcción por versiones

En esta práctica no conviene escribir todo el programa de una sola vez. La forma más segura es trabajar por versiones pequeñas. Cada versión debe poder ejecutarse antes de avanzar.

| Versión | Objetivo | Señal de que funciona |
|---|---|---|
| 1 | Imprimir intentos del 1 al 5. | La consola muestra cinco líneas ordenadas. |
| 2 | Agregar número secreto y un intento fijo. | El programa puede comparar dos números. |
| 3 | Usar `if` y `else`. | Muestra mensajes diferentes para acierto y error. |
| 4 | Agregar `break`. | El bucle se detiene cuando hay acierto. |
| 5 | Leer intento con `Scanner`. | El usuario escribe un número en consola. |

Este modo de trabajo evita un problema común: tener veinte líneas nuevas y no saber cuál causó el error.

## Versión 1: intentos visibles

Empieza con el bucle más simple.

```java
public class Main {
    public static void main(String[] args) {
        for (int attempt = 1; attempt <= 5; attempt++) {
            System.out.println("Intento " + attempt);
        }
    }
}
```

Ejecuta antes de seguir. La consola debería mostrar:

```text
Intento 1
Intento 2
Intento 3
Intento 4
Intento 5
```

Si aparece otro resultado, no agregues más código todavía. Primero revisa el contador.

### Prueba rápida de límites

Cambia temporalmente:

```java
attempt <= 5
```

por:

```java
attempt <= 3
```

El programa debería mostrar tres intentos. Luego vuelve a dejarlo en 5. Esta prueba confirma que entiendes la condición de parada.

## Versión 2: número secreto e intento fijo

Ahora agrega dos variables.

```java
int secretNumber = 7;
int guess = 3;
```

El programa todavía no pedirá datos por teclado. Primero se probará la regla.

```java
public class Main {
    public static void main(String[] args) {
        int secretNumber = 7;
        int guess = 3;

        for (int attempt = 1; attempt <= 5; attempt++) {
            System.out.println("Intento " + attempt + ": " + guess);
        }
    }
}
```

Este código repite el mismo intento. No es el juego final, pero permite observar cómo un dato fijo se usa dentro de un bucle.

## Versión 3: decisión con `if` y `else`

Agrega la comparación.

```java
public class Main {
    public static void main(String[] args) {
        int secretNumber = 7;
        int guess = 3;

        for (int attempt = 1; attempt <= 5; attempt++) {
            if (guess == secretNumber) {
                System.out.println("Intento " + attempt + ": correcto.");
            } else {
                System.out.println("Intento " + attempt + ": incorrecto.");
            }
        }
    }
}
```

Con `guess = 3`, todos los intentos serán incorrectos. Cambia luego:

```java
int guess = 7;
```

Ahora todos serían correctos. Esa repetición todavía no es ideal, pero ayuda a verificar que la comparación funciona.

## Versión 4: detener al acertar

Si el jugador acierta, no necesitas seguir mostrando intentos. Agrega `break`.

```java
public class Main {
    public static void main(String[] args) {
        int secretNumber = 7;
        int guess = 7;

        for (int attempt = 1; attempt <= 5; attempt++) {
            if (guess == secretNumber) {
                System.out.println("Intento " + attempt + ": correcto.");
                break;
            } else {
                System.out.println("Intento " + attempt + ": incorrecto.");
            }
        }
    }
}
```

La consola debería mostrar solo:

```text
Intento 1: correcto.
```

No es un error que aparezca una sola línea. Es la señal de que `break` funcionó.

## Versión 5: lectura con `Scanner`

Ahora sí permite que el usuario escriba el intento.

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int secretNumber = 7;

        for (int attempt = 1; attempt <= 5; attempt++) {
            System.out.print("Intento " + attempt + " de 5. Ingresa un número: ");
            int guess = scanner.nextInt();

            if (guess == secretNumber) {
                System.out.println("Correcto.");
                break;
            } else {
                System.out.println("Incorrecto.");
            }
        }
    }
}
```

En Replit:

1. Presiona **Run**.
2. Espera que la consola muestre la pregunta.
3. Escribe un número.
4. Presiona **Enter**.
5. Repite hasta acertar o agotar intentos.

## Mejorar el mensaje final

El programa anterior no avisa si se agotaron los intentos. Para eso puedes usar una variable booleana.

```java
boolean found = false;
```

Cuando el jugador acierta:

```java
found = true;
break;
```

Después del bucle:

```java
if (!found) {
    System.out.println("No acertaste. El número secreto era " + secretNumber + ".");
}
```

Código completo de esta versión:

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int secretNumber = 7;
        boolean found = false;

        for (int attempt = 1; attempt <= 5; attempt++) {
            System.out.print("Intento " + attempt + " de 5. Ingresa un número: ");
            int guess = scanner.nextInt();

            if (guess == secretNumber) {
                System.out.println("Correcto.");
                found = true;
                break;
            } else {
                System.out.println("Incorrecto.");
            }
        }

        if (!found) {
            System.out.println("No acertaste. El número secreto era " + secretNumber + ".");
        }
    }
}
```

## Agregar pistas de mayor o menor

Una mejora razonable consiste en indicar si el intento fue demasiado bajo o demasiado alto.

```java
if (guess == secretNumber) {
    System.out.println("Correcto.");
    found = true;
    break;
} else if (guess < secretNumber) {
    System.out.println("El número secreto es mayor.");
} else {
    System.out.println("El número secreto es menor.");
}
```

Este bloque tiene tres caminos:

| Camino | Condición | Mensaje |
|---|---|---|
| Acierto | `guess == secretNumber` | Correcto. |
| Bajo | `guess < secretNumber` | El número secreto es mayor. |
| Alto | Ninguna anterior | El número secreto es menor. |

El último camino usa `else` porque si el número no es igual y no es menor, entonces debe ser mayor.

## Pruebas manuales recomendadas

Ejecuta estas pruebas antes de dar la práctica por terminada:

| Caso | Entradas | Resultado esperado |
|---|---|---|
| Acierto inmediato | `7` | Muestra correcto y termina. |
| Intento bajo | `3`, luego `7` | Primero indica mayor, luego correcto. |
| Intento alto | `9`, luego `7` | Primero indica menor, luego correcto. |
| Sin acierto | `1`, `2`, `3`, `4`, `5` | Muestra mensaje final con el número secreto. |
| Límite inferior | `0` | No se cae; responde según la regla. |
| Límite superior | `10` | No se cae; responde según la regla. |

No basta con que el programa compile. Debe comportarse bien en casos distintos.

## Registro de decisiones

Completa esta tabla en tu cuaderno o como comentario al final del archivo:

| Decisión | Tu respuesta |
|---|---|
| ¿Cuál es el número secreto elegido? | |
| ¿Cuántos intentos permitiste? | |
| ¿Qué mensaje aparece al acertar? | |
| ¿Qué mensaje aparece al fallar todos los intentos? | |
| ¿Qué error corregiste durante la práctica? | |

## Errores intencionales para aprender

Prueba estos errores uno por uno. Después vuelve al código correcto.

### Error 1: usar `=`

```java
if (guess = secretNumber) {
    System.out.println("Correcto.");
}
```

Resultado esperado:

```text
error: incompatible types: int cannot be converted to boolean
```

Explicación: Java esperaba una condición, pero recibió una asignación.

### Error 2: quitar una llave

```java
for (int attempt = 1; attempt <= 5; attempt++) {
    System.out.println("Intento " + attempt);
```

Resultado esperado:

```text
error: reached end of file while parsing
```

Explicación: Java llegó al final del archivo, pero todavía esperaba una llave `}`.

### Error 3: escribir texto cuando se espera número

Si el programa usa:

```java
int guess = scanner.nextInt();
```

y el usuario escribe:

```text
siete
```

puede aparecer:

```text
Exception in thread "main" java.util.InputMismatchException
```

Explicación: `nextInt()` espera un entero, no una palabra.

## Troubleshooting ampliado

| Síntoma | Posible causa | Acción concreta |
|---|---|---|
| El programa no pregunta nada. | El `Scanner` no se está usando o el código no llegó a esa línea. | Revisa que `scanner.nextInt()` esté dentro del bucle. |
| El programa imprime todos los intentos aunque aciertes. | Falta `break` o no se ejecuta la rama correcta. | Verifica `guess == secretNumber` y la posición de `break`. |
| Solo imprime un intento cuando aciertas. | `break` funciona correctamente. | No lo cambies si ese es el comportamiento esperado. |
| Siempre dice incorrecto. | El número secreto no coincide con los datos ingresados. | Imprime temporalmente `secretNumber` para depurar. |
| Replit parece detenido. | El programa está esperando entrada. | Haz clic en la consola y escribe un número. |
| La consola muestra muchas líneas sin parar. | El contador va en dirección incorrecta. | Cambia `attempt--` por `attempt++`. |

## Revisión final del código

Antes de entregar, revisa:

- El archivo se llama `Main.java`.
- La clase pública se llama `Main`.
- El import de `Scanner` está arriba del archivo.
- El bucle tiene un límite claro.
- La comparación usa `==`.
- El programa muestra mensajes comprensibles.
- No hay código repetido innecesario.
- No hay comentarios que contradigan el código.

## Conexión con programas más completos

Esta práctica aporta tres piezas que aparecen en muchas aplicaciones de consola:

| Pieza | Uso futuro |
|---|---|
| `if` | Decidir si una respuesta es correcta. |
| `for` | Controlar repeticiones con límite. |
| `Scanner` | Leer decisiones del usuario. |

Sin estas piezas, un programa sería una secuencia fija de mensajes. Con estas piezas, el programa empieza a reaccionar.

---

<div align="center">

**Siguiente:** [Quiz de comprensión](part-03-quiz.md)

</div>




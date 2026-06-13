import java.util.Scanner;

/*
 * Lección 06 - Solución completa: lectura segura de datos.
 *
 * InputHelper encapsula la lectura por consola. Game pide texto o números,
 * pero esta clase se encarga de repetir la pregunta si el dato no sirve.
 */
public class InputHelper {
    private final Scanner scanner;

    public InputHelper(Scanner scanner) {
        this.scanner = scanner;
    }

    public String readText(String message) {
        while (true) {
            System.out.print(message);
            String text = scanner.nextLine().trim();

            if (!text.isEmpty()) {
                return text;
            }

            System.out.println("Escribe al menos un caracter para continuar.");
        }
    }

    public int readNumber(String message, int min, int max) {
        while (true) {
            System.out.print(message);
            String text = scanner.nextLine();

            try {
                int number = Integer.parseInt(text);

                if (number >= min && number <= max) {
                    return number;
                }

                System.out.println("El número debe estar entre " + min + " y " + max + ".");
            } catch (NumberFormatException error) {
                // Si el texto no puede convertirse a int, se muestra una guía concreta.
                System.out.println("Escribe solo números enteros. Ejemplo: 7");
            }
        }
    }
}

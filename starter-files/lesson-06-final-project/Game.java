import java.util.Scanner;

/*
 * Coordinates the final console project.
 *
 * Main should not contain the full program. This class keeps the flow:
 * welcome message, player creation, rounds, score and closing message.
 *
 * Student work:
 * Add the missing final-project flow here after Player and InputHelper are
 * understood. Keep each responsibility in the class where it belongs.
 *
 * Optional adventure mode:
 * After the base game works, add a role, a difficulty and a reward message.
 * Keep those choices in Game, keep player state in Player and keep console
 * text in GameMessage.
 */
public class Game {
    private Scanner scanner;
    private InputHelper inputHelper;

    public Game() {
        scanner = new Scanner(System.in);
        inputHelper = new InputHelper(scanner);
    }

    public void start() {
        GameMessage.printWelcome();

        String name = inputHelper.readText("Escribe tu nombre de jugador: ");
        Player player = new Player(name);

        System.out.println("Hola, " + player.getName() + ". Este es el inicio del proyecto final.");
        System.out.println("En este archivo se completarán rondas, reglas, intentos y puntaje.");
        System.out.println("Cada responsabilidad debe mantenerse en la clase correcta.");

        scanner.close();
    }
}

import java.util.Random;
import java.util.Scanner;

/*
 * Lección 06 - Solución completa: coordinación del juego.
 *
 * Game controla el flujo general: bienvenida, lectura del jugador, niveles,
 * intentos, puntaje, vidas y cierre. Las clases Player, GameMessage e
 * InputHelper separan responsabilidades para que el archivo no haga todo solo.
 */
public class Game {
    private final Scanner scanner;
    private final Random random;
    private final InputHelper inputHelper;

    // Cada posición de estos arreglos representa el mismo nivel.
    private final String[] levelNames = {
        "Bosque de Bits",
        "Cueva de Condiciones",
        "Castillo de Clases"
    };

    private final String[] artifactNames = {
        "Compilador Encendido",
        "Llave del Bucle",
        "Escudo de Encapsulación"
    };

    private final String[] roleNames = {
        "Navegante de Bits",
        "Arquitecta de Clases",
        "Guardia del Scanner"
    };

    private final String[] difficultyNames = {
        "Aprendiz",
        "Explorador",
        "Reto"
    };

    private final int[] maxNumbers = {10, 20, 30};
    private final int[] maxAttempts = {4, 5, 6};
    private final int[] difficultyLimitBonus = {0, 5, 10};
    private final int[] difficultyAttemptPenalty = {0, 1, 2};
    private final int[] difficultyPointBonus = {0, 20, 40};

    public Game() {
        scanner = new Scanner(System.in);
        random = new Random();
        inputHelper = new InputHelper(scanner);
    }

    public void start() {
        GameMessage.printWelcome();
        String name = inputHelper.readText("Escribe tu nombre de jugador: ");

        GameMessage.printRoleOptions(roleNames);
        int roleIndex = inputHelper.readNumber("Rol elegido (1-" + roleNames.length + "): ", 1, roleNames.length) - 1;

        GameMessage.printDifficultyOptions(difficultyNames);
        int difficultyIndex = inputHelper.readNumber(
            "Dificultad elegida (1-" + difficultyNames.length + "): ",
            1,
            difficultyNames.length
        ) - 1;

        Player player = new Player(name, roleNames[roleIndex]);

        GameMessage.printRules(player.getName(), player.getRole(), difficultyNames[difficultyIndex]);

        // El juego avanza nivel por nivel mientras el jugador conserve vidas.
        for (int levelIndex = 0; levelIndex < levelNames.length && player.hasLives(); levelIndex++) {
            playRound(player, levelIndex, difficultyIndex);
        }

        GameMessage.printFinalSummary(player);
        scanner.close();
    }

    private void playRound(Player player, int levelIndex, int difficultyIndex) {
        String levelName = levelNames[levelIndex];
        int limit = maxNumbers[levelIndex] + difficultyLimitBonus[difficultyIndex];
        int attemptsAllowed = Math.max(2, maxAttempts[levelIndex] - difficultyAttemptPenalty[difficultyIndex]);
        int secretNumber = random.nextInt(limit) + 1;
        boolean wonRound = false;

        GameMessage.printLevelIntro(levelName, limit, attemptsAllowed, player.getLives());

        // Cada ronda tiene un máximo de intentos y también respeta las vidas restantes.
        for (int attempt = 1; attempt <= attemptsAllowed && player.hasLives(); attempt++) {
            int guess = inputHelper.readNumber(
                "Intento " + attempt + "/" + attemptsAllowed + ". Escribe un número entre 1 y " + limit + ": ",
                1,
                limit
            );

            if (guess == secretNumber) {
                int points = calculatePoints(levelIndex, attempt, difficultyIndex);
                player.addScore(points);
                player.addRoundWon();
                GameMessage.printWin(points);
                GameMessage.printArtifact(artifactNames[levelIndex]);
                wonRound = true;
                break;
            }

            player.loseLife();
            GameMessage.printHint(guess, secretNumber, player.getLives());
        }

        if (!wonRound && player.hasLives()) {
            GameMessage.printRoundLost(secretNumber);
        }
    }

    private int calculatePoints(int levelIndex, int attempt, int difficultyIndex) {
        int basePoints = (levelIndex + 1) * 50;
        int bonus = Math.max(0, (maxAttempts[levelIndex] - attempt) * 10);
        return basePoints + bonus + difficultyPointBonus[difficultyIndex];
    }
}

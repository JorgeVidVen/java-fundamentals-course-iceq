/*
 * Lección 06 - Solución completa: estado del jugador.
 *
 * Player protege el nombre, puntaje, vidas y rondas ganadas. Game no cambia
 * esos datos directamente; usa métodos públicos para respetar encapsulación.
 */
public class Player {
    private static final int INITIAL_LIVES = 5;

    private final String name;
    private final String role;
    private int score;
    private int lives;
    private int roundsWon;

    public Player(String name) {
        this(name, "Aprendiz de consola");
    }

    public Player(String name, String role) {
        this.name = name;
        this.role = role;
        this.score = 0;
        this.lives = INITIAL_LIVES;
        this.roundsWon = 0;
    }

    public String getName() {
        return this.name;
    }

    public String getRole() {
        return this.role;
    }

    public int getScore() {
        return this.score;
    }

    public int getLives() {
        return this.lives;
    }

    public int getRoundsWon() {
        return this.roundsWon;
    }

    public String getTitle() {
        if (score >= 250) {
            return "Guía de Java";
        }

        if (score >= 120) {
            return "Explorador de clases";
        }

        return "Aprendiz de Java";
    }

    public boolean hasLives() {
        return this.lives > 0;
    }

    public void addScore(int points) {
        if (points > 0) {
            this.score += points;
        }
    }

    public void loseLife() {
        if (this.lives > 0) {
            this.lives--;
        }
    }

    public void addRoundWon() {
        this.roundsWon++;
    }
}

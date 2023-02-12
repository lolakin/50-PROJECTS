import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.util.Random;

public class TicTacToe extends JFrame implements ActionListener {

    JPanel titlePanel, scorePanel;

    Font font;
    Color firstColor, secondColor;
    JLabel playerOneScore, playerTwoScore;
    boolean isPlayerOneTurn;
    String player1 = "O", player2 = "X";
    JButton [] buttons;
    int Player1Score = 0, Player2Score = 0;
    int count = 0;

    public TicTacToe() {

//		isPlayerOneTurn = true; to make X to be the first player

//		Random rd = new Random();
//		isPlayerOneTurn = rd.nextBoolean();

        buttons = new JButton[9];

        isPlayerOneTurn = new Random().nextBoolean();


        firstColor = new Color(61, 43, 31);
        secondColor = new Color(235, 234, 174);

        //title Panel
        titlePanel = new JPanel();

        JTextField textField = new JTextField();
        titlePanel.add(textField);
        textField.setText("Tic Tac Toe");
        font = new Font("Ink Free", Font.BOLD, 70);
        textField.setBackground(firstColor);
        textField.setForeground(Color.WHITE);
        textField.setFont(font);

        add(titlePanel);
        titlePanel.add(textField);
        titlePanel.setBackground(firstColor);
        add(titlePanel, BorderLayout.NORTH);


        //Buttons
        JPanel buttonPanel = new JPanel();
        buttonPanel.setLayout(new GridLayout(3, 3));
        for (int i = 0; i < 9; i++) {
            JButton btn = new JButton("");
//			btn.setText(String.valueOf(i));
            btn.setFont(new Font("Verdana", Font.BOLD, 140));
            btn.setFocusable(false);
            btn.addActionListener(this);
            btn.setBackground(Color.BLACK);
            buttonPanel.add(btn);
            buttons[i] = btn;
        }
        add(buttonPanel, BorderLayout.CENTER);

        //score panel
        scorePanel = new JPanel();
        scorePanel.setBackground(firstColor);

        font = new Font("Verdana", Font.BOLD, 30);

        JLabel playerOne = new JLabel();
        playerOne.setForeground(Color.WHITE);
        playerOne.setFont(font);

        JLabel playerTwo = new JLabel();
        playerTwo.setForeground(Color.WHITE);
        playerTwo.setFont(font);

        if (isPlayerOneTurn) {
            playerOne.setText("Player 1(" + player1 + "): \t");
            playerTwo.setText("Player 2(" + player2 + "): \t");
        } else {
            playerTwo.setText("Player 1(" + player2 + "): \t");
            playerOne.setText("Player 2(" + player1 + "): \t");
        }

        playerOneScore = new JLabel("0");
        playerOneScore.setForeground(Color.PINK);
        playerOneScore.setFont(font);

        playerTwoScore = new JLabel("0");
        playerTwoScore.setForeground(Color.PINK);
        playerTwoScore.setFont(font);

        scorePanel.setLayout(new GridLayout(2, 2));

        scorePanel.add(playerOne);
        scorePanel.add(playerOneScore);
        scorePanel.add(playerTwo);
        scorePanel.add(playerTwoScore);

        JPanel southPanel = new JPanel();
        southPanel.add(scorePanel);
        southPanel.setBackground(firstColor);

        add(southPanel, BorderLayout.SOUTH);




        setTitle("Class - Tic Tac Toe");
        setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        setSize(500, 500);
        setLocationRelativeTo(null);
        setVisible(true);

//        addWindowListener(new WindowAdapter(){
//
//            @Override
//            public void windowClosing(WindowEvent e) {
//                new Apps();
//
//            }
//        });
    }

    public static void main(String[] args) {
        new TicTacToe();

    }

    @Override
    public void actionPerformed(ActionEvent e) {

        JButton clicked = (JButton) e.getSource();
        clicked.setEnabled(false);
        count++;

        if (isPlayerOneTurn) {
            clicked.setText(player1);
            isPlayerOneTurn = false;
            clicked.setBackground(firstColor);
            boolean result = checkWinner(player1);
            if (result) {
                Player1Score++;
            }
            playerOneScore.setText(String.valueOf(Player1Score));
        }
        else {
            clicked.setText(player2);
            isPlayerOneTurn = true;
            clicked.setBackground(secondColor);
            boolean result = checkWinner(player2);
            if (result) {
                Player2Score++;
            }
            playerTwoScore.setText(String.valueOf(Player2Score));
        }
        if (count == 9) {
            reset();
            JOptionPane.showMessageDialog(null, "No winner !" );
        }

    }

    public boolean checkWinner(String played) {

        int [][] winPositions = {
                {0, 1, 2}, {3, 4, 5}, {6, 7, 8},
                {0, 3, 6}, {1, 4, 7}, {2, 5, 8},
                {0, 4, 8}, {2, 4, 6}

        };
        for (int [] check: winPositions) {
            if (buttons[check[0]].getText().equals(played) &&
                    buttons[check[1]].getText().equals(played) &&
                    buttons[check[2]].getText().equals(played)) {

                buttons[check[0]].setBackground(Color.GREEN);
                buttons[check[1]].setBackground(Color.GREEN);
                buttons[check[2]].setBackground(Color.GREEN);

                JOptionPane.showMessageDialog(null, "We have a winner ! : " + played);

                reset();
                return true;
            }
        }

        return false;


    }

    public void reset() {
        for (JButton button: buttons) {
            button.setBackground(Color.PINK);
            button.setText("");
            button.setEnabled(true);
        }
        count = 0;
    }

}

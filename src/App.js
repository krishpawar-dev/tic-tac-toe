import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState("");

  const play = (index) => {
    if (gameOver || board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let [a, b, c] of wins) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        setResult(board[a] + " wins");
        setGameOver(true);
        return;
      }
    }

    if (board.every(cell => cell !== "")) {
      setResult("Draw");
      setGameOver(true);
    }
  };

  useEffect(() => {
    checkWinner();
  }, [board]);

  const restart = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
    setGameOver(false);
    setResult("");
  };

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>

      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="toe"
            onClick={() => play(index)}
          >
            {cell}
          </div>
        ))}
      </div>

      <h2>{result}</h2>

      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default App;
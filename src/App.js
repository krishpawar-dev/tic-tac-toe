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
    setIsXTurn((prev) => !prev); // ✅ safer toggle
  };

  const checkWinner = (currentBoard) => {
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
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[b] === currentBoard[c]
      ) {
        return currentBoard[a] + " wins";
      }
    }

    if (currentBoard.every(cell => cell !== "")) {
      return "Draw";
    }

    return null;
  };

  useEffect(() => {
    const result = checkWinner(board);

    if (result) {
      setResult(result);
      setGameOver(true);
    }
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

      {/* ✅ Show turn */}
      {!gameOver && (
        <h2>Turn: {isXTurn ? "X" : "O"}</h2>
      )}

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

      {/* ✅ Result */}
      {result && <h2>{result}</h2>}

      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default App;
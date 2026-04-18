import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [c1, setC1] = useState("")
  const [c2, setC2] = useState("")
  const [c3, setC3] = useState("")
  const [c4, setC4] = useState("")
  const [c5, setC5] = useState("")
  const [c6, setC6] = useState("")
  const [c7, setC7] = useState("")
  const [c8, setC8] = useState("")
  const [c9, setC9] = useState("")

  const [count, setCount] = useState(1)
  const [gover, setGover] = useState(false)
  const [result, setResult] = useState("")


  const play = (cell, setCell) => {
    if (!gover && cell === "") {
      if (count % 2 !== 0) {
        setCell("X")
      }
      else {
        setCell("O")
      }
      setCount(count + 1);
    }
  };
  useEffect(() => {
    checkwinner()
  }, [c1, c2, c3, c4, c5, c6, c7, c8, c9])

  const checkwinner = () => {
    if (c1 !== "" && c1 === c2 && c2 === c3) {
      winner(c1);
    } else if (c4 !== "" && c4 === c5 && c5 === c6) {
      winner(c4);
    } else if (c7 !== "" && c7 === c8 && c8 === c9) {
      winner(c7);
    } else if (c1 !== "" && c1 === c4 && c4 === c7) {
      winner(c1)
    } else if (c2 !== "" && c2 === c5 && c5 === c8) {
      winner(c2)
    } else if (c3 !== "" && c3 === c6 && c6 === c9) {
      winner(c3)
    } else if (c1 !== "" && c1 === c5 && c5 === c9) {
      winner(c1)
    } else if (c3 !== "" && c3 === c5 && c5 === c7) {
      winner(c3)
    } else if (
      c1 !== "" && c2 !== "" && c3 !== "" &&
      c4 !== "" && c5 !== "" && c6 !== "" &&
      c7 !== "" && c8 !== "" && c9 !== "") {
      setResult("Draw")
      setGover(true)
    }
  }
  const winner = (player) => {
    setResult(player + " wins")
    setGover(true)
  }
  const restart = () => {
    setC1("")
    setC2("")
    setC3("")
    setC4("")
    setC5("")
    setC6("")
    setC7("")
    setC8("")
    setC9("")
    setCount(1)
    setGover(false)
    setResult("")
  }



  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <div className='board'>
        <div className='toe' onClick={() => play(c1, setC1)}>{c1}</div>
        <div className='toe' onClick={() => play(c2, setC2)}>{c2}</div>
        <div className='toe' onClick={() => play(c3, setC3)}>{c3}</div>

        <div className='toe' onClick={() => play(c4, setC4)}>{c4}</div>
        <div className='toe' onClick={() => play(c5, setC5)}>{c5}</div>
        <div className='toe' onClick={() => play(c6, setC6)}>{c6}</div>

        <div className='toe' onClick={() => play(c7, setC7)}>{c7}</div>
        <div className='toe' onClick={() => play(c8, setC8)}>{c8}</div>
        <div className='toe' onClick={() => play(c9, setC9)}>{c9}</div>
      </div>

      <h2>{result}</h2>

      <button onClick={restart}>Restart</button>
    </div>
  );
}


export default App;

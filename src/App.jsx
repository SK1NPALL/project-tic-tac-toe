import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // Put varible or function here

  const [turn,setTurn] = useState('X');
  const [board,setBoard] = useState(['','','','','','','','','']);

  function handleClick(n) {

    const newBoard = [...board];

    newBoard[n] = turn;
    setBoard = newBoard;
    switchTurn();
    isWin();

  } 

  function switchTurn() {
    
    setTurn(turn === 'X' ? 'O' : 'X');

  }

  function isWin() {

    // condition 

  }

  return (
    <>
      {/* Put components here */}
    </>
  )
}

export default App

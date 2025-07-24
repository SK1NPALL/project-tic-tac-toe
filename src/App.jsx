import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameReset from './assets/components/GameReset.jsx'
import WinnerBanner from './assets/components/WinnerBanner.jsx'

function App() {
  // Put varible or function here 
  const [turn, setTurn] = useState('X');
  
  function handleClick() {
    setTurn(turn === 'X' ? 'O' : 'X'); // เปลี่ยนตาเล่นระหว่าง X กับ O
  }




  return (
    <>
    <div class="container">
    <div><p>ตอนนี้เป็นตาของ: {turn}</p>
      <button onClick={handleClick} class="turn_show">Click</button>
    </div>

    <WinnerBanner/>
    
    
    <GameReset/>
    </div>
   </>
  )
}

export default App

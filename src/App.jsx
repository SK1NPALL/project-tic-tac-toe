import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameReset from './assets/components/GameReset.jsx'
import WinnerBanner from './assets/components/WinnerBanner.jsx'

function App() {
  // Put varible or function here 
  
  function handleClick() {
    setTurn(turn === 'X' ? 'O' : 'X'); // เปลี่ยนตาเล่นระหว่าง X กับ O
  }

  const [turn,setTurn] = useState('X'); // ตัวแปรเปลี่ยนเทิร์น
  const [board,setBoard] = useState(['','','','','','','','','']); // ตัวเก็บค่าในตาราง

  function handleClick(n) {

    const newBoard = [...board]; // สร้างบอร์ดใหม่ มาเก็บค่าบอร์ด useState

    newBoard[n] = turn; // ให้บอร์ดตำแหน่ง n (argument ที่รับเข้ามา) มีค่าตามตัวแปร turn
    setBoard = newBoard; // ทำให้ board จริงๆมีค่าเท่ากับ newboard
    switchTurn(); 
    isWin();

  } 

  function switchTurn() { //ฟังก์ชันสลับเทิร์น
    
    setTurn(turn === 'X' ? 'O' : 'X'); //ถ้าเทิร์นนั้นเป็น X ให้เปลี่ยนเป็น O กลับกัน ถ้าเทิร์นนั้นเป็น O ให้เปลี่ยนเป็น X

  }

  function isWin() { //ฟังชันด์เช็คถ้าชนะตรงเงื่อนไขจพ return true


    // เงื่อนไข X ชนะ

      //X ทั้งหมดในแนวนอน
    if (board[0] === 'X' || board[1] === 'X' || board[2] === 'X'){

      return true;

    }else if(board[3] === 'X' || board[4] === 'X' || board[5] === 'X'){

      return true;

    }else if(board[6] === 'X' || board[7] === 'X' || board[8] === 'X'){

      return true;

      //X ทั้งหมดในแนวเฉียง
    }else if(board[0] === 'X' || board[4] === 'X' || board[8] === 'X'){

      return true;

    }else if(board[2] === 'X' || board[4] === 'X' || board[6] === 'X'){

      return true;

      // X ทั้งหมดในแนวตั้ง
    }else if(board[0] === 'X' || board[3] === 'X' || board[6] === 'X'){

      return true;

    }else if(board[1] === 'X' || board[4] === 'X' || board[7] === 'X'){

      return true;

    }else if(board[2] === 'X' || board[5] === 'X' || board[8] === 'X'){

      return true;

    // เงื่อนไข O ชนะ

      //O ทั้งหมดในแนวนอน
    }else if (board[0] === 'O' || board[1] === 'O' || board[2] === 'O'){

      return true;

    }else if(board[3] === 'O' || board[4] === 'O' || board[5] === 'O'){

      return true;

    }else if(board[6] === 'O' || board[7] === 'O' || board[8] === 'O'){

      return true;

      // O ทั้งหมดในแนวเฉียง
    }else if(board[0] === 'O' || board[4] === 'O' || board[8] === 'O'){

      return true;

    }else if(board[2] === 'O' || board[4] === 'O' || board[6] === 'O'){

      return true;

      // O ทั้งหมดในแนวตั้ง
    }else if(board[0] === 'O' || board[3] === 'O' || board[6] === 'O'){

      return true;

    }else if(board[1] === 'O' || board[4] === 'O' || board[7] === 'O'){

      return true;

    }else if(board[2] === 'O' || board[5] === 'O' || board[8] === 'O'){

      return true;
      
    }
      
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

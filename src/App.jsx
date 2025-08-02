import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TurnShow from './assets/components/TurnShow.jsx'
import SquareBoard from './assets/components/SquareBoard'
import WinnerBanner from './assets/components/WinnerBanner.jsx'
import ResetButton from './assets/components/ResetButton.jsx'

function App() {
  // Put varible or function here 

  const [winner, setWinner] = useState(null); // ตัวแปรสำหรับแสดงผลการชนะ
  const [turn,setTurn] = useState('X'); // ตัวแปรเปลี่ยนเทิร์น
  const [board,setBoard] = useState(['','','','','','','','','']); // ตัวเก็บค่าในตาราง

  function handleClick(n) {
    
    if (board[n] !== '' || winner) return; // ห้ามเล่นถ้าช่องไม่ว่าง หรือเกมจบแล้ว
    const newBoard = [...board]; // สร้างบอร์ดใหม่ มาเก็บค่าบอร์ด useState

    newBoard[n] = turn; // ให้บอร์ดตำแหน่ง n (argument ที่รับเข้ามา) มีค่าตามตัวแปร turn
    setBoard(newBoard); // ทำให้ board จริงๆมีค่าเท่ากับ newboard

    if (isWin(newBoard, turn)) { //ถ้าเช็คแล้วมีการวางตำแหน่งที่ตรงเงื่อนไขชนะจะแสดงว่าชนะ 
    setWinner(turn); 
      } 
    else {
    switchTurn();
    }

  } 

  function switchTurn() { //ฟังก์ชันสลับเทิร์น
    
    setTurn(turn === 'X' ? 'O' : 'X'); //ถ้าเทิร์นนั้นเป็น X ให้เปลี่ยนเป็น O กลับกัน ถ้าเทิร์นนั้นเป็น O ให้เปลี่ยนเป็น X

  }

  function arraySameCheck(arr) { //check ว่า ทั้ง array นั้นเหมือนกันไหม

    for(let i = 0 ; i < arr.length ; i++) {

      for(let j = 0; j < arr.length ; j++) {

        if (arr[i] !== arr[j]) {

          
          return false; //ถ้าเจอไม่เหมือน return false
        }
        
      }
    }

    if (arr.includes('')) { //ถ้ามีฟันหนูซักอันใน array ที่ส่งเข้ามา return false

      return false;
  
    }

    return true; //ถ้า array เหมือนกันทั้งหมด return true

  }

  function isWin() { //ฟังชันด์เช็คถ้าชนะตรงเงื่อนไขจพ return true
    
    let row = board.length ** 0.5; // รูท 2 กับจำนวน index ใน array
    let cnt = -1; //เช็คแนวนอน
    let cntCon2 = -row; //เช็คแนวตั้ง
    let cntCon3 = -row -1 //เช็คแนวเฉียงขวา
    let cntCon4 = 0; //เช็คแนวเฉียงซ้าย
    const checkBoard = [];

    // เช็คแนวนอน
    for (let i = 0 ; i < row ; i++){ // column

      for (let j = 0 ; j < row ; j++){ // row  
      
        cnt += 1; 
        
        checkBoard.push(board[cnt]);
      
      }

      if (arraySameCheck(checkBoard) === true){ //เช็คว่า checkBoard ทั้งarrayเหมือนกันไหม 
        
        console.log('แนวนอนชนะ');
        return true;

      }
      
      checkBoard.length = 0; // reset array
      
      
    }

    //เช็คแนวตั้ง
    for (let i = 0 ; i < row ; i++){ // column

      for (let j = 0 ; j < row ; j++){ // row  
      
        cntCon2 += row; 
        
        checkBoard.push(board[cntCon2]);
      
      }
      cntCon2 = -row + (i+1);

      if (arraySameCheck(checkBoard) === true){ //เช็คว่า checkBoard ทั้งarrayเหมือนกันไหม 
        
        console.log('แนวตั้งชนะ')
        return true;

      }
      
      checkBoard.length = 0; // reset array
      
    }

    //เช็คแนวเฉียงขวา
    for (let i = 0 ; i < row ; i++){ // column
     
      cntCon4 += (row-1);
        
      checkBoard.push(board[cntCon4]);
      
    }
    if (arraySameCheck(checkBoard) === true){ //เช็คว่า checkBoard ทั้งarrayเหมือนกันไหม 
        
      console.log('เฉียงซ้ายชนะ');
      return true;

    }
      
    checkBoard.length = 0; // reset array
    
    //เช็คแนวเฉียงซ้าย
    for (let i = 0 ; i < row ; i++){ // column
     
      cntCon3 += (row+1);
        
      checkBoard.push(board[cntCon3]);
      
    }
    if (arraySameCheck(checkBoard) === true){ //เช็คว่า checkBoard ทั้งarrayเหมือนกันไหม 
        
      console.log('เฉียงขวาชนะ');
      return true;

    }
      
    checkBoard.length = 0; // reset array

    //เสมอ

    if (!board.includes('')) { //ถ้าใน board ไม่มีช่องว่าง และไม่เข้าเงื่อนไขการชนะ

      console.log('เสมอ');
      return 'draw';

    }
      return false
  }

  function handleReset(){
    setBoard(['', '', '', '', '', '', '', '', '']);
    setTurn('X');
    setWinner(null);
  }


  return (
    <>
      
      <TurnShow turn={turn} />
      <ResetButton onReset={handleReset} />
      <SquareBoard board={board} handleClick={handleClick} />
      <WinnerBanner winner={winner} />
      
      
      
   </>
  )
}

export default App

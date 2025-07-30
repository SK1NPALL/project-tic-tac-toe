import React from 'react'
import { useState } from 'react';



function TurnShow() {
    const [turn, setTurn] = useState('X');

    function handleClick() {
    setTurn(turn === 'X' ? 'O' : 'X'); // เปลี่ยนตาเล่นระหว่าง X กับ O
  }

  return (
      <>
      <p>ตอนนี้เป็นตาของ: {turn}</p>
      <button className="turn_button" onClick={handleClick}>
        Click to change turn
      </button>
      </>
  );
}

export default TurnShow
// src/components/SquareBoard.jsx
import React from 'react';

<<<<<<< Updated upstream
export default function SquareBoard({ board, onSquareClick }) {
  return (
    <div className="board">
      {board.map((value, idx) => (
        <div
          key={idx}
          className="square"
          onClick={() => onSquareClick(idx)}
        >
          {value}
        </div>
      ))}
=======
import React from 'react';

function SquareBoard({ board, onSquareClick }) {
  return (
    <div className="square-container">
      <div className="square sq1" onClick={() => onSquareClick(0)}>
        {board[0]}
      </div>
      <div className="square sq2" onClick={() => onSquareClick(1)}>
        {board[1]}
      </div>
      <div className="square sq3" onClick={() => onSquareClick(2)}>
        {board[2]}
      </div>
      <div className="square sq4" onClick={() => onSquareClick(3)}>
        {board[3]}
      </div>
      <div className="square sq5" onClick={() => onSquareClick(4)}>
        {board[4]}
      </div>
      <div className="square sq6" onClick={() => onSquareClick(5)}>
        {board[5]}
      </div>
      <div className="square sq7" onClick={() => onSquareClick(6)}>
        {board[6]}
      </div>
      <div className="square sq8" onClick={() => onSquareClick(7)}>
        {board[7]}
      </div>
      <div className="square sq9" onClick={() => onSquareClick(8)}>
        {board[8]}
      </div>
>>>>>>> Stashed changes
    </div>
  );
}

// src/components/SquareBoard.jsx
import React from 'react';

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
    </div>
  );
}

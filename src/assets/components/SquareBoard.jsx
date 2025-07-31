// src/components/SquareBoard.jsx
import React from 'react';

function SquareBoard(props){
  return (
    <div className = "board">
    <div className="square-container">
      <div className="square sq1" onClick={() => props.handleClick(0)}>
        {props.board[0]}
      </div>
      <div className="square sq2" onClick={() => props.handleClick(1)}>
        {props.board[1]}
      </div>
      <div className="square sq3" onClick={() => props.handleClick(2)}>
        {props.board[2]}
      </div>
      <div className="square sq4" onClick={() => props.handleClick(3)}>
        {props.board[3]}
      </div>
      <div className="square sq5" onClick={() => props.handleClick(4)}>
        {props.board[4]}
      </div>
      <div className="square sq6" onClick={() => props.handleClick(5)}>
        {props.board[5]}
      </div>
      <div className="square sq7" onClick={() => props.handleClick(6)}>
        {props.board[6]}
      </div>
      <div className="square sq8" onClick={() => props.handleClick(7)}>
        {props.board[7]}
      </div>
      <div className="square sq9" onClick={() => props.handleClick(8)}>
        {props.board[8]}
      </div>
    </div>
    </div>
  );
}

export default SquareBoard;

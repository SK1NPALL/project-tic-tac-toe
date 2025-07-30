// src/components/SquareBoard.jsx
import React from 'react';

function SquareBoard({}) {
  return (
    <div className="square-container">
      <div className="square sq1" onClick={() => handleClick(0)}>
        
      </div>
      <div className="square sq2" onClick={() => handleClick(1)}>
        
      </div>
      <div className="square sq3" onClick={() => handleClick(2)}>
        
      </div>
      <div className="square sq4" onClick={() => handleClick(3)}>
        
      </div>
      <div className="square sq5" onClick={() => handleClick(4)}>
        
      </div>
      <div className="square sq6" onClick={() => handleClick(5)}>
        
      </div>
      <div className="square sq7" onClick={() => handleClick(6)}>
        
      </div>
      <div className="square sq8" onClick={() => handleClick(7)}>
        
      </div>
      <div className="square sq9" onClick={() => handleClick(8)}>
        
      </div>
    </div>
  )
}

export default SquareBoard

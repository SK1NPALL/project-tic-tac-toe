import React from 'react';


function TurnShow({ turn}) {
  return (
    <div className="turn-container">
      <p className="turn-text">ตอนนี้เป็นตาของ: <span>{turn}</span></p>

    </div>
  );
}

export default TurnShow;
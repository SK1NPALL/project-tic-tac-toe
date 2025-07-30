import React, { useState, useEffect } from 'react';

function WinnerBanner() {
  const [isWon, setIsWon] = useState(false);

  useEffect(() => {
    if (isWon) {
      alert('YOU WIN !!!');
    }
  }, [isWon]); // ทำงานเมื่อ isWon เปลี่ยน

  function handleClick() {
    setIsWon(true);
  }

  return (
    <button onClick={handleClick} className="won_button">Test win</button>
  );
}

export default WinnerBanner;
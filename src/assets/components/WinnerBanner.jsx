import React, { useEffect } from 'react';

function WinnerBanner({ winner }) {
  useEffect(() => {
  if (winner) {
    setTimeout(() => {
      alert(`Winner is :${winner}`);
    }, 100); // หน่วงเวลาให้ React update UI ก่อน
  }
}, [winner]);
}

export default WinnerBanner;
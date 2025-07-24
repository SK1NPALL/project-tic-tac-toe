import React from 'react'

function GameReset() {
    function reset(){
    window.location.reload();
  }

  return (
    
    <button onClick={reset} class="reset" type="reset">Reset</button>
  )
}


export default GameReset
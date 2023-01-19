import React from 'react'

function CapturingUserClicks() {
  return (
    <div>
        <button onClick={activateLasers}>
             Click Me     
        </button>
    </div>
  )
}

function activateLasers(){
    alert("Clicked");

}

export default CapturingUserClicks
import React from 'react'

function button(props) {
  return (
    <button onClick={() => alert(props.name +' clicked')}>
             Click Me     
        </button>
  )
}

export default button
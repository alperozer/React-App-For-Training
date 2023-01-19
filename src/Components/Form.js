import React, {useState} from 'react'

function Form() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const submitValue = () => {
        alert(name +' '+ surname +' '+ 'clicked')  
  }
  return (
  <div>
        <hr/>
        <input type="text" placeholder="Name" onChange={e => setName(e.target.value)} />
        <input type="text" placeholder="Surname" onChange={e => setSurname(e.target.value)} />
        <button onClick={submitValue}>Submit</button>
  </div>
   
  )
}


export default Form
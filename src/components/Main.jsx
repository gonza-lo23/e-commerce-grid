import React, {useState} from 'react'
import '../styles/Main.css'

function Main() {
  const [estado, setEstado] = useState (0)

  
  return (
    <div className='main'>
      <p>you have press {estado}</p>
    <button onClick={() => setEstado(estado + 1)}>contador</button>
    </div>
  )
}

export default Main
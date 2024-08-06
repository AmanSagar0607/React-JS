import { useState } from 'react'
import './App.css'

function App () {
  let [counter, setCounter] = useState(5) //counter is Variable and setCounter is  method or function

  // let counter = 5
  // Add VALUE using "USESTATE HOOK"
  const addValue = () => {
    counter += 5
    setCounter(counter)
    console.log('Clicked', counter)
  }

  // Remove VALUE using "USESTATE HOOK"
  const removeValue = () => {
    if (counter > 0)  counter -= 5;
    setCounter(counter)
    console.log('Clicked', counter)
  }

  return (
    <>
      <div>
        <h1>Learning React JS</h1>
        <h2>Counter Value : {counter} </h2>
        <button onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}> remove Value </button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 0

  const [count , setCount] = useState(0);

  const addValue = () => {
    if(count < 20){
      setCount( prevCount => prevCount +1);
      setCount( prevCount => prevCount +1);
      setCount( prevCount => prevCount +1);
      setCount( prevCount => prevCount +1);
    }
  }

  console.log(count)

  const removeValue = () => {
    if (count > 0){
      setCount(count - 1)
    }
  }

  return (
    <>
      <h1> Chai aur React </h1>
      <h2> Counter Value : {count}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App

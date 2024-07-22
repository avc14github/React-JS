import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

const user = {
  name: "Ramesh",
  message : "Official Website"
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Cards name="Aayush"/>
      <Cards name="Virat" message="Visit Profile"/>
      <Cards name={user.name} message={user.message}/>
    </>
  )
}

export default App

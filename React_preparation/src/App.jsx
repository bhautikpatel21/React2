import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditional_rendering from './Day1/Conditional_rendering'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Conditional_rendering/>
    </>
  )
}

export default App

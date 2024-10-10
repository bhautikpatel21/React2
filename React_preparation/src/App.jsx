import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conditional_rendering from './Day1/Conditional_rendering'
import Nesting_react from './Day1/Nesting_react'
import Form from './Day1/Form_Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Conditional_rendering/> */}
      {/* <Nesting_react/> */}
      <Form/>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Conditional_rendering from './Day1/Conditional_rendering'
import Nesting_react from './Day1/Nesting_react'
import Form from './Day1/Form_Component'
import AddressForm from './Day1/Multiple_state_variable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Conditional_rendering/> */}
      {/* <Nesting_react/> */}
      {/* <Form/> */}
      <AddressForm/>
    </>
  ) 
}

export default App

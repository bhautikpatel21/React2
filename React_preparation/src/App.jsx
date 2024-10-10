import { useState } from 'react'
import './App.css'
import Conditional_rendering from './Day1/Conditional_rendering'
import Nesting_react from './Day1/Nesting_react'
import Form from './Day1/Form_Component'
import AddressForm from './Day1/Multiple_state_variable'
import List_rendering from './Day1/List_rendering'
import Toggle from './Day1/Toggle'
import Counter from './Day1/Couter'
import Form_MultipleFileds from './Day1/Form_MultipleFileds'
import StateArray from './Day1/StateWithArrays'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Conditional_rendering/> */}
      {/* <Nesting_react/> */}
      {/* <Form/> */}
      {/* <AddressForm/> */}
      {/* <List_rendering/> */}
      {/* <Toggle/> */}
      {/* <Counter/> */}
      {/* <Form_MultipleFileds/> */}
      <StateArray/>
    </>
  ) 
}

export default App

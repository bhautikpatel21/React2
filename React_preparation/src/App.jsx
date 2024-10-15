import { useState } from 'react'
import './App.css'
import Toggle from './Day1/Toggle'
import StateArray from './Day1/StateWithArrays'
import Nesting_react from './Day1/Nesting_react'
import AddressForm from './Day1/Multiple_state_variable'
import List_rendering from './Day1/List_rendering'
import Form from './Day1/Form_Component'
import Counter from './Day1/Couter'
import IfElse from './Day1/Conditional/If_Else'
import Logical from './Day1/Conditional/Logical'
import Switch from './Day1/Conditional/Switch'
import Ternary from './Day1/Conditional/Teanary'
import FormMultipleFileds from './Day1/Form_MultipleFileds'
import Index from './Day2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* ||    ----  Day - 1  ----     || */}
      {/* <Toggle/> */}
      {/* <StateArray/> */}
      {/* <Nesting_react/> */}
      {/* <AddressForm/> */}
      {/* <List_rendering/> */}
      {/* <FormMultipleFileds/> */}
      {/* <Form/> */}
      {/* <Counter/> */}
      {/* <IfElse/> */}
      {/* <Logical/> */}
      {/* <Switch/> */}
      {/* <Ternary/> */}


      {/* ||    ----  Day - 2  ----     || */}
      <Index/>
    </>
  ) 
}

export default App

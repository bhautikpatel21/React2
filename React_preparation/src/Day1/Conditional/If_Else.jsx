//  -- if else statement

import React from 'react'
import { useState } from 'react'

const IfElse= () => {

  const [visible, serVisible] = useState("Statement 1")

  const handleChange = () => {

    if(visible == "Statement 1") {
        serVisible("Statement 2");
    }

    else {
        serVisible("Statement 1");
    } 
  }

  return (
    
    <div className='flex flex-col justify-center items-center'>
      <h1>This is If else statemennt </h1><br/>

      <button className='p-4 bg-yellow-300 rounded-3xl' onClick={handleChange}> Click me</button> <br/>
      <div className='w-64 h-48 bg-green-500 flex justify-center items-center text-white rounded-xl font-bold text-2xl'>{visible}</div>
    </div>
  )
} 

export default IfElse
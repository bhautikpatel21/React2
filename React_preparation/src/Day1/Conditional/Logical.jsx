//  -- Logical && Operator

import React, { useState } from 'react'

const Logical = () => {
const [nValue, setnValue] = useState('');
const [mValue, setmValue] = useState('');

    const handleChange = (event) => {
       setnValue(event.target.value)
   }

   const handleChangee = (event) => {
    setmValue(event.target.value)
}

   let outputMessage;

  if(nValue >=1 && mValue <=3)
  {
    outputMessage = "That is valid value"
  }
  else{
    outputMessage = "That is not valid value"
  }


  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>This is Switch case Statement </h1><br />
      <span className='p-3 rounded-xl font-semibold bg-yellow-200'>Enter the number in this box (1 to 3)</span> <br />
      <input className='bg-blue-400 p-4 rounded-xl text-white' type="text" value={nValue} onChange={handleChange}/> <br />
      <input className='bg-blue-400 p-4 rounded-xl text-white' type="text" value={mValue} onChange={handleChangee}/> <br />
      <div className='w-20 text-white flex justify-center items-center rounded-xl h-20 bg-slate-500'>{outputMessage}</div>
    </div>
  )
}

export default Logical
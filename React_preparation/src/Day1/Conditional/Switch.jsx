//  -- Switch Case Statement 

import React, { useState } from 'react'

const Switch = () => {
const [nValue, setnValue] = useState('');

    const handleChange = (event) => {
       setnValue(event.target.value)
   }

   let outputMessage;

   switch (nValue) {
    case '1':
      outputMessage = 'You Enter One';
      break;
    case '2':
      outputMessage = 'Tou Enter Two';
      break;
    case '3':
      outputMessage = ' You Enter Three';
      break;
    default:
      outputMessage = 'Not Valid value';
  }
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1>This is Switch case Statement </h1><br />
      <span className='p-3 rounded-xl font-semibold bg-yellow-200'>Enter the number in this box (1 to 3)</span> <br />
      <input className='bg-blue-400 p-4 rounded-xl text-white' type="text" value={nValue} onChange={handleChange}/> <br />
      <div className='w-20 text-white flex justify-center items-center rounded-xl h-20 bg-slate-500'>{outputMessage}</div>
    </div>
  )
}

export default Switch
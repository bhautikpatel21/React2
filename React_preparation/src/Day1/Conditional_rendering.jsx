
//  -- Ternary Operator

// import React from 'react'
// export function Item({check , name}){
   
//     return check ? <li className='bg-purple-600 text-white my-2'>{name}</li> : null
// }

// const Conditional_rendering= () => {
//   return (
//     <div>
//       <h1 className='p-4 bg-purple-600 text-white text-center text-4xl'>React Conditional Rendering</h1>
//       <ul className='mt-6'>
//         <Item check={false} name='laptop'></Item>
//         <Item check={true} name='mobile'></Item>
//         <Item check={false} name='mouse'></Item>
//         <Item check={true} name='pendrive'></Item>
//         <Item check={true} name='harddisk'></Item>
//         <Item check={false} name='keyboard'></Item>
//       </ul>
//     </div>
//   )
// } 

// export default Conditional_rendering   

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  -- if else statement

import React from 'react'
import { useState } from 'react'

const Conditional_rendering= () => {

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

export default Conditional_rendering   

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  -- Switch Case Statement 

// import React, { useState } from 'react'

// const Conditional_rendering = () => {
// const [nValue, setnValue] = useState('');

//     const handleChange = (event) => {
//        setnValue(event.target.value)
//    }

//    let outputMessage;

//    switch (nValue) {
//     case '1':
//       outputMessage = 'You Enter One';
//       break;
//     case '2':
//       outputMessage = 'Tou Enter Two';
//       break;
//     case '3':
//       outputMessage = ' You Enter Three';
//       break;
//     default:
//       outputMessage = 'Not Valid value';
//   }
//   return (
//     <div className='flex flex-col justify-center items-center'>
//       <h1>This is Switch case Statement </h1><br />
//       <span className='p-3 rounded-xl font-semibold bg-yellow-200'>Enter the number in this box (1 to 3)</span> <br />
//       <input className='bg-blue-400 p-4 rounded-xl text-white' type="text" value={nValue} onChange={handleChange}/> <br />
//       <div className='w-20 text-white flex justify-center items-center rounded-xl h-20 bg-slate-500'>{outputMessage}</div>
//     </div>
//   )
// }

// export default Conditional_rendering

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  -- Logical && Operator

// import React, { useState } from 'react'

// const Conditional_rendering = () => {
// const [nValue, setnValue] = useState('');
// const [mValue, setmValue] = useState('');

//     const handleChange = (event) => {
//        setnValue(event.target.value)
//    }

//    const handleChangee = (event) => {
//     setmValue(event.target.value)
// }

//    let outputMessage;

//   if(nValue >=1 && mValue <=3)
//   {
//     outputMessage = "That is valid value"
//   }
//   else{
//     outputMessage = "That is not valid value"
//   }


//   return (
//     <div className='flex flex-col justify-center items-center'>
//       <h1>This is Switch case Statement </h1><br />
//       <span className='p-3 rounded-xl font-semibold bg-yellow-200'>Enter the number in this box (1 to 3)</span> <br />
//       <input className='bg-blue-400 p-4 rounded-xl text-white' type="text" value={nValue} onChange={handleChange}/> <br />
//       <input className='bg-blue-400 p-4 rounded-xl text-white' type="text" value={mValue} onChange={handleChangee}/> <br />
//       <div className='w-20 text-white flex justify-center items-center rounded-xl h-20 bg-slate-500'>{outputMessage}</div>
//     </div>
//   )
// }

// export default Conditional_rendering

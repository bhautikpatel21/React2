import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const UseRef = () => {

    const [formData , setFormData] = useState({
        fullName:''
    })

    console.log(formData);
    

    const referenceValue = useRef(null)
    const divref = useRef(null)

    console.log(divref);
    

    const divstyle = () => {
        divref.current.style.width = '200px'
        divref.current.style.height = '200px'
        divref.current.style.backgroundColor = 'purple'
    }

  return (
    <div>
      <h1 className='heading'>This is React useRef Hook</h1>
      <input ref={referenceValue} className='border border-black' type="text" name="fullName" id="" onChange={(e) => setFormData({...formData , [e.target.name]:e.target.value})} />
      <div ref={divref}>

      </div>
      <button onClick={divstyle}>Click</button>
    </div>
  )
}

export default UseRef
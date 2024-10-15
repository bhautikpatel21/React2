import React from 'react'
import { data, data1 } from './MainCom'
import { useContext } from 'react'

const Component3 = () => {

  let firstName = useContext(data)
  let Gender = useContext(data1)

  return (
    <div>
      <h1 className='heading'>My Name is {firstName} and My Gender is {Gender}</h1>
      
    </div>
  )
}

export default Component3
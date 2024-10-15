import React from 'react'
import Component1 from './component1'
import { createContext } from 'react'

export const data = createContext()
export const data1 = createContext()

const MainCom = () => {

  let fName = 'Bhautik'
  let gender = 'Male'

  return (
    <div>
      <h1 className='heading'>This is MainCom</h1>
      <data.Provider value={fName}>
        <data1.Provider value={gender}>
          <Component1 />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default MainCom
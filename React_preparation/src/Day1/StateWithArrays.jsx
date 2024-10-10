import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const StateArray = () => {

    const [ProductData, setProductData] = useState([]);

    const product = [
        {
            id : 1,
            name : 'john',
            age : 46
        },
        {
            id : 2,
            name : 'morgan',
            age : 23
        },
        {
            id : 3,
            name : 'jack',
            age : 27
        },
        {
            id : 4,
            name : 'megrisy',
            age : 31
        },
        {
            id : 5,
            name : 'breen',
            age : 71
        },
    ]

    useEffect(() => {
        setProductData(product);
    })
  return (
    <>
    <div>
        <h1 className='font-bold mb-5 text-2xl'>This is ListRendering</h1>
              <div className='w-full h-lvh bg-yellow-200  flex flex-col gap-14 items-center justify-center p-7'>
            {
                ProductData.map((product) => {
                    return(
                        <>
                        <div className='w-[150px] h-[240px] bg-blue-600 text-white flex flex-col justify-center'>
                            <h1>id : {product.id}</h1>
                            <h1>name : {product.name}</h1>
                            <h1>age : {product.age}</h1>
                        </div>
                        </>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default StateArray
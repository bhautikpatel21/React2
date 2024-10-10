import React, { useState } from 'react'

const List_rendering = () => {
    const [data,setData] = useState([
        {
            name : 'babu batali',
            age : 23,
            work : "supari"
        },
        {
            name : 'raghu',
            age : 34,
            work : "gun supply"
        },
        {
            name : 'mansukh',
            age : 42,
            work : "Killer"
        },
        {
            name : 'Chota kadari',
            age : 38,
            work : "drug supply"
        },
        {
            name : 'Billa habibi',
            age : 17,
            work : "snakes supply"
        }
    ])
  return (
    <div>
    <h1 className='font-bold text-2xl'>This is ListRendering</h1><br />
    <div className='w-full h-lvh bg-yellow-200 flex flex-col justify-center items-center gap-5 p-7'>
        {
            data.map((product) => {
                return(
                    <>
                    <div className='w-[150px] h-[240px] bg-blue-600 flex flex-col justify-center items-center text-white'>
                        <h1>name : {product.name}</h1>
                        <h1>age : {product.age}</h1>
                        <h1>work : {product.work  }</h1>
                    </div>
                    </>
                )
            })
        }
    </div>
</div>
  )
}

export default List_rendering

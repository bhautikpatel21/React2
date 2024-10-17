import React, { memo } from 'react'

const Child = () => {
    console.log('Render Child Com')
  return (
    <div>
        <h1>This is Child Component</h1>
    </div>
  )
}

export default  memo(Child)
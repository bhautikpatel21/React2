import React, { useCallback,useState } from 'react'
import Child from './Child'

const CallBack = () => {

    const [count, setCount] = useState(0);

    const increment = useCallback(() => setCount(count + 1));

  return (
    <div>
        <h1>This is React CallBack Hooks</h1>
        <Child/>
        <span>{count}</span><br />
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default CallBack
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };

  const decrement = () => {
    setCount(() => count - 1);
  };

  return (
    <div className='flex flex-col justify-center items-center'><br />
      <div className='bg-yellow-600 rounded-2xl w-36 h-24 flex justify-center items-center text-white font-bold'>Counter: {count}</div><br />
      <button className='bg-gray-500 p-3 rounded-xl text-white' onClick={increment}>Increment</button><br />
      <button className='bg-gray-500 p-3 rounded-xl text-white' onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
import React, { useContext } from 'react'
import { ButtonContext } from ".";



const Button = () => {
    const a = useContext(ButtonContext);
  return (
    <div>
      <button
        onClick={a}
        className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold bg-slate-400  px-5 py-3 text-white"
      >
        Theme
      </button>
    </div>
  );
}

export default Button
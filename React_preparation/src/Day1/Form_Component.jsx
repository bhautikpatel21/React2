import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert(`Submitted Value: ${inputValue}`);
    setInputValue(''); // Clear the input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter something: </label><br />
        <input className='bg-yellow-200' type="text" value={inputValue} onChange={handleChange} /><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
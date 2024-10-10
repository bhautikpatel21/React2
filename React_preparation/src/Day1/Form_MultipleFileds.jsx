// import React from 'react'

// const Form_MultipleFileds = () => {
//   return (
//     <div className='flex justify-center items-center'>
//       <div className='w-[500px] h-[450px] bg-yellow-200 '>
//         <h1 className='font-bold text-2xl pt-3'>This is Form Component</h1><br />

//         <label>Enter Your FirstName : </label>
//         <input /><br /><br />
        
//         <label>Enter Your LastName : </label>
//         <input /><br /><br />
        
//         <label>Enter Your Email : </label>
//         <input /><br /><br />

//         <label>Enter Your Password : </label>
//         <input /><br /><br />

//         <label>Enter Your age: </label>
//         <input /><br /><br />

//         <label>Enter Your MobileNo : </label>
//         <input /><br /><br />

//         <button className='p-4 bg-blue-600 text-white rounded-3xl' type='sumbit'>Submit</button>

//       </div>
//     </div>
//   )
// }

// export default Form_MultipleFileds


import React, { useState } from 'react';

const Form_MultipleFileds = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: '',
    mobileNo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[500px] h-[450px] bg-yellow-200'>
        <h1 className='font-bold text-2xl pt-3'>This is Form Component</h1>
        <form onSubmit={handleSubmit}>
          <label>Enter Your FirstName: </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          /><br /><br />

          <label>Enter Your LastName: </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          /><br /><br />

          <label>Enter Your Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          /><br /><br />

          <label>Enter Your Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          /><br /><br />

          <label>Enter Your Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          /><br /><br />

          <label>Enter Your MobileNo: </label>
          <input
            type="tel"
            name="mobileNo"
            value={formData.mobileNo}
            onChange={handleChange}
          /><br /><br />

          <button className='p-4 bg-blue-600 text-white rounded-3xl' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form_MultipleFileds;
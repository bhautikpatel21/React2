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

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData); // Set submitted data to state
    // Optionally reset the form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      age: '',
      mobileNo: '',
    });
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[500px] h-[650px] bg-yellow-200'>
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

        {/* Display submitted data if available */}
        {submittedData && (
          <div className='mt-5'>
            <h2 className='font-bold'>Submitted Data:</h2>
            <p>First Name: {submittedData.firstName}</p>
            <p>Last Name: {submittedData.lastName}</p>
            <p>Email: {submittedData.email}</p>
            <p>Age: {submittedData.age}</p>
            <p>Mobile No: {submittedData.mobileNo}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form_MultipleFileds;

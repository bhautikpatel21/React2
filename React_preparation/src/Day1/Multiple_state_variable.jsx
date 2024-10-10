import React, { useState } from 'react';

const AddressForm = () => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
  };

  const handleDisplay = () => {
    setSubmittedData({ street, city, zip });
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Street: </label>
        <input  type="text"  value={street}  onChange={handleChange(setStreet)} /><br />

        <label>City: </label>
        <input type="text" value={city} onChange={handleChange(setCity)} /><br />

        <label>Zip Code: </label>
        <input type="text" value={zip} onChange={handleChange(setZip)} /> <br />

        <button type="button" onClick={handleDisplay}>Display Address</button>
      </form>

      {submittedData && (
        <div>
          <h2>Submitted Address:</h2>
          <p>Street: {submittedData.street}</p>
          <p>City: {submittedData.city}</p>
          <p>Zip Code: {submittedData.zip}</p>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
import React, { useState } from "react";
import Axios from "axios";
const URL = "localhost:8080/api/users/register";

function Register() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    password: "",
    userName: "",
    phnNo: "",
    address: "",
    state: "",
    city: "",
    pincode: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleErrors = (errors) => {
    if (errors.code === "validations") {
      setValidationErrors(errors.errors);
    }

    // if(errors is data not saved error)

    // if()
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post(URL, state)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        handleErrors(error);
      });
  };

  return (
    <div className='signup-wrapper'>
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-item'>
          <label>First Name*</label>
          <input
            type='text'
            placeholder='First Name'
            onChange={handleChange}
            value={state.firstName}
            name='firstName'
          />
        </div>

        <div className='input-item'>
          <label>Last Name*</label>
          <input
            type='text'
            placeholder='Last Name'
            onChange={handleChange}
            value={state.lastName}
            name='lastName'
          />
        </div>

        <div className='input-item'>
          <label>User Name*</label>
          <input
            type='text'
            placeholder='User Name'
            onChange={handleChange}
            value={state.userName}
            name='userName'
          />
        </div>

        <div className='input-item'>
          <label>Password*</label>
          <input
            type='text'
            placeholder='Password'
            onChange={handleChange}
            value={state.password}
            name='password'
          />
        </div>

        <div className='input-item'>
          <label>Phone *</label>
          <input
            type='text'
            placeholder='Phone'
            onChange={handleChange}
            value={state.phnNo}
            name='phnNo'
          />
        </div>

        <div className='input-item'>
          <label>Address*</label>
          <input
            type='text'
            placeholder='Address'
            onChange={handleChange}
            value={state.address}
            name='address'
          />
        </div>

        <div className='input-item'>
          <label>State*</label>
          <input
            type='text'
            placeholder='State'
            onChange={handleChange}
            value={state.state}
            name='state'
          />
        </div>

        <div className='input-item'>
          <label>City*</label>
          <input
            type='text'
            placeholder='City'
            onChange={handleChange}
            value={state.city}
            name='city'
          />
        </div>

        <div className='input-item'>
          <label>Pincode*</label>
          <input
            type='text'
            placeholder='Pincode'
            onChange={handleChange}
            value={state.pincode}
            name='pincode'
          />
        </div>

        <button type='submit'>SignUp</button>
      </form>
    </div>
  );
}

export default Register;

import React, { useState } from "react";
import Axios from "axios";
const URL = "localhost:8080/api/users/login";

function Login() {
  const [state, setState] = useState({
    email: "",
    password: "",
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
    <div className='Login'>
      <h1>User login</h1>
      <form onSubmit={handleSubmit}>
        <div className='input-item'>
          <label>userName*</label>
          <input
            type='text'
            placeholder='email'
            onChange={handleChange}
            value={state.email}
            name='email'
          />
        </div>

        <div className='input-item'>
          <label>password*</label>
          <input
            type='text'
            placeholder=' password'
            onChange={handleChange}
            value={state.password}
            name='password'
          />
        </div>

        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;

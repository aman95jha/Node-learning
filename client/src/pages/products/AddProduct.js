import React, { useState } from "react";
import AppBar from "../layout/AppBar";
import Sidenav from "../layout/Sidenav";
import Axios from "axios";

function AddProduct() {
  const [state, setState] = useState({
    title: "",
    price: "",
    imageUrl: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = "localhost/afsdf";
    const Product = state;
    Axios.post(URL, Product)
      .then((data) => {
        setMessage("Product Added Successfully");
      })
      .catch((error) => {
        console.log(error);
        setError("CouldNot add Product");
      });
  };

  return (
    <div className='page-wrapper'>
      <Sidenav></Sidenav>
      <div className='main-content'>
        <AppBar></AppBar>
        {/* What ever  to be kept here */}
        {error && <p>{error}</p>}
        {message && <p>{message}</p>}
        <span>Add Products</span>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type='text'
              value={state.title}
              name='title'
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type='text'
              value={state.price}
              name='price'
              onChange={handleChange}
            />
          </div>
          <div>
            <label>ImageURL</label>
            <input
              type='text'
              value={state.imageUrl}
              name='imageUrl'
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type='text'
              value={state.description}
              name='description'
              onChange={handleChange}
            />
          </div>
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;

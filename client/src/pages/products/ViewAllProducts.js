import axios from "axios";
import React, { useEffect, useState } from "react";
import Axios from "axios";
function ViewAllProducts() {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const URL = "fetproduct url";
    Axios.get(URL)
      .then((products) => {
        setProducts(products);
        if (products.length === 0) {
          setMessage("No Products in database");
        }
      })
      .catch((error) => {
        setError("Something went wrong in fetching products");
        console.log(error);
      });
  }, []);

  const handleDelete = (productId) => {
    const URL = `locasddfadd/${productId}`;
    Axios.delete(URL)
      .then((data) => {
        setMessage("Delete success");
        const newProductArray = myArray.filter(function (obj) {
          //   Plesese confirm from postman for id
          return obj._id !== productId;
        });
        setProducts(newProductArray);
      })
      .catch((error) => {
        console.log(error);
        setMessage("Could not delete procutd");
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
        <span>View All Products</span>
        <table style={{ width: "100%" }}>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Desc</th>
            <th>Adction</th>
          </tr>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td onClick={handleDelete(product._id)}>DELETE</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default ViewAllProducts;

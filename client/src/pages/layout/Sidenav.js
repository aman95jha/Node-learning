import React from "react";

function Sidenav() {
  return (
    <div className='sidenav'>
      <div className='userInfo'>
        <span>username</span>
      </div>
      <span>DASHBOARD</span>
      <span>Add Product</span>
      <span>View all Products</span>
      <span>cart</span>
    </div>
  );
}

export default Sidenav;

import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import DashBoard from "./pages/products/DashBoard";
import AddProduct from "./pages/products/AddProduct";

// function getUserFromLocal() {
//   JSON.parse(localStorage.getItem("userinfo"));
// }

function Routing() {
  // const [user, setUser] = useState(null);

  // const userFromLocal = getUserFromLocal();
  // setUser(userFromLocal);

  return (
    <Switch>
      <Route path='/dashboard' exact component={DashBoard} />

      <Route path='/' exact component={Home} />
      <Route path='/Register' exact component={Register} />
      <Route path='/login' exact component={Login} />
      <Route path='/addProduct' exact component={AddProduct} />
    </Switch>
  );
}

export default Routing;

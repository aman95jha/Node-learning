import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
function Routing() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Register' exact component={Register} />
      <Route path='/login' exact component={Login} />
    </Switch>
  );
}

export default Routing;

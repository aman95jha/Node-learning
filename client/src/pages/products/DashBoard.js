import React from "react";
import AppBar from "../layout/AppBar";
import Sidenav from "../layout/Sidenav";

function DashBoard() {
  return (
    <div className='page-wrapper'>
      <Sidenav></Sidenav>
      <div className='main-content'>
        <AppBar></AppBar>
        {/* What ever  to be kept here */}
        <span>Dashboard</span>
      </div>
    </div>
  );
}

export default DashBoard;

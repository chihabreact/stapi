import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./LayOut.style.scss";
const LayOut = () => {
  return (
    <div className="layout">
      <nav>
        <NavLink to="/">
          <h1>CHIHAB' reviews</h1>
        </NavLink>
        <div className="link-container">
          <NavLink to="/">home</NavLink>
          <NavLink to="/details">reviews</NavLink>
          <NavLink to="/category">category</NavLink>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default LayOut;

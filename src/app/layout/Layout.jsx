import React from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="layout bg text">
      <div className="layout_grid">
        <div className="navbar bg_navbar">
          <Navbar />
        </div>
        <div className="container">
          <Input />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

import React from "react";
import Input from "../components/Input";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home bg text">
      <div className="grid">
        <div className="navbar bg_navbar">
          <Navbar />
        </div>
        <div className="container">
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Home;

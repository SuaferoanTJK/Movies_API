import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="home bg">
      <div className="navbar">
        <div className="bg_navbar">
          <div className="container">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

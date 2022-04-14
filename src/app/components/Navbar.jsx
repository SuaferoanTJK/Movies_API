import React from "react";
import Icons from "./Icons";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav_logo">
        <img src={Icons.Logo} alt="logo" />
      </div>
      <div className="nav_links">
        <div className="nav_link">
          <img src={Icons.NavHome} alt="Home" />
        </div>
        <div className="nav_link">
          <img src={Icons.NavMovies} alt="Home" />
        </div>
        <div className="nav_link">
          <img src={Icons.NavSeries} alt="Home" />
        </div>
        <div className="nav_link">
          <img src={Icons.NavBookmark} alt="Home" />
        </div>
      </div>
      <div className="nav_profile">
        <img src={Icons.Avatar} alt="profile picture" />
      </div>
    </div>
  );
};

export default Navbar;

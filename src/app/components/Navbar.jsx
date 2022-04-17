import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../redux/actions/moviesActions";
import Icons from "./Icons";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  return (
    <div className="nav">
      <div className="nav_logo">
        <img
          src={Icons.Logo}
          alt="Logo"
          onClick={() => {
            dispatch(changePage("/"));
            navigate("/");
          }}
        />
      </div>
      <div className="nav_links">
        <div className={page === "/" ? "nav_link active" : "nav_link"}>
          <img
            src={Icons.NavHome}
            alt="Home Link"
            onClick={() => {
              dispatch(changePage("/"));
              navigate("/");
            }}
          />
        </div>
        <div className={page === "/movies" ? "nav_link active" : "nav_link"}>
          <img
            src={Icons.NavMovies}
            alt="Movies Link"
            onClick={() => {
              dispatch(changePage("/movies"));
              navigate("/movies");
            }}
          />
        </div>
        <div className={page === "/series" ? "nav_link active" : "nav_link"}>
          <img
            src={Icons.NavSeries}
            alt="Series Link"
            onClick={() => {
              dispatch(changePage("/series"));
              navigate("/series");
            }}
          />
        </div>
        <div className={page === "/bookmark" ? "nav_link active" : "nav_link"}>
          <img
            src={Icons.NavBookmark}
            alt="Bookmark Link"
            onClick={() => {
              dispatch(changePage("/bookmark"));
              navigate("/bookmark");
            }}
          />
        </div>
      </div>
      <div className="nav_profile">
        <img src={Icons.Avatar} alt="profile picture" />
      </div>
    </div>
  );
};

export default Navbar;

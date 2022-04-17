import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Icons from "./Icons";
import { searchData } from "../redux/actions/moviesActions";
const Input = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="searchFilter">
      <button
        className="searchFilter_btn"
        onClick={() => {
          dispatch(searchData(search));
          console.log(`Request endpoint by click: ${search}`);
        }}
      >
        <img src={Icons.IconSearch} alt="Search Icon" />
      </button>
      <input
        className="searchFilter_input"
        type="text"
        placeholder="Search for movies or TV series"
        onChange={(search) => {
          setSearch(search.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log(`Request endpoint by enter key: ${search}`);
          }
        }}
      />
    </div>
  );
};

export default Input;

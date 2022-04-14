import React, { useState } from "react";
import Icons from "./Icons";

const Input = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="searchFilter">
      <button
        className="searchFilter_btn"
        onClick={() => {
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

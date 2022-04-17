import React from "react";
import { useSelector } from "react-redux";
import Card from "./Cards/Card";

const SearchResult = () => {
  const searchData = useSelector((state) => state.search);

  return (
    <>
      <h2 className="page_title">{`Found ${searchData.length} results`}</h2>
      <div className="grid ">
        {searchData.map((movie, index) => (
          <Card key={index} {...movie} />
        ))}
      </div>
    </>
  );
};

export default SearchResult;

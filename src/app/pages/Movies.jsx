import React from "react";
import { useSelector } from "react-redux";
import Layout from "../layout/Layout";
import InitialData from "../utils/InitialData";
import Card from "../components/Cards/Card";
import SearchResult from "../components/SearchResult";

const Movies = () => {
  InitialData();
  const data = useSelector((state) => state.all);
  const searchData = useSelector((state) => state.search);

  const movies = data.filter((element) => element.category === "Movie");

  return (
    <Layout>
      <div className="page">
        {searchData.length === 0 ? (
          <>
            <h2 className="page_title">Movies</h2>
            <div className="grid ">
              {movies.map((movie, index) => (
                <Card key={index} {...movie} />
              ))}
            </div>
          </>
        ) : (
          <SearchResult />
        )}
      </div>
    </Layout>
  );
};

export default Movies;

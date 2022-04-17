import React from "react";
import { useSelector } from "react-redux";
import Layout from "../layout/Layout";
import InitialData from "../utils/InitialData";
import Card from "../components/Cards/Card";
import SearchResult from "../components/SearchResult";

const Bookmark = () => {
  InitialData();
  const data = useSelector((state) => state.all);
  const searchData = useSelector((state) => state.search);
  const bookmark = data.filter((element) => element.isBookmarked === true);

  const bookmarkMovies = bookmark.filter(
    (bookmark) => bookmark.category === "Movie"
  );
  const bookmarkSeries = bookmark.filter(
    (bookmark) => bookmark.category === "TV Series"
  );

  return (
    <Layout>
      <div className="page">
        {searchData.length === 0 ? (
          <>
            <h2 className="page_title">Bookmarked Movies</h2>
            <div className="grid ">
              {bookmarkMovies.map((movie, index) => (
                <Card key={index} {...movie} />
              ))}
            </div>
            <h2 className="page_title page_title-sub">Bookmarked TV Series</h2>
            <div className="grid ">
              {bookmarkSeries.map((movie, index) => (
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

export default Bookmark;

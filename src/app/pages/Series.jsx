import React from "react";
import { useSelector } from "react-redux";
import Layout from "../layout/Layout";
import InitialData from "../utils/InitialData";
import Card from "../components/Cards/Card";

const Series = () => {
  InitialData();
  const data = useSelector((state) => state.all);
  const searchData = useSelector((state) => state.search);

  const series = data.filter((element) => element.category === "TV Series");

  return (
    <Layout>
      <div className="page">
        {searchData.length === 0 ? (
          <>
            <h2 className="page_title">Series</h2>
            <div className="grid ">
              {series.map((movie, index) => (
                <Card key={index} {...movie} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="page_title">
              {`Found ${searchData.length} results`}
            </h2>
            <div className="grid ">
              {searchData.map((movie, index) => (
                <Card key={index} {...movie} />
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Series;

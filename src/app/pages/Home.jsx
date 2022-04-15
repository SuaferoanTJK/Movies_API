import React from "react";
import CardTrending from "../components/Cards/CardTrending";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <h2 className="home_title">Trending</h2>
        <div className="home_cards">
          <CardTrending />
          <CardTrending />
          <CardTrending />
          <CardTrending />
          <CardTrending />
        </div>
      </div>
    </Layout>
  );
};

export default Home;

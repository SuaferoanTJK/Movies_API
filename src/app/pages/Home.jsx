import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import Layout from "../layout/Layout";
import InitialData from "../utils/InitialData";
import CardTrending from "../components/Cards/CardTrending";
import Card from "../components/Cards/Card";
import SearchResult from "../components/SearchResult";
import "swiper/css";

const Home = () => {
  InitialData();
  const data = useSelector((state) => state.all);
  const searchData = useSelector((state) => state.search);

  const trending = data.filter((movie) => movie.isTrending === true);
  const notTrending = data.filter((movie) => movie.isTrending !== true);

  return (
    <Layout>
      <div className="page">
        {searchData.length === 0 ? (
          <>
            <h2 className="page_title">Trending</h2>
            <div className="page_cards">
              <Swiper
                modules={[Mousewheel]}
                spaceBetween={15}
                loop={true}
                mousewheel={true}
                breakpoints={{
                  550: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                className="home_swipe"
              >
                {trending.map((movie, index) => (
                  <SwiperSlide key={index}>
                    <CardTrending {...movie} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <h2 className="page_title page_title-sub">Recommended for you</h2>
            <div className="grid ">
              {notTrending.map((movie, index) => (
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

export default Home;

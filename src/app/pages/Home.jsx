import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import Layout from "../layout/Layout";
import InitialData from "../utils/InitialData";
import CardTrending from "../components/Cards/CardTrending";
import Card from "../components/Cards/Card";
import "swiper/css";

const Home = () => {
  InitialData();
  const trending = useSelector((state) => state.trending);
  const all = useSelector((state) => state.all);
  const searchData = useSelector((state) => state.search);
  return (
    <Layout>
      <div className="home">
        {searchData.length === 0 ? (
          <>
            <h2 className="home_title">Trending</h2>
            <div className="home_cards">
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
            <h2 className="home_title home_title-sub"> Recommended for you</h2>
            <div className="grid ">
              {all.map((movie, index) => (
                <Card key={index} {...movie} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h2 className="home_title">
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

export default Home;

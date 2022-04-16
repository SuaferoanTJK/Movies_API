import React from "react";
import CardTrending from "../components/Cards/CardTrending";
import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import InitialData from "../utils/InitialData";
import { useSelector } from "react-redux";
import "swiper/css";

const Home = () => {
  InitialData();
  const trending = useSelector((state) => state.trending);

  return (
    <Layout>
      <div className="home">
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
      </div>
    </Layout>
  );
};

export default Home;

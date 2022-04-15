import React, { useEffect, useState } from "react";
import CardTrending from "../components/Cards/CardTrending";
import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  let slides = 1;
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  if (windowWidth > 550 && windowWidth < 1024) {
    slides = 2;
  }
  if (windowWidth >= 1024) {
    slides = 3;
  }

  return (
    <Layout>
      <div className="home">
        <h2 className="home_title">Trending</h2>
        <div className="home_cards">
          <Swiper
            slidesPerView={slides}
            spaceBetween={40}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="home_swipe"
          >
            <SwiperSlide>
              <CardTrending />
            </SwiperSlide>
            <SwiperSlide>
              <CardTrending />
            </SwiperSlide>
            <SwiperSlide>
              <CardTrending />
            </SwiperSlide>
            <SwiperSlide>
              <CardTrending />
            </SwiperSlide>
            <SwiperSlide>
              <CardTrending />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

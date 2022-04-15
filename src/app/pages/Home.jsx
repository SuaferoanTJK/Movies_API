import React, { useEffect, useState } from "react";
import CardTrending from "../components/Cards/CardTrending";
import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getTrending } from "../redux/actions/moviesActions";

const Home = () => {
  let slides = 1;
  const [windowWidth, setWindowWidth] = useState(0);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const trending = useSelector((state) => state.trending);
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  useEffect(() => {
    if (movies.length === 0) {
      return null;
    } else {
      dispatch(getTrending());
    }
  }, [movies]);

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

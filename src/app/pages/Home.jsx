import React, { useEffect } from "react";
import CardTrending from "../components/Cards/CardTrending";
import Layout from "../layout/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/actions/moviesActions";
import "swiper/css";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const trending = useSelector((state) => state.trending);

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <Layout>
      <div className="home">
        <h2 className="home_title">Trending</h2>
        <div className="home_cards">
          <Swiper
            modules={[Mousewheel]}
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

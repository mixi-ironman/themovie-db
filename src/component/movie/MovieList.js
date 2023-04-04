import React, { useEffect, useState } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/scss";
import MovieCart from "./MovieCart";
import { useSWRConfig } from "swr";
import { fetcher } from "../../config/config";

//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWRConfig(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=17b91188a0eff4c90437ec7191f712fb",
    fetcher
  );

  useEffect(() => {
    setMovies(data?.results);
  }, [data]);

  console.log(movies);
  return (
    <>
      <div className="movie-list">
        <Swiper grapCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          <SwiperSlide className="wiper-slide">
            <MovieCart></MovieCart>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCart></MovieCart>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCart></MovieCart>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCart></MovieCart>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCart></MovieCart>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCart></MovieCart>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCart></MovieCart>
          </SwiperSlide>
          <SwiperSlide>
            <MovieCart></MovieCart>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MovieList;

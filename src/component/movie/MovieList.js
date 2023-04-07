import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import useSWR from "swr";
import { apiKey, fetcher, tmbAPI } from "../../config/config";
import MovieCart from "./MovieCart";
// import {tmbAPI} from '../'
//https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
const MovieList = ({ type = "now_playing" }) => {
  const [movies, setMovies] = useState([]);

  const { data, error } = useSWR(tmbAPI.getMovieList(type), fetcher);

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  // console.log(movies);

  // console.log(data?.results);

  // useEffect(() => {
  //   async function fetchMovies() {
  //     try {
  //       //bản chất khi gọi fetch thì nó trả về 1 dữ liệu response nên mình gán vào biến
  //       const response = await fetch(
  //         "https://api.themoviedb.org/3/movie/now_playing?api_key=17b91188a0eff4c90437ec7191f712fb"
  //       );
  //       const data = await response.json();
  //       console.log(useActionData);
  //       setMovies(data.results);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchMovies();
  // }, [movies]);

  return (
    <>
      <div className="movie-list">
        <Swiper grapcursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
          {movies.length > 0 &&
            movies.map((item) => (
              <SwiperSlide className="wiper-slide" key={item.id}>
                <MovieCart item={item}></MovieCart>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default MovieList;

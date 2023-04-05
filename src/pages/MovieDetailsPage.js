import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCart from "../component/movie/MovieCart";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const { data } = useSWR(
    ` https://api.themoviedb.org/3/movie/${movieId}?api_key=17b91188a0eff4c90437ec7191f712fb`,
    fetcher
  );
  if (!data) return null;
  const { backdrop_path, poster_path } = data;
  return (
    <>
      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div
          className="object-cover w-full h-full bg-no-repeat bg-cover "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>

        <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[170px] relative z-10 pb-10">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt=""
            className="object-cover w-full h-full rounded-xl"
          />
        </div>

        <h1 className="mb-10 text-5xl font-bold text-center text-white ">
          {data.title}
        </h1>

        {data.genres.length > 0 && (
          <div className="flex items-center justify-center mb-10 gap-x-5">
            {data.genres.map((item) => (
              <span
                className="px-4 py-2 border border-y-yellow-400 rounded-xl"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        )}

        <p className=" mb-10 leading-relaxed max-w-[600px] text-center mx-auto">
          {data.overview}
        </p>

        <MovieCredits></MovieCredits>

        <MovieVideos></MovieVideos>

        <MovieSimilar></MovieSimilar>
      </div>
    </>
  );
};

export function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=17b91188a0eff4c90437ec7191f712fb`,
    fetcher
  );

  if (!data) return null;
  const { cast } = data;
  //   console.log({ data });
  if (!cast || cast.length <= 0) return null;
  //   const { profile_path } = cast;
  return (
    <div className="py-10">
      <h2 className="mb-10 text-5xl font-bold text-center text-white ">
        Casts
      </h2>
      <div className="grid grid-cols-4 gap-5 ">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original/${item?.profile_path}`}
              className="w-full h-[350px] object-cover rounded-lg"
              alt=""
            />
            <h3 className="text-xl">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MovieVideos() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=17b91188a0eff4c90437ec7191f712fb`,
    fetcher
  );

  if (!data) return null;
  //   console.log(data);
  const { results } = data;

  if (!results || results.length <= 0) return null;

  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {results.length >= 0 &&
          results.slice(0, 2).map((item) => (
            <div key={item.id}>
              <h3 className="inline-block p-1 mb-5 text-2xl font-medium text-purple-400 rounded bg-slate-50">
                {item.name}
              </h3>
              <div className="w-full aspect-video ">
                <iframe
                  width="850"
                  height="478"
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title="Restream hôm qua.............."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export function MovieSimilar() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=17b91188a0eff4c90437ec7191f712fb`,
    fetcher
  );

  if (!data) return null;
  //    console.log(data);
  const { results } = data;

  if (!results || results.length <= 0) return null;
  return (
    <>
      <div className="py-10">
        <h2 className="mb-10 text-3xl font-medium">Similar movies</h2>

        <div className="movie-list">
          <Swiper grapCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {results.map((item) => (
              <SwiperSlide className="wiper-slide" key={item.id}>
                <MovieCart item={item}></MovieCart>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MovieDetailsPage;

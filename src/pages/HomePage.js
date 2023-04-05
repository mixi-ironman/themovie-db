import React from "react";
import MovieList from "../component/movie/MovieList";
const HomePage = () => {
  return (
    <>
      {/* <Banner></Banner> */}
      <section className="mb-10 movie-layout page-container">
        <h2 className="text-white capitalize mb-510text-3xl">Now playing</h2>
        <MovieList></MovieList>
      </section>
      <section className="mb-10 movie-layout page-container">
        <h2 className="text-white capitalize mb-510text-3xl">Top trending</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      <section className="mb-10 movie-layout page-container">
        <h2 className="text-white capitalize mb-510text-3xl">Popular</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
};

export default HomePage;

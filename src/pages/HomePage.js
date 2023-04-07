import React from "react";
import MovieList from "../component/movie/MovieList";
import Footer from "../Layout/Footer/Footer";
const HomePage = () => {
  return (
    <>
      <div className=" page-container">
        <section className="mb-10 movie-layout ">
          <h2 className="mb-10 text-3xl text-white capitalize">Now playing</h2>
          <MovieList></MovieList>
        </section>
        <section className="mb-10 movie-layout ">
          <h2 className="mb-10 text-3xl text-white capitalize">Top trending</h2>
          <MovieList type="top_rated"></MovieList>
        </section>
        <section className="mb-10 movie-layout ">
          <h2 className="mb-10 text-3xl text-white capitalize">Popular</h2>
          <MovieList type="popular"></MovieList>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
};

export default HomePage;

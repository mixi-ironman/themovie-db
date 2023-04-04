import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "swiper/scss";

import MovieList from "./component/movie/MovieList";

function App() {
  const isActive = true; // hoặc false tùy theo trạng thái của NavLink

  return (
    <Fragment>
      <header className="flex items-center justify-center py-10 header gap-x-5 ">
        <NavLink
          to="/Home"
          className={`text-primary ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>

        <NavLink
          to="/Movie"
          // className={`text-primary ${isActive ? "" : "active"}`}
        >
          Movie
        </NavLink>
      </header>

      <section className="banner h-[400px] mb-10 page-container page-container-fluid">
        <div className="relative w-full h-full bg-red-200 rounded">
          <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-black bg-opacity-1"></div>
          <img
            src="https://kenh14cdn.com/thumb_w/660/2018/5/16/photo-1-15264888091191389310722.jpg"
            alt=""
            className="object-cover w-full h-full rounded"
          />
          <div className="absolute w-full text-white left-5 bottom-5">
            <h2 className="mb-10 text-3xl font-bold ml-45">I am Ironman </h2>
            <div className="flex items-center mb-8 gap-x-3">
              <span className="px-4 py-2 border border-white rounded-md">
                IRONMAN ONE
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                IRONMAN TWO
              </span>
              <span className="px-4 py-2 border border-white rounded-md">
                IRONMAN THREE
              </span>
            </div>

            <button className="px-6 py-3 font-medium bg-orange-600 rounded-lg bg-primary ">
              Watch Now
            </button>
          </div>
        </div>
      </section>

      <section className="mb-10 movie-layout page-container">
        <h2 className="text-white capitalize mb-510text-3xl">Now playing</h2>
        <MovieList></MovieList>
      </section>

      <section className="mb-10 movie-layout page-container">
        <h2 className="text-white capitalize mb-510text-3xl">Top trending</h2>

        <div className="grid grid-cols-4 gap-2 movie-list"></div>
      </section>
    </Fragment>
  );
}

export default App;

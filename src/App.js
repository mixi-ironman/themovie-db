import { Fragment } from "react";
import "swiper/scss";

import { Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import Banner from "./component/Banner/Banner";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/Movies";
import MovieDetailsPage from "./pages/MovieDetailsPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <HomePage />
              </>
            }
          ></Route>
          <Route path="/movie" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

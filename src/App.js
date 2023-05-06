import { Fragment, lazy, Suspense } from "react";
import "swiper/scss";

import { Route, Routes } from "react-router-dom";
import Main from "./Layout/Main";
import Banner from "./component/Banner/Banner";
// import HomePage from "./pages/HomePage";
// import MoviePage from "./pages/MoviePage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePageV2 = lazy(() => import("./pages/MoviePageV2"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="/movie" element={<MoviePageV2></MoviePageV2>}></Route>
            <Route
              path="/contact"
              element={<div>Comming soom....</div>}
            ></Route>
            <Route
              path="/movie/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;

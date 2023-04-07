import React, { useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";
import { v4 as uuid } from "uuid";
import Footer from "../Layout/Footer/Footer";
import Button from "../component/button/Button";
import MovieCart from "../component/movie/MovieCart";
import { fetcher, tmbAPI } from "../config/config";
import useDebounce from "../hooks/useDebounce";
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

const itemsPerPage = 10;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");

  //initial call api search
  const [url, setUrl] = useState(tmbAPI.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => url.replace("page=1", `page=${index + 1}`),
    fetcher
  );

  //handle loadmore
  let movies = data
    ? data.reduce((total, item) => total.concat(item.results), [])
    : [];
  const loading = !data && !error;
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);
  //Call api Search
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);

  return (
    <div className="py-4 page-container">
      <div className="flex mb-10">
        <input
          type="text"
          className="w-[500px] p-4 text-white rounded-md outline-none bg-slate-800"
          placeholder="Search..."
          onChange={handleFilterChange}
        />
        <button className="p-4 text-white rounded-md bg-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      {loading && (
        <div className="w-10 h-10 mx-auto border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
      )}

      <div className="grid grid-cols-5 gap-4">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => <MovieCart key={uuid} item={item}></MovieCart>)}
      </div>

      <div className="mt-10 text-cen">
        <Button
          onClick={() => (isReachingEnd ? null : setSize(size + 1))}
          disabled={isReachingEnd}
          className={`${isReachingEnd ? "bg-slate-50" : null}`}
        >
          Load more
        </Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MoviePage;

/* const fetchMovies = async () => {
      // delay 3 giây trước khi fetch
      await new Promise(resolve => setTimeout(resolve, 3000));
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key={YOUR_API_KEY}');
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    };

    fetchMovies(); */
/*



import useSWR from 'swr';
import { useState, useEffect } from 'react';

function fetcher(url) {
  return fetch(url).then(res => res.json());
}

function useDelayedSWR(key, options = {}) {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayed(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return useSWR(delayed ? null : key, fetcher, {
    ...options,
    refreshInterval: delayed ? null : options.refreshInterval,
    fallback: <div>Loading...</div>,
  });
}

function MyComponent() {
  const { data } = useDelayedSWR('/api/data', { refreshInterval: 5000 });

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div></div>;
}

*/

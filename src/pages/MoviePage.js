import React, { useEffect, useState } from "react";
import MovieList from "../component/movie/MovieList";
import { fetcher, tmbAPI } from "../config/config";
import useSWR from "swr";
import MovieCart from "../component/movie/MovieCart";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import Button from "../component/button/Button";
import useSWRInfinite from "swr/infinite";
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false

// const pageCount = 5;
const itemsPerPage = 20;
const MoviePage = () => {
  const [nextPage, setNextPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [pageCount, setPageCount] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);

  //initial call api search
  const [url, setUrl] = useState(tmbAPI.getMovieList("popular", nextPage));
  const filterDebounce = useDebounce(filter, 500);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);

  const loading = !data && !error;

  //Call api Search
  useEffect(() => {
    if (filterDebounce) {
      setUrl(tmbAPI.getMovieSearch(filterDebounce, nextPage));
    } else {
      setUrl(tmbAPI.getMovieList("popular", nextPage));
    }
  }, [filterDebounce, nextPage]);

  //Handle
  // const handleNextPage = (index) => {
  //   setNextPage(index + 1);
  // };

  const movies = data?.results || [];
  // const { page, total_pages } = data;
  useEffect(() => {
    if (!data || data?.total_results.length <= 0) return;
    setPageCount(Math.ceil(data?.total_results / itemsPerPage));
  }, [data, itemOffset]);

  const handlePageClick = (event) => {
    const newOffset = (event.select * itemsPerPage) % data?.total_results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };

  return (
    <div className="py-10 page-container">
      <div className="flex mb-10 ">
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

      <div className="grid grid-cols-4 gap-5">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <MovieCart key={item.id} item={item}></MovieCart>
          ))}
      </div>

      {/* Phân trang sử dụng pagination react  */}
      <div className="pt-10">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          className="pagination"
        />
      </div>

      {/* Phân trang code thuần  */}

      {/* <div className="flex items-center justify-center hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer "
          onClick={() => {
            setNextPage(nextPage - 1);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>

        {new Array(pageCount).fill(0).map((item, index) => (
          <span
            key={index}
            className="p-2 mx-2 my-2 leading-none text-black bg-white rounded cursor-pointer inline-pointer"
            onClick={() => handleNextPage(index)}
          >
            {index + 1}
          </span>
        ))}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer "
          onClick={() => setNextPage(nextPage + 1)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div> */}
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

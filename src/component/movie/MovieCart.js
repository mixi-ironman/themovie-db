import React from "react";

const MovieCart = ({ item }) => {
  return (
    <>
      <div className="flex flex-col h-full p-5 rounded-lg select-none bg-stone-950 movie-cart">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
          className="object-cover w-full h-[250px] mb-5 rounded-lg"
        />
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
          <div className="flex justify-between mb-10 text-sm opacity-50 item-center">
            <span>{new Date(item.release_date).getFullYear()}</span>
            <span>{item.vote_average}</span>
          </div>

          <button className="px-6 py-3 mt-auto capitalize rounded-lg bg-primary">
            Watch now
          </button>
        </div>
      </div>
    </>
  );
};

export default MovieCart;

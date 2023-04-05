import React from "react";

const BannerItem = ({ item }) => {
  return (
    <>
      <div className="relative w-full h-full bg-red-200 rounded">
        <div className="absolute inset-0 rounded-lg overlay bg-gradient-to-t from-black bg-opacity-1"></div>
        {/* <div
          className="bg-center bg-cover py-1/2"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${item.poster_path})`,
          }}
        ></div> */}
        <img
          alt=""
          className="object-cover w-full h-[400px]"
          src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
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

          <button className="px-6 py-3 font-medium rounded-lg bg-primary ">
            Watch Now
          </button>
        </div>
      </div>
    </>
  );
};

export default BannerItem;

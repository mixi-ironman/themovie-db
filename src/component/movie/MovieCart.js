import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmbAPI } from "../../config/config";

const MovieCart = ({ item }) => {
  const navigate = useNavigate();

  //handleClick
  const handleClick = () => {
    navigate(`/movie/${item.id}`);
  };
  return (
    <>
      <div className="flex flex-col h-full p-5 transition-transform duration-300 ease-in-out rounded-lg select-none movie-card bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 bg-slate-30 hover:scale-90">
        <img
          src={tmbAPI.image500(item.poster_path)}
          alt=""
          className="object-cover w-full h-[250px] mb-5 rounded-lg  "
        />
        <div className="flex flex-col flex-1">
          <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
          <div className="flex justify-between mb-10 text-sm opacity-50 item-center">
            <span>{new Date(item.release_date).getFullYear()}</span>
            <span>{item.vote_average}</span>
          </div>

          <Button bgColor="secondary" onClick={handleClick}>
            Watch now
          </Button>
        </div>
      </div>
    </>
  );
};

export default MovieCart;

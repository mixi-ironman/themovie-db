import React from "react";
import { NavLink } from "react-router-dom";

// const isActive = true; // hoặc false tùy theo trạng thái của NavLink
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-center py-10 header gap-x-5 ">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/movie"
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          // className={`text-primary ${isActive ? "" : "active"}`}
        >
          Movie
        </NavLink>
      </header>
    </>
  );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../component/button/Button";

// const isActive = true; // hoặc false tùy theo trạng thái của NavLink
const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between py-10 page-container header gap-x-5 ">
        <NavLink to="/">
          <img
            // src="https://i.pinimg.com/564x/c1/ea/30/c1ea30abff0ca38587887f35c2f47c25.jpg"
            src="https://i.pinimg.com/564x/a7/a5/96/a7a5963fbf8f65f0e91f387774c1783e.jpg"
            alt=""
            className=" h-[74px] w-[200px] object-cover  object-center rounded-2xl"
          />
        </NavLink>
        <div className="flex w-[360px] items-center justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-primary text-xl font-bold" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movie"
            className={({ isActive }) =>
              isActive ? "text-primary text-xl font-bold" : ""
            }
            // className={`text-primary ${isActive ? "" : "active"}`}
          >
            Movie
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-primary text-xl font-bold" : ""
            }
            // className={`text-primary ${isActive ? "" : "active"}`}
          >
            Contact
          </NavLink>
          <Button>Đăng nhập</Button>
        </div>
      </header>
    </>
  );
};

export default Header;

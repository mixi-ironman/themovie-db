import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
};

export default Main;

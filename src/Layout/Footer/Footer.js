import React from "react";

import "./Footer.scss";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div
      className="w-full overlay bg-gradient-to-t from-black bg-opacity-1 footer"
      style={{
        backgroundImage:
          // "url('https://wall.vn/wp-content/uploads/2020/02/hinh-nen-iron-man-6.jpg')",
          "url('https://img1.kienthucvui.vn/uploads/2021/01/10/hinh-nen-iron-man-full-hd_024701560.jpg')",
      }}
    >
      <div className="container footer__content">
        <div className="footer__content__logo">
          <div className="flex items-center justify-center logo">
            <img
              src="https://i.pinimg.com/564x/ce/69/e7/ce69e7b7b9a00ed17df2e4978ede9fca.jpg"
              alt=""
              className="h-[60px] rounded-full mr-2"
            />
            <Link to="/" className="text-2xl font-bold text-primary">
              FROM MIXIGAMING WITH LOVE
            </Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>

          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

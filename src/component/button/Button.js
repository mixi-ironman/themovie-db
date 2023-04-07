import React from "react";

const Button = ({
  onClick,
  type = "button",
  bgColor = "bg-primary   ",
  className = "",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;

    case "secondary":
      bgClassName = "bg-secondary";
      break;

    default:
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 mt-auto capitalize rounded-lg bg-primary ${bgClassName}`}
    >
      {children}
    </button>
  );
};

export default Button;

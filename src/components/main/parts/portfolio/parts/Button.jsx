import React from "react";

const Button = ({ currentIndex, boundaryIndex, changeSlide, icon }) => {
  return (
    <button
      type="button"
      className={`text-4xl lg:text-8xl hover:scale-150 ${
        currentIndex === boundaryIndex && "invisible"
      }`}
      onClick={changeSlide}
    >
      {icon}
    </button>
  );
};

export default Button;

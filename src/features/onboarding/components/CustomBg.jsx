import React from "react";

const CustomBg = ({ text }) => {
  return (
    <div className="custom-bg">
      <div className="custom-bg-circle" />

      <div className="custom-bg-ellipse">
        <img src="/custom-bg/ellipse2.svg" alt="ellipse" />
      </div>

      <div className="custom-bg-parallelogram">
        <img
          src="/custom-bg/parallelogram.svg"
          alt="parallelogram"
          className="size-full object-cover object-center"
        />
      </div>

      <div className="w-[320px] lg:w-[501px] mx-auto">
        <h1 className="board__brief">{text}</h1>
      </div>
    </div>
  );
};

export default CustomBg;

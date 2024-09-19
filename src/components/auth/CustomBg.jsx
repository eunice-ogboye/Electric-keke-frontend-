import React from "react";

const CustomBg = ({ children }) => {
  return (
    <div className="custom-bg relative h-full w-full overflow-hidden bg-eco-green isolate flex-center px-24">
      <div className="w-[498px] h-[524px] rounded-full bg-[#61B236] absolute -top-[96px] left-[299px] -z-10" />
      <div className="absolute h-[568px] w-[769px] -top-[76px] -left-[88px] -z-50">
        <img src="/custom-bg/ellipse2.svg" alt="ellipse" />
      </div>
      <div className="absolute top-[516px] h-[506px] md:w-[659px] -z-20 w-full">
        <img
          src="/custom-bg/parallelogram.svg"
          alt="parallelogram"
          className="size-full object-cover object-center"
        />
      </div>
      {children}
    </div>
  );
};

export default CustomBg;

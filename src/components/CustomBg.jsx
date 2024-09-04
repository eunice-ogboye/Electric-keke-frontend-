import React from "react";

const CustomBg = ({ children }) => {
  return (
    <div className="custom-bg relative size-full overflow-hidden bg-eco-green isolate flex-center px-24">
      <div className="size-[25vw] rounded-full bg-[#61B236] absolute -top-[96px] left-[45vh] -z-10" />
      <div className="absolute h-[55vh] w-full -top-[76px] -left-[6.5vw] -z-50">
        <img src="/custom-bg/ellipse2.svg" alt="ellipse" />
      </div>
      <div className="absolute -bottom-5 h-[506px] -z-20 w-full">
        <img src="/custom-bg/parallelogram.svg" alt="parallelogram" className="size-full object-cover object-center" />
      </div>
      {children}
    </div>
  );
};

export default CustomBg;

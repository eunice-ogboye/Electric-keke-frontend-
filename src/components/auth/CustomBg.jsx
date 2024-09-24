import React from "react";

const CustomBg = ({ children }) => {
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
      {children}
    </div>
  );
};

export default CustomBg;

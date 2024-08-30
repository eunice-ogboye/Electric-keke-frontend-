import React from "react";

const Logo = ({ logoClassName, titleClassName }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={logoClassName || "size-28"}>
        <img src="/logo.svg" alt="logo" className="size-full" />
      </div>
      <h1 className={titleClassName || "font-bold text-6xl text-white mt-10"}>
        EcoRide
      </h1>
    </div>
  );
};

export default Logo;

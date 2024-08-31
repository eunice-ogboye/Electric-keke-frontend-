import React, { useEffect } from "react";

const Logo = ({ logoClassName, titleClassName, main }) => {
  // useEffect(() => {
  //   console.log(window.innerHeight, window.innerWidth)
  // }, [])
  const LogoMain = () => {
    return (
      <div>
        <img src="/logo2.svg" alt="logo" />
      </div>
    );
  };
  const Logo = () => {
    return (
      <div className="flex flex-col items-center">
        <div className={logoClassName || "size-28"}>
          <img src="/logo.svg" alt="logo" className="size-full" />
        </div>
        <h1
          className={`${
            titleClassName || "text-white"
          } font-bold font-montserrat text-6xl  mt-10`}
        >
          EcoRide
        </h1>
      </div>
    );
  };
  return main ? LogoMain() : Logo();
};

export default Logo;

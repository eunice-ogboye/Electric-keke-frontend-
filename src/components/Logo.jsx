import React, { useEffect } from "react";

const Logo = ({ logoClassName, className, main, dark }) => {
  return (
    <div className={className}>
      <img src="/logo.svg" alt="logo" className="size-full" />
    </div>
  );
};

export default Logo;

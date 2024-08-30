import React from "react";
import Logo from "./Logo";

const Overlay = ({ className }) => {
  return (
    <div className={className}>
      <Logo />
    </div>
  );
};

export default Overlay;

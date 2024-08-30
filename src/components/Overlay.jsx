import React from "react";
import Logo from "./Logo";

const Overlay = ({ className }) => {
  return (
    <div className={className}>
      <div className="rounded-full size-11 bg-white flex-center absolute top-10 left-10">
        <img src="/cancel.svg" alt="cancel" />
      </div>
      <Logo />
    </div>
  );
};

export default Overlay;

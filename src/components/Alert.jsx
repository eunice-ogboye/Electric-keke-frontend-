import React from "react";

const Alert = ({ type, message }) => {
  return (
    <div className="flex items-center justify-between">
      <p>{message}</p>
      <div className="rounded-full bg-pgreen3 size-10 flex-center">
        <img src="/tick.svg" alt="tick" />
      </div>
    </div>
  );
};

export default Alert;

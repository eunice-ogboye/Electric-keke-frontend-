import React from "react";

const ProgressLine = ({ success, className }) => {
  return (
    <div className={className || "size-[40px] flex-center"}>
      <img
        src={`/progress-line${success ? "-green" : ""}.svg`}
        alt="progress line"
        className="size-full"
      />
    </div>
  );
};

export default ProgressLine;

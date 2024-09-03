import React from "react";

const Togglers = ({
  color,
  text1,
  handleClick1,
  text2,
  handleClick2,
  isConditionTrue,
}) => {
  const toggleColor = {
    color1: {
      one: isConditionTrue
        ? "border-b-pgreen text-pgreen"
        : "text-white border-b-base-white",
      two: isConditionTrue
        ? "text-white border-b-base-white"
        : "border-b-pgreen text-pgreen",
    },
    color2: {
      one: isConditionTrue
        ? "border-b-pgreen text-pgreen"
        : "text-neutral border-b-neutral",
      two: isConditionTrue
        ? "text-neutral border-b-neutral"
        : "border-b-pgreen text-pgreen",
    },
  };
  const TogglerStraight = () => {
    return (
      <div className="flex-center mt-10">
        <button
          className={`border-b  font-bold text-base w-[180px] pb-4 ${toggleColor[color].one}`}
          onClick={handleClick1}
        >
          {text1}
        </button>
        <button
          className={`border-b  font-bold text-base w-[180px] pb-4 ${toggleColor[color].two}`}
          onClick={handleClick2}
        >
          {text2}
        </button>
      </div>
    );
  };
  return TogglerStraight();
};

export default Togglers;

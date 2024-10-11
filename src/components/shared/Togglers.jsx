import React from "react";

const Togglers = ({
  color,
  text1,
  handleClick1,
  text2,
  handleClick2,
  isConditionTrue,
  font,
  className,
  btnClassName,
}) => {
  const toggleColor = {
    color1: {
      one: isConditionTrue
        ? "border-b-basic text-basic"
        : "text-white border-b-eco-white",
      two: isConditionTrue
        ? "text-white border-b-eco-white"
        : "border-b-basic text-basic",
    },
    color2: {
      one: isConditionTrue
        ? "border-b-basic text-basic"
        : "text-neutral-500 border-b-neutral-500",
      two: isConditionTrue
        ? "text-neutral-500 border-b-neutral-500"
        : "border-b-basic text-basic",
    },
  };
  const TogglerStraight = () => {
    return (
      <div className={className || "flex-center mt-10"}>
        <button
          className={`border-b ${
            btnClassName || "font-bold text-base w-[180px] font-montserrat"
          } pb-4 ${font ? font : "font-montserrat"} ${toggleColor[color].one}`}
          onClick={handleClick1}
        >
          {text1}
        </button>

        <button
          className={`${
            btnClassName || "font-bold text-base w-[180px] font-montserrat"
          } border-b  pb-4 ${toggleColor[color].two}`}
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

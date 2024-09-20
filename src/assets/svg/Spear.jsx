import React from "react";

const Spear = ({ color, type = "right" }) => {
  const Right = () => {
    return (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_388_438)">
          <path
            opacity="0.5"
            d="M16.375 8.0625H1.375M1.375 8.0625L7.9375 14.625M1.375 8.0625L7.9375 1.5"
            stroke={color || "#898483"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_388_438">
            <rect
              width="17"
              height="15"
              fill="white"
              transform="translate(0.375 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };

  const Left = () => {
    return (
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_388_438)">
          <path
            opacity="0.5"
            d="M16.375 8.0625H1.375M1.375 8.0625L7.9375 14.625M1.375 8.0625L7.9375 1.5"
            stroke={color || "#898483"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_388_438">
            <rect
              width="17"
              height="15"
              fill="white"
              transform="translate(0.375 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };
  return type === "right" ? Right() : Left();
};

export default Spear;

import React from "react";

const Star = ({ size = 20, rated }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.8829 0.902344L39.2752 21.9036H63.1974L43.844 34.883L51.2363 55.8843L31.8829 42.9048L12.5294 55.8843L19.9218 34.883L0.568359 21.9036H24.4905L31.8829 0.902344Z"
        fill={rated ? "#EDA145" : "#E3E3E3"}
      />
    </svg>
  );
};

export default Star;

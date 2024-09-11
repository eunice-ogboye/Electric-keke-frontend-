import React from "react";

const Loader = ({ size }) => {
  const divide = size / 2;

  return (
    <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="loader" x1="100%" x2="0%" y1="100%" y2="0%">
          <stop offset="0%" stop-color="yellow" />
          <stop offset="50%" stop-color="white" />
          <stop offset="100%" stop-color="white" />
        </linearGradient>
      </defs>
      <circle
        cx={divide}
        cy={divide}
        r={divide}
        // stroke-width="4"
        fill="url(#loader)"
      >
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="2s"
          type="rotate"
          from={`0 ${divide} ${divide}`}
          to={`360 ${divide} ${divide}`}
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx={divide}
        cy={divide}
        r={divide / 2}
        stroke-width="4"
        fill="white"
      />
    </svg>
  );
};

export default Loader;

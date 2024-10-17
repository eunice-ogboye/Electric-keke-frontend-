import React from "react";

const Way = ({ way }) => {
  return (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.5"
        width="40"
        height="40"
        rx="10"
        fill={way ? "#77BB77" : "#898483"}
      />
      <rect
        width="30"
        height="30"
        transform="translate(5 5.5)"
        fill={way ? "#77BB77" : "#898483"}
      />
      <path
        d="M27.575 34.25H29.65C30.7 34.25 31.5625 33.4375 31.6875 32.4125L33.75 11.8125H27.5V6.75H25.0375V11.8125H18.825L19.2 14.7375C21.3375 15.325 23.3375 16.3875 24.5375 17.5625C26.3375 19.3375 27.575 21.175 27.575 24.175V34.25ZM6.25 33V31.75H25.0375V33C25.0375 33.675 24.475 34.25 23.75 34.25H7.5C6.8125 34.25 6.25 33.675 6.25 33ZM25.0375 24.25C25.0375 14.25 6.25 14.25 6.25 24.25H25.0375ZM6.25 26.75H25V29.25H6.25V26.75Z"
        fill="white"
      />
    </svg>
  );
};

export default Way;

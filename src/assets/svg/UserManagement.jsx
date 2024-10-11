import React from "react";

const UserManagement = ({color}) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 21V19C16.5 17.9391 16.0786 16.9217 15.3284 16.1716C14.5783 15.4214 13.5609 15 12.5 15H6.5C5.43913 15 4.42172 15.4214 3.67157 16.1716C2.92143 16.9217 2.5 17.9391 2.5 19V21"
        // stroke="#1B1B1B"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.5 11C11.7091 11 13.5 9.20914 13.5 7C13.5 4.79086 11.7091 3 9.5 3C7.29086 3 5.5 4.79086 5.5 7C5.5 9.20914 7.29086 11 9.5 11Z"
        // stroke="#1B1B1B"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22.5 21.0009V19.0009C22.4993 18.1146 22.2044 17.2536 21.6614 16.5532C21.1184 15.8527 20.3581 15.3524 19.5 15.1309"
        // stroke="#1B1B1B"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.5 3.13086C17.3604 3.35116 18.123 3.85156 18.6676 4.55317C19.2122 5.25478 19.5078 6.11769 19.5078 7.00586C19.5078 7.89403 19.2122 8.75694 18.6676 9.45855C18.123 10.1602 17.3604 10.6606 16.5 10.8809"
        // stroke="#1B1B1B"
        stroke={color}
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UserManagement;

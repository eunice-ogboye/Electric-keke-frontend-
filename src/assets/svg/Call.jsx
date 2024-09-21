import React from "react";

const Call = ({ type = "passenger" }) => {
  const CallConnect = () => {
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25Z"
          fill="white"
        />
        <path
          d="M17.8267 23.3867C19.7467 27.16 22.84 30.2533 26.6133 32.1733L29.5467 29.24C29.92 28.8667 30.44 28.76 30.9067 28.9067C32.4 29.4 34 29.6667 35.6667 29.6667C36.0203 29.6667 36.3594 29.8071 36.6095 30.0572C36.8595 30.3072 37 30.6464 37 31V35.6667C37 36.0203 36.8595 36.3594 36.6095 36.6095C36.3594 36.8595 36.0203 37 35.6667 37C29.6551 37 23.8897 34.6119 19.6389 30.3611C15.3881 26.1103 13 20.3449 13 14.3333C13 13.9797 13.1405 13.6406 13.3905 13.3905C13.6406 13.1405 13.9797 13 14.3333 13H19C19.3536 13 19.6928 13.1405 19.9428 13.3905C20.1929 13.6406 20.3333 13.9797 20.3333 14.3333C20.3333 16 20.6 17.6 21.0933 19.0933C21.24 19.56 21.1333 20.08 20.76 20.4533L17.8267 23.3867Z"
          fill="#77BB77"
        />
      </svg>
    );
  };
  const CallPassenger = () => {
    return (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.45 23.25C16.32 23.25 15.13 22.98 13.9 22.46C12.7 21.95 11.49 21.25 10.31 20.4C9.14 19.54 8.01 18.58 6.94 17.53C5.88 16.46 4.92 15.33 4.07 14.17C3.21 12.97 2.52 11.77 2.03 10.61C1.51 9.37 1.25 8.17 1.25 7.04C1.25 6.26 1.39 5.52 1.66 4.83C1.94 4.12 2.39 3.46 3 2.89C3.77 2.13 4.65 1.75 5.59 1.75C5.98 1.75 6.38 1.84 6.72 2C7.11 2.18 7.44 2.45 7.68 2.81L10 6.08C10.21 6.37 10.37 6.65 10.48 6.93C10.61 7.23 10.68 7.53 10.68 7.82C10.68 8.2 10.57 8.57 10.36 8.92C10.21 9.19 9.98 9.48 9.69 9.77L9.01 10.48C9.02 10.51 9.03 10.53 9.04 10.55C9.16 10.76 9.4 11.12 9.86 11.66C10.35 12.22 10.81 12.73 11.27 13.2C11.86 13.78 12.35 14.24 12.81 14.62C13.38 15.1 13.75 15.34 13.97 15.45L13.95 15.5L14.68 14.78C14.99 14.47 15.29 14.24 15.58 14.09C16.13 13.75 16.83 13.69 17.53 13.98C17.79 14.09 18.07 14.24 18.37 14.45L21.69 16.81C22.06 17.06 22.33 17.38 22.49 17.76C22.64 18.14 22.71 18.49 22.71 18.84C22.71 19.32 22.6 19.8 22.39 20.25C22.18 20.7 21.92 21.09 21.59 21.45C21.02 22.08 20.4 22.53 19.68 22.82C18.99 23.1 18.24 23.25 17.45 23.25ZM5.59 3.25C5.04 3.25 4.53 3.49 4.04 3.97C3.58 4.4 3.26 4.87 3.06 5.38C2.85 5.9 2.75 6.45 2.75 7.04C2.75 7.97 2.97 8.98 3.41 10.02C3.86 11.08 4.49 12.18 5.29 13.28C6.09 14.38 7 15.45 8 16.46C9 17.45 10.08 18.37 11.19 19.18C12.27 19.97 13.38 20.61 14.48 21.07C16.19 21.8 17.79 21.97 19.11 21.42C19.62 21.21 20.07 20.89 20.48 20.43C20.71 20.18 20.89 19.91 21.04 19.59C21.16 19.34 21.22 19.08 21.22 18.82C21.22 18.66 21.19 18.5 21.11 18.32C21.08 18.26 21.02 18.15 20.83 18.02L17.51 15.66C17.31 15.52 17.13 15.42 16.96 15.35C16.74 15.26 16.65 15.17 16.31 15.38C16.11 15.48 15.93 15.63 15.73 15.83L14.97 16.58C14.58 16.96 13.98 17.05 13.52 16.88L13.25 16.76C12.84 16.54 12.36 16.2 11.83 15.75C11.35 15.34 10.83 14.86 10.2 14.24C9.71 13.74 9.22 13.21 8.71 12.62C8.24 12.07 7.9 11.6 7.69 11.21L7.57 10.91C7.51 10.68 7.49 10.55 7.49 10.41C7.49 10.05 7.62 9.73 7.87 9.48L8.62 8.7C8.82 8.5 8.97 8.31 9.07 8.14C9.15 8.01 9.18 7.9 9.18 7.8C9.18 7.72 9.15 7.6 9.1 7.48C9.03 7.32 8.92 7.14 8.78 6.95L6.46 3.67C6.36 3.53 6.24 3.43 6.09 3.36C5.93 3.29 5.76 3.25 5.59 3.25ZM13.95 15.51L13.79 16.19L14.06 15.49C14.01 15.48 13.97 15.49 13.95 15.51Z"
          fill="#0A0B0A"
        />
        <path
          d="M18.5 10.25C18.09 10.25 17.75 9.91 17.75 9.5C17.75 9.14 17.39 8.39 16.79 7.75C16.2 7.12 15.55 6.75 15 6.75C14.59 6.75 14.25 6.41 14.25 6C14.25 5.59 14.59 5.25 15 5.25C15.97 5.25 16.99 5.77 17.88 6.72C18.71 7.61 19.25 8.7 19.25 9.5C19.25 9.91 18.91 10.25 18.5 10.25Z"
          fill="#0A0B0A"
        />
        <path
          d="M22 10.25C21.59 10.25 21.25 9.91 21.25 9.5C21.25 6.05 18.45 3.25 15 3.25C14.59 3.25 14.25 2.91 14.25 2.5C14.25 2.09 14.59 1.75 15 1.75C19.27 1.75 22.75 5.23 22.75 9.5C22.75 9.91 22.41 10.25 22 10.25Z"
          fill="#0A0B0A"
        />
      </svg>
    );
  };
  return type === "passenger" ? CallPassenger() : CallConnect();
};

export default Call;

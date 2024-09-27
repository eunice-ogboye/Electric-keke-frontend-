import React from "react";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex-center flex-col">
      <p className="text-2xl font-bold">Not Found...</p>
      <Link to="/" className="text-eco-green">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;

import React from "react";

const Heading = ({ title, description }) => {
  return (
    <div>
      <h1 className="font-bold text-[2rem]">{title}</h1>
      <p className="font-normal">{description}</p>
    </div>
  );
};

export default Heading;

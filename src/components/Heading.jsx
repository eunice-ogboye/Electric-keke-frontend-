import React from "react";

const Heading = ({ title, description, className }) => {
  return (
    <div className={className}>
      <h1 className="font-bold text-[2rem]">{title}</h1>
      {description && <p className="font-normal">{description}</p>}
    </div>
  );
};

export default Heading;

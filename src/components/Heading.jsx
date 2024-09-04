import React from "react";

const Heading = ({
  title,
  tclass,
  description,
  dclass,
  introTitle,
  introClass,
  className,
  type,
}) => {
  return (
    <div className={className}>
      {introTitle && (
        <p className={`${introClass} intro-title`}>{introTitle}</p>
      )}
      <h1
        className={`font-bold ${
          type === "about" ? "text-5xl" : "text-[2rem]"
        } ${tclass}`}
      >
        {title}
      </h1>
      {description && (
        <p className={`font-normal text-eco-neutral-prime font-montserrat ${dclass}`}>{description}</p>
      )}
    </div>
  );
};

export default Heading;

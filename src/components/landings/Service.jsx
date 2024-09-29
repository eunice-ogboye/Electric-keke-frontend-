import React from "react";

const Service = ({ service }) => {
  const { title, desc, icon } = service;
  return (
    <div key={title} className="single-service-container service-shadow">
      <div className="single-service">
        <div className="service-icon">
          <img src={icon} alt={title} />
        </div>

        <div className="mt-[21px] tablet:mt-[22px] laptop:mt-8">
          <h2 className="service-title">{title}</h2>
          <p className="service-desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

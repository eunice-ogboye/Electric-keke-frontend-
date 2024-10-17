import React from "react";

const Service = ({ title, desc, icon }) => {
  return (
    <div key={title} className="service-card">
      <div className="service-card__content">
        <div className="service__icon">
          <img src={icon} alt={title} />
        </div>

        <div className="mt-[21px] tablet:mt-[22px] laptop:mt-8">
          <h2 className="service-card__title">{title}</h2>
          <p className="service-card__desc">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;

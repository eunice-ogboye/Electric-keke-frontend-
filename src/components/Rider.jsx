import React from "react";
import Rate from "./Rate";
import Btn from "./Btn";

const Rider = ({
  name,
  rating,
  plate_number,
  color,
  photo,
  className,
  handleClick,
}) => {
  return (
    <div className={`rider ${className}`}>
      <div className="size-full">
        <img
          src={photo}
          alt={name}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="rider-overlay">
        <div className="flex flex-col justify-between h-full">
          <h2 className="font-bold text-eco-white">{name}</h2>
          <Rate rate={rating} statik />
          <p className="text-eiteen text-eco-white font-montserrat">
            Licence Plate: {plate_number}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-eiteen text-eco-white font-montserrat">Keke Color: {color}</p>
            <Btn
              text="View Details"
              // to={name + plate_number}
              size="md"
              type="rider"
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;

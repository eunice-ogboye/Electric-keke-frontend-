import React from "react";
import Rate from "../../../components/xp/Rate";
import Btn from "../../../components/shared/Btn";
import Loader from "../../../components/loaders/Loader";

const TestRider = ({ rider, handleClick }) => {
  const {
    id,
    fullname,
    // email,
    rating,
    plate_number,
    color,
    photo,
    className,
  } = rider || {};

  return rider ?  (
    <div className={`rider ${className}`}>
      <div className="size-full">
        <img
          src={photo}
          alt={fullname}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="rider-overlay">
        <div className="flex flex-col justify-between h-full">
          <h2 className="font-bold text-eco-white !text-base md:!text-[2rem]">
            {fullname}
          </h2>

          <Rate rate={rating} statik />

          <p className="text-[0.625rem] md:text-eiteen text-eco-white font-montserrat">
            Licence Plate: {plate_number}
          </p>

          <div className="flex items-center justify-between">
            <p className="text-[0.625rem] md:text-eiteen  text-eco-white">
              Keke Color: {color}
            </p>

            <Btn
              text="View Details"
              // to={fullname + id}
              size="rider"
              type="rider"
              handleClick={() => console.log(rider)}
            />
          </div>
        </div>
      </div>
    </div>
  ): <div>
    <Loader type={2} />
  </div>
};

export default TestRider;

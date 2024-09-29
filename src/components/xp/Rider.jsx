import React from "react";
import Rate from "../xp/Rate";
import Btn from "../shared/Btn";
import dispatchables from "../../utils/dispatchables";

const Rider = ({ rider }) => {
  
  const { inputDataForBookingRequest, chooseRider } = dispatchables();
  const { id, fullname, email, rating, plate_number, color, photo, className } =
    rider;

  return (
    <div className={`rider ${className}`}>
      <div className="size-full">
        <img
          src={photo}
          alt={fullname}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="rider-overlay">
        <div className="rider-info">
          <h2 className="rider-name  md:!text-[2rem]">{fullname}</h2>

          <Rate rate={rating} statik />

          <p className="rider-plate">Licence Plate: {plate_number}</p>

          <div className="flex items-center justify-between">
            <p className="text-[0.625rem] md:text-eiteen  text-eco-white">
              Keke Color: {color}
            </p>

            <Btn
              text="View Details"
              to={fullname + id}
              size="rider"
              type="rider"
              handleClick={() => {
                inputDataForBookingRequest("rider", email);
                chooseRider(rider);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;

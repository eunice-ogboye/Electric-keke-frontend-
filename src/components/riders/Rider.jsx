import React, { useEffect, useState } from "react";
import Rate from "../xp/Rate";
import dispatchables from "../../utils/dispatchables";
import Btn from "../shared/btn/Btn";

const starSize = (mediaSize) => {
  return mediaSize > 0 && mediaSize < 768
    ? 11
    : mediaSize > 769 && mediaSize < 1024
    ? 17
    : 24;
};

const Rider = ({ rider }) => {
  const { id, fullname, email, rating, plate_number, color, photo } =
    rider;

  const [mediaSize, setMediaSize] = useState(window.outerWidth);

  const { inputDataForBookingRequest, chooseRider } = dispatchables();

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setMediaSize(e.currentTarget.outerWidth);
    });

    return window.removeEventListener("resize", (e) =>
      setMediaSize(e.currentTarget.outerWidth)
    );
  }, []);

  return (
    <div className="rider">
      <div className="size-full">
        <img
          src={photo}
          alt={fullname}
          className="size-full object-cover object-center"
        />
      </div>
      <div className="rider-overlay">
        <div className="rider-info">
          <h2 className="rider-name tablet:!text-2xl laptop:!text-[2rem]">
            {fullname}
          </h2>

          <Rate
            rate={rating}
            className="w-[67px] md:w-[100px] lg:w-[135px]"
            size={starSize(mediaSize)}
            statik
          />

          <p className="rider-plain-text">Licence Plate: {plate_number}</p>

          <p className="rider-plain-text">Keke Color: {color}</p>
        </div>
        <Btn
          text="View Details"
          href={fullname + id}
          styling="rider-btn"
          onClick={() => {
            inputDataForBookingRequest("rider", email);
            chooseRider(rider);
          }}
        />
      </div>
    </div>
  );
};

export default Rider;

import React, { useEffect, useState } from "react";
import Btn from "../shared/Btn";
import Rate from "../xp/Rate";
import CustomizedBtn from "../shared/CustomizedBtn";

const starSize = (mediaSize) => {
  return mediaSize > 0 && mediaSize < 768
    ? 11
    : mediaSize > 769 && mediaSize < 1024
    ? 17
    : 24;
};

const TestRider = ({
  id,
  fullname,
  email,
  rating,
  plate_number,
  color,
  photo,
}) => {
  const [mediaSize, setMediaSize] = useState(window.outerWidth);

  useEffect(() => {
    console.log(mediaSize, window.outerWidth);
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
            statik
            className="border w-[67px] md:w-[100px] lg:w-[135px]"
            size={starSize(mediaSize)}
          />

          <p className="rider-plain-text">Licence Plate: {plate_number}</p>

          <p className="rider-plain-text">Keke Color: {color}</p>
        </div>
        <CustomizedBtn
          text="View Details"
          href={fullname + id}
          className="rider-btn"
          // handleClick={() => {
          //   inputDataForBookingRequest("rider", email);
          //   chooseRider(rider);
          // }}
        />
      </div>
    </div>
  );
};

export default TestRider;

import { getItemFromLs } from "../../utils/ls";
import React from "react";

const RideDetailing = ({ info, price }) => {
  return (
    <div
      className={`h-[59px] border border-neutral py-4 px-5 rounded-md ${
        price ? "bg-basic-200" : "bg-white"
      } flex items-center justify-between`}
    >
      <p className="text-eiteen w-10/12 font-montserrat">{info}</p>
    </div>
  );
};

const RideDetails = () => {
  const currentRide = getItemFromLs("current-ride");
  console.log(currentRide);

  return (
    <div className="mx-auto mt-6 flex flex-col gap-[13px]">
      <RideDetailing info={currentRide?.origin || "origin"} />
      <RideDetailing info={currentRide?.destination || "des"} />
      <RideDetailing info={currentRide?.price || "pric"} price />
    </div>
  );
};

export default RideDetails;

import React from "react";

const RideDetailing = ({ info, price }) => {
  return (
    <div
      className={`h-[59px] border border-neutral py-4 px-5 rounded-md ${
        price ? "bg-eco-green-faint" : "bg-white"
      } flex items-center justify-between`}
    >
      <p className="text-eiteen w-10/12 font-montserrat">{info}</p>
      {/* {showTarget && (
        <div>
          <img src="/target.svg" alt="target" />
        </div>
      )} */}
    </div>
  );
};

const RideDetails = () => {
  return (
    <div className="max-w-[520px] mx-auto mt-6 flex flex-col gap-[13px]">
      <RideDetailing info="Olayiwola" />
      <RideDetailing info="Olayiwola" />
      <RideDetailing info="#3000" price />
    </div>
  );
};

export default RideDetails;

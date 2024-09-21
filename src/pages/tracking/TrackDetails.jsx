import dispatchables from "../../utils/dispatchables";
import Btn from "../../components/shared/Btn";
import React from "react";

const TrackDetails = ({ role, origin, destination, price }) => {
  const { openModalWithContent } = dispatchables();
  function handleClick() {
    if (role === "user") {
      // locgic to cancel rider
      return;
    }
    openModalWithContent("contact passenger");
  }

  return (
    <div className="mt-14">
      <div className="space-y-4">
        <div className="ride-location">
          <p className="text-eiteen">{origin}</p>
        </div>
        <div className="ride-location">
          <p className="text-eiteen">{destination}</p>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-8">
        <div className="ride-fare">#{price}</div>
        <Btn
          text={role === "user" ? "Cancel Ride" : "Start Trip"}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default TrackDetails;

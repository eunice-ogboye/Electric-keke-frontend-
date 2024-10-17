import React from "react";

const Trip = ({ label, location }) => {
  return (
    <div className="ride-trip">
      <div className="ride-trip-label">
        <p className="text-eiteen">{label}</p>
      </div>
      <div className="ride-location">
        <p className="text-eiteen text-neutral-500">{location}</p>
      </div>
    </div>
  );
};

export default Trip;

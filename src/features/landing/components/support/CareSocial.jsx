import React from "react";

const CareSocial = ({ icon, title }) => {
  return (
    <div className="flex items-center gap-[21px] py-2 border-b border-black">
      <div>
        <img src={icon} alt="headphone" />
      </div>

      <p className="text-2xl">{title}</p>
    </div>
  );
};

export default CareSocial;

import React from "react";
export const DeliveryProcessLine = ({ success }) => {
  return (
    <div className="size-[40px] flex-center">
      <img
        src={`/progress-line${success ? "-green" : ''}.svg`}
        alt="progress line"
      />
    </div>
  );
};

const DeliveryProcess = ({ image, title, desc }) => {
  return (
    <div className="flex items-center gap-x-1">
      <div className="size-10">
        <img src={image} alt={title} className="size-full" />
      </div>
      <div>
        <p className="font-bold text-eiteen">{title}</p>
        <p className="text-sm text-eco-neutral-prime font-montserrat">{desc}</p>
      </div>
    </div>
  );
};

export default DeliveryProcess;

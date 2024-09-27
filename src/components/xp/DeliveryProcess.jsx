import React from "react";
export const DeliveryProcessLine = ({ success }) => {
  return (
    <div className="size-[40px] flex-center">
      <img
        src={`/progress-line${success ? "-green" : ""}.svg`}
        alt="progress line"
      />
    </div>
  );
};

const DeliveryProcess = ({ icon, title, desc }) => {
  return (
    <div className="flex items-center gap-x-1">
      <div className="size-10">{icon}</div>
      <div>
        <p className="font-bold text-eiteen">{title}</p>
        <p className="text-sm text-neutral">{desc}</p>
      </div>
    </div>
  );
};

export default DeliveryProcess;

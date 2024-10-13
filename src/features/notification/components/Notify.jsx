import React from "react";

const NotificationAlert = () => {
  return (
    <div className="flex items-center mb-7">
      <div className="size-[45px] flex-center">
        <img src="/alert.svg" alt="alert" />
      </div>

      <p className="font-bold text-warning text-2xl">Account alert</p>
    </div>
  );
};

const Notify = ({ title, desc, account }) => {
  return (
    <div className="shadow px-4 py-5 rounded-20">
      {account && <NotificationAlert />}
      <div>
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-neutral-500 text-2xl mt-6">{desc}</p>
      </div>
    </div>
  );
};

export default Notify;

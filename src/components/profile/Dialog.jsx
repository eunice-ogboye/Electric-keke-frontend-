import React from "react";

const Dialog = ({ title }) => {
  return (
    <div className="dialog-modal">
      <div>
        <div className="text-center">
          <h2 className="font-josefin font-bold">{title}?</h2>
          <p className="text-eiteen">
            Are you sure you want to {title === 'Logout of your account' ? 'logout' : 'delete your account'}?
          </p>
        </div>

        <div className="w-full p-5">

        </div>
      </div>
    </div>
  );
};

export default Dialog;

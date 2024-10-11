import dispatchables from "../../utils/dispatchables";
import React from "react";
import { useSelector } from "react-redux";

const OtpChoice = ({ otp_options }) => {
  const formData = useSelector((state) => state.formData);
  const {} = dispatchables();
  const { title, icon } = otp_options;

  return (
    <div
      key={title}
      className={`otp-opt ${
        title.toLowerCase() === formData.message_type && "bg-basic-200"
      }`}
      onClick={() => chooseOtpMethod(title.toLowerCase())}
    >
      <div>
        <img src={icon} alt={title} />
      </div>
      <p className="ml-3">{title}</p>
    </div>
  );
};

export default OtpChoice;

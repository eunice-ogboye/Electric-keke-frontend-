import { getItemFromLs } from "../../lib/ls";
import { RequestOtp } from "../../lib/requests/auth";
import dispatchables from "../../utils/dispatchables";
import React from "react";

const ResendOtpTab = ({ verificationType }) => {
  const { showAlert } = dispatchables();

  const resend_otp = async () => {
    try {
      if (verificationType === "activate") {
        console.log(verificationType);

        const { detail } = await RequestOtp({
          message_type: "email",
          username: getItemFromLs("user-email"),
        });
        showAlert(detail);
        return;
      }

      if (verificationType === "update-password") {
        console.log(verificationType);

        const { detail } = await RequestOtp({
          username: getItemFromLs("user-email"),
        });
        showAlert(detail);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between">
      <p className="text-eiteen">
        Didn't receive an OTP?{" "}
        <span
          className="text-eco-green cursor-pointer font-nunito"
          onClick={resend_otp}
        >
          Resend
        </span>
      </p>
      <p className="text-sm">00:30</p>
    </div>
  );
};

export default ResendOtpTab;

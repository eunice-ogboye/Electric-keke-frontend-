import { useNavigate } from "react-router-dom";
import Logo from "../../components/shared/Logo";
import OtpInput from "../../components/OtpInput";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../../components/shared/Btn";
import Heading from "../../components/shared/Heading";
import { useTitle } from "../../lib/hooks";
import { deletItemFromLs, getItemFromLs } from "../../lib/ls";
import {
  ActivateUser,
  RequestOtp,
  OtpVerification,
} from "../../lib/requests/auth";

import dispatchables from "../../utils/dispatchables";

const Verification = () => {
  useTitle("Verification");

  const navigate = useNavigate();
  const { showAlert, changeAuthenticationPage } = dispatchables();

  const { verificationType } = useSelector((state) => state.global);
  console.log(verificationType);
  const [disable, setDisable] = useState(true);
  const [otpValue, setOtpValue] = useState("");

  useEffect(() => {
    if (otpValue) {
      const numberOfCharacters = otpValue.split("").length;
      if (numberOfCharacters === 5) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  }, [otpValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registeringAs = getItemFromLs("registeringAs");
    console.log(registeringAs);

    try {
      const otpDetails = {
        id: getItemFromLs("userId"),
        otp: otpValue,
      };

      console.log(otpDetails)

      if (verificationType === "activate") {
        const { detail } = await ActivateUser(otpDetails);
        showAlert(detail);
        registeringAs === "User"
          ? (navigate("/authentication/congrats"),
            changeAuthenticationPage("congrats"))
          : (navigate("/authentication/driver-auth"),
            changeAuthenticationPage("driver-auth"));
        // the following no more needed
        deletItemFromLs("userId");
        deletItemFromLs("registeringAs");
        return;
      }

      if (verificationType === "update-password") {
        const { detail } = await OtpVerification(otpDetails);
        showAlert(detail);
        navigate("/authentication/new");
        changeAuthenticationPage("new");
      }
    } catch (error) {
      console.log(error);
      showAlert("A Problem to handle here boss");

      // for development purpose
      // if (verificationType === "activate") {
      //   registeringAs === "User"
      //   ? (navigate("/authentication/congrats"),
      //     dispatch(changeAuthPage("congrats")))
      //   : (navigate("/authentication/driver-auth"),
      //     dispatch(changeAuthPage("driver-auth")));
      // }
    }
  };



  return (
    <form className="my-dell:mt-32 board-pad md:w-1/2" onSubmit={handleSubmit}>
      <Logo className="w-[122px] h-[81px] mx-auto" />
      <Heading title="Enter Code" className="text-center mt-2 my-dell:mt-10" />
      <div className="r-form-body">
        <div>
          <p className="text-center text-eiteen font-josefin">
            Please enter the one time password sent (OTP)
          </p>
          <OtpInput
            value={otpValue}
            handleChange={(value) => {
              setOtpValue(value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-eiteen">
            Didn't receive an OTP?{" "}
            <span
              className="text-eco-green cursor-pointer font-nunito"
              onClick={async () => {
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
              }}
            >
              Resend
            </span>
          </p>
          <p className="text-sm">00:30</p>
        </div>
      </div>

      <div className="max-w-[343px] mx-auto">
        <Btn text="Continue" size="full" disabled={disable} />
      </div>

      <div className="text-sm flex-center gap-1  mt-[30px] my-dell:mt-5">
        <img src="/small-lock.svg" alt="lock" />
        Your info is safely secure
      </div>
    </form>
  );
};

export default Verification;

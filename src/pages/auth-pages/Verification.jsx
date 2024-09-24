import { useNavigate } from "react-router-dom";
import Logo from "../../components/shared/Logo";
import OtpInput from "../../components/OtpInput";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Heading from "../../components/shared/Heading";
import { useTitle } from "../../lib/hooks";
import { deletItemFromLs, getItemFromLs } from "../../lib/ls";
import { ActivateUser, OtpVerification } from "../../lib/requests/auth";

import dispatchables from "../../utils/dispatchables";
import ResendOtpTab from "../../components/auth/ResendOtpTab";
import Assurance from "../../components/auth/Assurance";
import CustomizedBtn from "../../components/shared/CustomizedBtn";

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

      // if (verificationType === "update-password") {
      //   showAlert("goin");
      //   navigate("/authentication/new");
      //   // changeAuthenticationPage("new");
      // }
    }
  };

  return (
    <div className="auth-page-right">
      <div className="w-full">
        <div className="auth-head">
          <Logo className="flex-center" logoClassName="w-[122px]" />
          <Heading
            title="Complete Your Profile"
            description="Please enter the one time password sent (OTP)"
            tclass="auth-title"
            dclass="text-center text-sm text-eiteen font-josefin"
          />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="max-w-[438px] mx-auto space-y-4">
            <div>
              <OtpInput
                value={otpValue}
                handleChange={(value) => {
                  setOtpValue(value);
                }}
              />
            </div>

            <ResendOtpTab verificationType={verificationType} />
          </div>

          <div className="max-w-[343px] mx-auto space-y-4 mt-6 lg:mt-14">
            <CustomizedBtn
              text="Continue"
              className="h-14 w-full rounded-full bg-eco-green"
              disabled={disable}
            />
            <Assurance />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Verification;

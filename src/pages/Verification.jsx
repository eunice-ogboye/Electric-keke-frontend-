import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import OtpInput from "../components/OtpInput";
import {
  alertUser,
  changeAuthPage,
  hideAlert,
} from "../store/slices/global-slice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Btn from "../components/Btn";
import { Heading } from "../components";
import { useTitle } from "../lib/hooks";
import verifyOtp from "../lib/requests/auth/otp-verification";
import { deletItemFromLs, getItemFromLs } from "../lib/ls";
import requestOtp from "../lib/requests/auth/otp-request";
import activateUser from "../lib/requests/auth/activate-user";

const Verification = () => {
  useTitle("Verification");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const showAlert = (msg) => {
    dispatch(alertUser(msg));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

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
        const { detail } = await activateUser(otpDetails);
        showAlert(detail);
        registeringAs === "User"
          ? (navigate("/authentication/congrats"),
            dispatch(changeAuthPage("congrats")))
          : (navigate("/authentication/driver-auth"),
            dispatch(changeAuthPage("driver-auth")));
        // the following no more needed
        deletItemFromLs("userId");
        deletItemFromLs("registeringAs");
      }

      if (verificationType === "update-password") {
        const { detail } = await verifyOtp(otpDetails);
        showAlert(detail);
        navigate("/authentication/new");
        dispatch(changeAuthPage("new"));
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
    <form
      className="my-dell:mt-32 board-pad md:w-1/2"
      onSubmit={handleSubmit}
    >
      <Logo className="w-[122px] h-[81px] mx-auto" />
      <Heading
        title="Enter Code"
        className="text-center mt-2 my-dell:mt-10"
        // description={getDescription(type)}
      />
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

                    const { detail } = await requestOtp({
                      message_type: "email",
                      username: getItemFromLs("user-email"),
                    });
                    showAlert(detail);
                  }

                  if (verificationType === "update-password") {
                    console.log(verificationType);
                    
                    const { detail } = await requestOtp({
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

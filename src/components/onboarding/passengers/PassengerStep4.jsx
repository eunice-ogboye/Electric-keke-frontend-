import React from "react";
import SharedStepLayout from "../SharedStepLayout";
import Assurance from "../../auth/Assurance";
import CustomizedBtn from "../../shared/CustomizedBtn";
import ResendOtpTab from "../../auth/ResendOtpTab";
import OtpInput from "../../OtpInput";
import Logo from "../../shared/Logo";
import Heading from "../../shared/Heading";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "../../../store/slices/form-data-slice";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import { ActivateUser } from "../../../services/auth";
import { deletItemFromLs, getItemFromLs } from "../../../utils/ls";

const PassengerStep4 = ({ nextProcess }) => {
  const { otpValue } = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const setOtpValue = (value) => {
    dispatch(changeInputValue({ key: "otpValue", value }));
  };

  const isDisbaled = useAreInputsFilled(otpValue.split("").length === 5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // logic to activate account
    try {
      // the logic
      const otpParams = {
        id: getItemFromLs("userId"),
        otp: otpValue,
      };
      const { detail } = await ActivateUser(otpParams);
      console.log(detail);
      nextProcess();
      deletItemFromLs("userId");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SharedStepLayout text="Enter the OTP sent to your phone to verify your account. This ensures your Eco-Ride is secure and personalized. your safety is our priority.">
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

              <ResendOtpTab verificationType="activate" />
            </div>

            <div className="max-w-[343px] mx-auto space-y-4 mt-6 lg:mt-14">
              <CustomizedBtn
                text="Continue"
                className="h-14 w-full rounded-full bg-eco-green"
                disabled={isDisbaled}
              />
              <Assurance />
            </div>
          </form>
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default PassengerStep4;

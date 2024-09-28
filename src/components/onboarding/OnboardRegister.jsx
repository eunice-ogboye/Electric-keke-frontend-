import { addItemToLs, deletItemFromLs, getItemFromLs } from "../../utils/ls";
import React from "react";
import OnboardingForm from "./OnboardingForm";
import PassengerStep3 from "./passengers/PassengerStep3";
import Step1 from "./sharedSteps/Step1";
import Step2 from "./sharedSteps/Step2";
import PassengerStep4 from "./passengers/PassengerStep4";
import Congrats from "./Congrats";
import Login from "./login/Login";
import ForgetPassword from "./login/ForgetPassword";
import VerifyOtp from "./login/VerifyOtp";
import NewPassword from "./login/NewPassword";

const OnboardRegister = () => {
  const registeringAs = getItemFromLs("registeringAs");
  const runOnFinish = () => {
    addItemToLs("onboarding-process", 0);
    addItemToLs("registeringAs", "Login");
    location.reload();
  };
  return (
    <section>
      {registeringAs === "User" && (
        <OnboardingForm runOnFinish={runOnFinish}>
          <Step1 />
          <Step2 />
          <PassengerStep3 />
          <PassengerStep4 />
          <Congrats />
        </OnboardingForm>
      )}

      {registeringAs === "Rider" && (
        <OnboardingForm runOnFinish={() => {}}>
          <Step1 />
          <Step2 />
        </OnboardingForm>
      )}

      {registeringAs === "Login" && (
        <OnboardingForm runOnFinish={runOnFinish}>
          <Login />
          <ForgetPassword />
          <VerifyOtp />
          <NewPassword />
        </OnboardingForm>
      )}
    </section>
  );
};

export default OnboardRegister;

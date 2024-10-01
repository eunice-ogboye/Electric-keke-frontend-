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
import RiderStep4 from "./riders/RiderStep4";
import RiderStep3 from "./riders/RiderStep3";
import RiderStep5 from "./riders/RiderStep5";
import Processing from "./riders/Processing";

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
        <OnboardingForm
          runOnFinish={() => {
            alert("finished the driver auth");
          }}
        >
          <Step1 />
          <Step2 />
          <RiderStep3 />
          <RiderStep4 />
          <RiderStep5 />
          <Processing />
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

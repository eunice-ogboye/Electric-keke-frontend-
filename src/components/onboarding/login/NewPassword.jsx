import React from "react";
import { useSelector } from "react-redux";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import Logo from "../../shared/Logo";
import Heading from "../../shared/Heading";
import ReusableFormRows from "../../auth/ReusableFormRows";
import SharedStepLayout from "../SharedStepLayout";
import dispatchables from "../../../utils/dispatchables";
import { ResetPassword } from "../../../services/auth";
import { getItemFromLs } from "../../../utils/ls";
import Btn from "@/components/shared/btn/Btn";

const NewPassword = ({ nextProcess }) => {
  const { password, re_password } = useSelector((state) => state.formData);
  const { showAlert } = dispatchables();

  const isDisbaled = useAreInputsFilled(password && re_password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { detail } = await ResetPassword({
        username: getItemFromLs("user-email"),
        password,
        re_password,
      });
      showAlert(detail);
      nextProcess();
    } catch (error) {
      console.log(error);
      showAlert("error reseting passcode");
    }
  };

  return (
    <SharedStepLayout text="Create a new password for your Eco-Ride account. Ensure it is strong and secure to protect your information.">
      <div className="onboarding__page--right">
        <div className="w-full">
          <div className="auth-head">
            <Logo className="flex-center" logoClassName="w-[122px]" />
            <Heading title="Enter New Password" tclass="auth-title" />
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="space-y-7">
              <ReusableFormRows type="new" />
            </div>

            <div className="max-w-[343px] mx-auto mt-14">
              <Btn
                text="Continue"
                styling="btn btn--primary btn--lg w-full rounded-full"
                disabled={isDisbaled}
              />
            </div>
          </form>
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default NewPassword;

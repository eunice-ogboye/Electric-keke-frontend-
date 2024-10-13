import React from "react";
import { useSelector } from "react-redux";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import ReusableFormRows from "../../auth/ReusableFormRows";
import SharedStepLayout from "../SharedStepLayout";
import dispatchables from "../../../utils/dispatchables";
import { ResetPassword } from "../../../services/auth";
import { getItemFromLs } from "../../../utils/ls";
import Btn from "@/components/shared/btn/Btn";
import { onboarding_descs } from "@/constants";

const NewPassword = ({ nextProcess, prevProcess }) => {
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
    <SharedStepLayout
      text={onboarding_descs.new_password}
      headTitle="Enter New Password"
      // prevProcess={prevProcess}
    >
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
    </SharedStepLayout>
  );
};

export default NewPassword;

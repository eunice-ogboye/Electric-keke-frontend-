import React from "react";
import { useSelector } from "react-redux";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import ReusableFormRows from "../../auth/ReusableFormRows";
import SharedStepLayout from "../SharedStepLayout";
import { addItemToLs } from "../../../utils/ls";
import { RequestOtp } from "../../../services/auth";
import Btn from "@/components/shared/btn/Btn";
import { onboarding_descs } from "@/constants";

const ForgetPassword = ({ nextProcess, prevProcess }) => {
  const { username } = useSelector((state) => state.formData);

  const isDisbaled = useAreInputsFilled(username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    addItemToLs("user-email", username);
    try {
      const { detail } = await RequestOtp({ username });
      console.log(detail);
      nextProcess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SharedStepLayout
      text={onboarding_descs.forget}
      headClass="w-full"
      headTitle="Forgot Password"
      headDesc="Enter registered phone number or email to receive a reset code"
      prevProcess={prevProcess}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="space-y-7">
          <ReusableFormRows type="forget" />
        </div>

        <div className="w-full max-w-[343px] mx-auto border mt-10">
          <Btn
            text="Send Code"
            styling="btn btn--lg btn--primary w-full rounded-full"
            disabled={isDisbaled}
          />
        </div>
      </form>
    </SharedStepLayout>
  );
};

export default ForgetPassword;

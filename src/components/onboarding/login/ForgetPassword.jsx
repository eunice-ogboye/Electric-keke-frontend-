import React from "react";
import { useSelector } from "react-redux";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import Logo from "../../shared/Logo";
import Heading from "../../shared/Heading";
import ReusableFormRows from "../../auth/ReusableFormRows";
import SharedStepLayout from "../SharedStepLayout";
import { addItemToLs } from "../../../utils/ls";
import { RequestOtp } from "../../../services/auth";
import Btn from "@/components/shared/btn/Btn";

const ForgetPassword = ({ nextProcess }) => {
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
    <SharedStepLayout text="Reset your password to regain access to your Eco-Ride account. We’ll send a code to your registered email oe phone number to help you get back on track.">
      <div className="onboarding__page--right">
        <div className="w-full">
          <div className="auth-head">
            <Logo className="flex-center" logoClassName="w-[122px]" />
            <Heading
              title="Forgot Password"
              tclass="auth-title"
              description="Enter registered phone number or email to receive a reset code"
              dclass="auth-desc"
            />
          </div>

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
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default ForgetPassword;

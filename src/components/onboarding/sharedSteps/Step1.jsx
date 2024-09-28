import React from "react";
import SharedStepLayout from "../SharedStepLayout";
import CustomizedBtn from "../../shared/CustomizedBtn";
import Google from "../../../assets/svg/Google";
import { Link } from "react-router-dom";
import ReusableFormRows from "../../auth/ReusableFormRows";
import Heading from "../../shared/Heading";
import Logo from "../../shared/Logo";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";
import { addItemToLs } from "../../../utils/ls";
import { onboarding_descs } from "../../../constants";

const Step1 = ({ nextProcess, prevProcess }) => {
  const { fullname, email, password, re_password } = useSelector(
    (state) => state.formData
  );
  const isDisabled = useAreInputsFilled(
    fullname && email && password && re_password
  );

  const handleSubmit = (e) => {
    console.log("jose");
    e.preventDefault();
    nextProcess();
  };

  const goToLogin = () => {
    addItemToLs("onboarding-process", 0);
    addItemToLs("registeringAs", "Login");
    location.reload();
  };

  return (
    <SharedStepLayout text={onboarding_descs.register}>
      <div className="auth-page-right relative">
        <CustomizedBtn
          icon={<ArrowLeft />}
          className="absolute top-5 left-5"
          handleClick={prevProcess}
        />

        <div className="w-full">
          <div className="auth-head">
            <Logo className="flex-center" logoClassName="w-[122px]" />
            <Heading title="Register Your Account" tclass="auth-title" />
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="space-y-7">
              <ReusableFormRows type="register" />
            </div>

            <p className="switch-login my-[50px]">
              Already have an account?{" "}
              <Link
                to="/onboarding/registration"
                onClick={goToLogin}
                className="text-eco-green"
              >
                Login!
              </Link>
            </p>

            <div className="w-[343px] mx-auto">
              <CustomizedBtn
                text="Continue"
                className="primary-btn h-14 w-full rounded-full"
                disabled={isDisabled}
              />

              <div className="mt-5">
                <p className="font-bold text-center">or</p>
                <CustomizedBtn
                  text="Register with Google"
                  className="w-full h-14 rounded-full bg-white shadow-md text-black"
                  icon={<Google />}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default Step1;

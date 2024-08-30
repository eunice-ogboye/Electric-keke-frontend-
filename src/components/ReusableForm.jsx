import React from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import FormRow from "./FormRow";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { otp_choice } from "../constants";
import { useGlobalContext } from "../context";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../components/ui/input-otp";

const ReusableForm = ({ type = "register" }) => {
  const { dispatch } = useGlobalContext();
  const switchOnboardingType = (switchType) => {
    dispatch({ type: "changeBg", payload: { onboardingType: switchType } });
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    checkPass: "",
    phone: "",
    state: "",
    address: "",
    otp: "phone",
    otpValue: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const formTitle = {
    register: "Register Your Account!",
    complete: "Complete Your Profile!",
    otp: "OTP!",
    otp2: "Complete Your Profile!",
    congrats: "Continue to Log in",
  };

  return (
    <>
      {type === "congrats" ? (
        <>
          <Logo
            logoClassName="size-16"
            titleClassName="text-green-400 font-bold text-2xl"
          />
          <Heading
            title={formTitle[type]}
            className="text-center mt-10"
            description={
              type === "otp2" && "please enter the one time password sent (OTP)"
            }
          />

          <div className="w-[25.5rem] h-[16rem] border shadow-md rounded-md mx-auto my-10 flex-center">
            <div className="rounded-full bg-green-800 size-20 flex-center">
              <img src="/tick.svg" alt="tick" />
            </div>
          </div>

          <div className="mt-10">
            <Button className="block mx-auto mb-5 rounded-full">Proceed</Button>
            <div className="text-sm flex-center gap-1">
              <img src="/small-lock.svg" alt="lock" />
              Your info is safely secure
            </div>
          </div>
        </>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          <Logo
            logoClassName="size-16"
            titleClassName="text-green-400 font-bold text-2xl"
          />
          <Heading
            title={formTitle[type]}
            className="text-center mt-10"
            description={
              type === "otp2" && "please enter the one time password sent (OTP)"
            }
          />

          {type === "otp" ? (
            <div className="flex flex-col gap-5 mt-10">
              <p>Where should we send your OTP?</p>
              {otp_choice.map((item) => {
                return (
                  <Link
                    key={item.title}
                    to="/onboarding/otp-2"
                    onClick={() => switchOnboardingType("otp2")}
                  >
                    <div className="px-4 py-2 flex items-center border-2">
                      <div>
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <p className="ml-3">{item.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : type === "otp2" ? (
            <div className="mt-40 w-[396px] mx-auto">
              <div className="flex-center border">
                <InputOTP
                  maxLength={5}
                  value={formData.otpValue}
                  className="border-4 border-orange-800"
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, otpValue: value }))
                  }
                >
                  <InputOTPGroup className="justify-between w-[396px]">
                    <InputOTPSlot
                      index={0}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={1}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={2}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={3}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                    <InputOTPSlot
                      index={4}
                      className="border-2 rounded-sm size-14 border-black"
                    />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <div className="flex items-center justify-between">
                <p>
                  Didn't receive an OTP?{" "}
                  <span className="text-blue-600">Resend</span>
                </p>
                <p className="">00:30</p>
              </div>
            </div>
          ) : (
            <>
              <div className="my-5 flex flex-col space-y-5">
                <FormRow
                  type="text"
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  handleChange={handleChange}
                />
                <FormRow
                  type={type === "register" ? "email" : "text"}
                  label={type === "register" ? "Email" : "State of residence"}
                  name={type === "register" ? "email" : "state"}
                  value={type === "register" ? formData.email : formData.state}
                  handleChange={handleChange}
                />
                <FormRow
                  type={type === "register" ? "password" : "text"}
                  label={type === "register" ? "Create Password" : "Address"}
                  name={type === "register" ? "password" : "address"}
                  value={
                    type === "register" ? formData.password : formData.address
                  }
                  handleChange={handleChange}
                />
                {type === "register" && (
                  <FormRow
                    type="password"
                    label="Confirm Password"
                    name="checkPass"
                    value={formData.checkPass}
                    handleChange={handleChange}
                  />
                )}
              </div>
            </>
          )}

          {type === "otp" ? null : (
            <div className="mt-5">
              <Button
                className="rounded-full mx-auto block"
                onClick={() => {
                  if (type === "register") {
                    switchOnboardingType("complete");
                    return navigate("/onboarding/complete-profile");
                  }
                  if (type === "complete") {
                    switchOnboardingType("otp");
                    return navigate("/onboarding/choose-otp");
                  }
                  if (type === "otp2") {
                    switchOnboardingType("congrats");
                    return navigate("/onboarding/congrats");
                  }
                }}
              >
                Continue
              </Button>

              {type === "register" ? (
                <div className="text-center">
                  <p className="font-semibold text-center">or</p>
                  <Button
                    className="rounded-full mx-auto flex items-center gap-2 shadow-lg"
                    variant="ghost"
                  >
                    <span>
                      <img src="/google.svg" alt="google" />
                    </span>
                    Continue
                  </Button>
                </div>
              ) : (
                <div className="text-sm flex-center gap-1">
                  <img src="/small-lock.svg" alt="lock" />
                  Your info is safely secure
                </div>
              )}
            </div>
          )}
        </form>
      )}
    </>
  );
};

export default ReusableForm;

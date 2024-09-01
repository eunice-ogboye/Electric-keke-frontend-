import React from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import FormRow from "./FormRow";
import { useState } from "react";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { formTitle, otp_choice } from "../constants";
import { useGlobalContext } from "../context";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../components/ui/input-otp";
import { cn } from "../lib/utils";
import Btn from "./Btn";

const getDescription = (type) => {
  return type === "otp2"
    ? "please enter the one time password sent (OTP)"
    : type === "forget"
    ? "Enter registered phone number or email to receive a reset code"
    : null;
};

const ReusableForm = ({ type = "register" }) => {
  const { Dispatch } = useGlobalContext();
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

  const switchOnboardingType = (switchType) => {
    Dispatch("changeAuthBg", { authType: switchType });
  };

  /**Create a fucntion to dispatch and navigate base on type */
  const switchTypeNavigate = (authType, link) => {
    Dispatch("changeAuthBg", { authType });
    navigate(link);
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      {type === "congrats" ? (
        <div className="my-dell:mt-32">
          <Logo
            logoClassName="size-16"
            titleClassName="text-pgreen text-[1.5rem]"
          />
          <Heading
            title={formTitle[type]}
            className="text-center mt-2 my-dell:mt-10"
            description={
              type === "otp2" && "please enter the one time password sent (OTP)"
            }
          />

          <div className="w-[25.5rem] h-[16rem] border shadow-md rounded-md mx-auto my-[30px] my-dell:mt-24 flex-center">
            <div className="rounded-full bg-pgreen-3 size-20 flex-center">
              <img src="/tick.svg" alt="tick" />
            </div>
          </div>

          <div className="mt-0 my-dell:mt-14 max-w-[343px] mx-auto">
            <Btn
              text="Proceed"
              size="full"
              to="/authentication/login"
              handleClick={() => switchOnboardingType("login")}
            />
            <div className="text-sm flex-center gap-1 mt-[14px]">
              <img src="/small-lock.svg" alt="lock" />
              Your info is safely secure
            </div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={(e) => e.preventDefault()}
          className={cn({
            "my-dell:mt-20": type === "otp",
            "my-dell:mt-24": type === "complete",
            "my-dell:mt-32":
              type === "otp2" ||
              type === "forget" ||
              type === "new" ||
              type === "passUpdate",
          })}
        >
          <Logo
            logoClassName="size-16"
            titleClassName="text-pgreen text-[1.5rem]"
          />
          <Heading
            title={formTitle[type]}
            className="text-center mt-2 my-dell:mt-10"
            description={getDescription(type)}
          />

          {type === "otp" ? (
            <div className="mt-10 my-dell:mt-[3rem] mb-[30px] my-dell:mb-20 flex flex-col space-y-[15px] my-dell:space-y-5">
              <p>Where should we send your OTP?</p>
              {otp_choice.map((item) => {
                return (
                  <Link
                    key={item.title}
                    to="/authentication/otp-2"
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
          ) : type === "otp2" || type === "passUpdate" ? (
            <div className="mt-[30px] my-dell:mt-[3rem] mb-[30px] my-dell:mb-20 w-[396px] mx-auto">
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
          ) : type === "login" ? (
            <div className="mt-10 my-dell:mt-[3rem] mb-[30px] my-dell:mb-20 flex flex-col space-y-[15px] my-dell:space-y-5">
              <FormRow
                type="text"
                label="Email or Phone number"
                name="name"
                value={formData.name}
                handleChange={handleChange}
              />
              <FormRow
                type="password"
                label="Password"
                value={formData.password}
                handleChange={handleChange}
              />
              <FormRow
                type="password"
                label="Confirm Password"
                name="checkPass"
                value={formData.checkPass}
                handleChange={handleChange}
              />
            </div>
          ) : type === "forget" ? (
            <div className="mt-[30px] my-dell:mt-[3rem] mb-[30px] my-dell:mb-20">
              <FormRow
                type="text"
                label="Email or phone number"
                name="name"
                value={formData.name}
                handleChange={handleChange}
              />
            </div>
          ) : type === "new" ? (
            <div className="my-[30px] my-dell:my-[3rem] border mb-[30px] my-dell:mb-20 flex flex-col space-y-[15px] my-dell:space-y-5">
              <FormRow
                type="password"
                label="New Password"
                name="password"
                value={formData.password}
                handleChange={handleChange}
              />
              <FormRow
                type="password"
                label="Confirm Password"
                name="checkPass"
                value={formData.checkPass}
                handleChange={handleChange}
              />
            </div>
          ) : (
            <div className="mt-10 my-dell:mt-[3rem] mb-[30px] my-dell:mb-20 flex flex-col space-y-[15px] my-dell:space-y-5">
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
          )}

          {type === "login" && (
            <div className="flex items-center justify-between w-full my-dell:w-[80%] mx-auto mb-[30px] my-dell:mb-10">
              <div className="flex gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link
                to="/authentication/forgot-password"
                onClick={() => switchOnboardingType("forget")}
              >
                <p className="font-semibold">Forgot Password?</p>
              </Link>
            </div>
          )}

          {type === "otp" ? null : (
            <div className="max-w-[343px] mx-auto">
              <Btn
                text={
                  type === "login"
                    ? "Login"
                    : type === "forget"
                    ? "Send Code"
                    : "Continue"
                }
                size="full"
                onClick={() => {
                  switch (type) {
                    case "register":
                      return switchTypeNavigate(
                        "complete"
                        // "/authentication/complete-profile"
                      );
                    case "complete":
                      return switchTypeNavigate(
                        "otp"
                        // "/authentication/choose-otp"
                      );
                    case "otp2":
                      return switchTypeNavigate(
                        "congrats"
                        // "/authentication/congrats"
                      );
                    case "forget":
                      return switchTypeNavigate(
                        "new"
                        // "/authentication/forget-password"
                      );
                    case "new":
                      return switchTypeNavigate(
                        "passUpdate"
                        //"/authentication/update-passcode"
                      );
                    default:
                      console.log("jose");
                  }
                }}
              />

              {type === "login" && (
                <p className="text-center mt-[30px] my-dell:mt-10 text-eiteen">
                  Dont have an account?{" "}
                  <Link
                    to="/authentication/register"
                    onClick={() => switchOnboardingType("register")}
                  >
                    Sign Up!
                  </Link>
                </p>
              )}

              {type === "register" || type === "login" ? (
                <div className="text-center mt-[30px] my-dell:mt-10">
                  {type === "register" && (
                    <p className="font-bold text-center text-base mb-1">or</p>
                  )}
                  <Button
                    className="rounded-full w-full flex items-center gap-10 shadow-lg font-bold"
                    variant="ghost"
                  >
                    <span>
                      <img src="/google.svg" alt="google" />
                    </span>
                    {type === "register" ? "Register" : "Continue"} with Google
                  </Button>
                </div>
              ) : type === "forget" || type === "new" ? null : (
                <div
                  className={cn(
                    "text-sm flex-center gap-1 mt-14 my-dell:mt-20",
                    {
                      "mt-[30px] my-dell:mt-5":
                        type === "otp2" || type === "passUpdate",
                    }
                  )}
                >
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

import React, { useEffect } from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import FormRow from "./FormRow";
import { useState } from "react";
// import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { formTitle, otp_choice } from "../constants";
import { useGlobalContext } from "../context";

import { cn } from "../lib/utils";
import Btn from "./Btn";
import OtpInput from "./OtpInput";
import registerUser from "../lib/actions/register";
import loginUser from "../lib/actions/login";
import axios from "axios";
import verification from "../lib/actions/verify";
import requestOtp from "../lib/actions/requestOtp";

const getDescription = (type) => {
  return type === "otp2"
    ? "please enter the one time password sent (OTP)"
    : type === "forget"
    ? "Enter registered phone number or email to receive a reset code"
    : null;
};

const formClassName = (type) => {
  return cn({
    "my-dell:mt-20": type === "otp",
    "my-dell:mt-24": type === "complete",
    "my-dell:mt-32":
      type === "otp2" ||
      type === "forget" ||
      type === "new" ||
      type === "passUpdate",
  });
};

const ReusableForm = ({ type = "register" }) => {
  const {
    Dispatch,
    showAlert,
    // hideAlert,
    globalState: { user },
  } = useGlobalContext();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
    checkPass: "",
    phone: "",
    state: "",
    address: "",
    otp: "email",
    otpValue: "",
  });

  const [active, setActive] = useState(true);

  useEffect(() => {
    const getFormData = localStorage.getItem("formData");
    if (getFormData !== null) {
      setFormData(JSON.parse(getFormData));
    }
  }, []);

  useEffect(() => {
    const { fullname, email, password, checkPass, phone, state, address } =
      formData;

    if (type === "register" && fullname && email && password && checkPass) {
      setActive(false);
    } else if (type === "login" && email && password && checkPass) {
      setActive(false);
    } else if (type === "complete" && phone && state && address) {
      setActive(false);
    } else if (type === "verification") {
      const { otpValue } = formData;
      const numberOfCharacters = otpValue.split("").length;
      if (numberOfCharacters === 5) {
        setActive(false);
      } else {
        setActive(true);
      }
    } else {
      setActive(true);
    }
  }, [formData]);

  /**Create a fucntion to dispatch and navigate base on type */
  const switchTypeNavigate = (homePage, link) => {
    Dispatch("changeHomePage", { homePage });
    setActive(true);
    navigate(link);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    switch (type) {
      case "register":
        const { password, checkPass } = formData;
        const passwordMatches = password === checkPass;
        if (!passwordMatches) {
          showAlert("success", "password unmatch");
          return;
        }
        return switchTypeNavigate(
          "complete",
          "/authentication/complete-profile"
        );

      case "complete":
        return switchTypeNavigate("otp", "/authentication/choose-otp");

      case "verification":
        const { otpValue } = formData;
        await verification(otpValue, showAlert, switchTypeNavigate);
        return;

      case "forget":
        return switchTypeNavigate("new", "/authentication/forget-password");

      case "new":
        return switchTypeNavigate(
          "passUpdate",
          "/authentication/update-passcode"
        );

      case "login":
        await loginUser(formData, showAlert, switchTypeNavigate, Dispatch);
        return;
      default:
        console.log("jose");
    }
  };

  return (
    <>
      {type === "congrats" ? (
        <div className="my-dell:mt-32">
          <Logo className="w-[122px] h-[81px] mx-auto" />
          <Heading
            title={formTitle[type]}
            className="text-center mt-2 my-dell:mt-10"
          />

          <div className="congrats-board">
            <div className="rounded-full bg-eco-green-dark size-20 flex-center">
              <img src="/tick.svg" alt="tick" />
            </div>
          </div>

          <div className="mt-0 my-dell:mt-14 max-w-[343px] mx-auto">
            <Btn
              text="Proceed"
              size="full"
              to="/authentication/account"
              handleClick={() => switchTypeNavigate("login")}
            />
            <div className="text-sm flex-center gap-1 mt-[14px]">
              <img src="/small-lock.svg" alt="lock" />
              Your info is safely secure
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={formClassName(type)}>
          <Logo className="w-[122px] h-[81px] mx-auto" />
          <Heading
            title={formTitle[type]}
            className="text-center mt-2 my-dell:mt-10"
            description={getDescription(type)}
          />

          {type === "otp" ? (
            <div className="r-form-body">
              <p>Where should we send your OTP?</p>
              {otp_choice.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="px-4 py-2 flex items-center border-2"
                    onClick={async () => {
                      // setFormData((prev) => ({
                      //   ...prev,
                      //   otp: item.title.toLowerCase(),
                      // }));
                      await registerUser(
                        formData,
                        showAlert,
                        switchTypeNavigate
                      );
                    }}
                  >
                    <div>
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <p className="ml-3">{item.title}</p>
                  </div>
                );
              })}
            </div>
          ) : type === "verification" ? (
            <div className="r-form-body-margin w-full md:w-[396px] mx-auto border-8">
              <div className="flex-center">
                <OtpInput
                  value={formData.otpValue}
                  handleChange={(value) => {
                    setFormData((prev) => ({ ...prev, otpValue: value }));
                    // console.log(formData)
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <p>
                  Didn't receive an OTP?{" "}
                  <span
                    className="text-blue-600 cursor-pointer"
                    onClick={async () => {
                      await requestOtp(showAlert, formData);
                    }}
                  >
                    Resend
                  </span>
                </p>
                <p className="">00:30</p>
              </div>
            </div>
          ) : type === "login" ? (
            <div className="r-form-body">
              <FormRow
                type="text"
                label="Email or Phone number"
                name="username"
                value={formData.username}
                handleChange={handleChange}
                auth
              />
              <FormRow
                type="password"
                label="Password"
                name="password"
                value={formData.password}
                handleChange={handleChange}
                auth
              />
              <FormRow
                type="password"
                label="Confirm Password"
                name="checkPass"
                value={formData.checkPass}
                handleChange={handleChange}
                auth
              />
            </div>
          ) : type === "forget" ? (
            <div className="r-form-body">
              <FormRow
                type="text"
                label="Email or phone number"
                name="name"
                value={formData.name}
                handleChange={handleChange}
                auth
              />
            </div>
          ) : type === "new" ? (
            <div className="r-form-body">
              <FormRow
                type="password"
                label="New Password"
                name="password"
                value={formData.password}
                handleChange={handleChange}
                auth
              />
              <FormRow
                type="password"
                label="Confirm Password"
                name="checkPass"
                value={formData.checkPass}
                handleChange={handleChange}
                auth
              />
            </div>
          ) : (
            <div className="r-form-body">
              <FormRow
                type="text"
                label={type === "register" ? "Full Name" : "Phone"}
                name={type === "register" ? "fullname" : "phone"}
                value={type === "register" ? formData.fullname : formData.phone}
                handleChange={handleChange}
                auth
              />
              <FormRow
                type={type === "register" ? "email" : "text"}
                label={type === "register" ? "Email" : "State of residence"}
                name={type === "register" ? "email" : "state"}
                value={type === "register" ? formData.email : formData.state}
                handleChange={handleChange}
                auth
              />
              <FormRow
                type={type === "register" ? "password" : "text"}
                label={type === "register" ? "Create Password" : "Address"}
                name={type === "register" ? "password" : "address"}
                value={
                  type === "register" ? formData.password : formData.address
                }
                handleChange={handleChange}
                auth
              />
              {type === "register" && (
                <FormRow
                  type="password"
                  label="Confirm Password"
                  name="checkPass"
                  value={formData.checkPass}
                  handleChange={handleChange}
                  auth
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
                onClick={() => switchTypeNavigate("forget")}
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
                disabled={active}
              />
              {/* for login route to sign up */}
              {type === "login" && (
                <p className="text-center mt-[30px] my-dell:mt-10 text-eiteen">
                  Dont have an account?{" "}
                  <Link
                    to="/authentication/register"
                    onClick={() => switchTypeNavigate("register")}
                    className="text-eco-green"
                  >
                    Sign Up!
                  </Link>
                </p>
              )}
              {/* google button or text of safety */}
              {type === "register" || type === "login" ? (
                <div className="text-center mt-[30px] my-dell:mt-10">
                  {type === "register" && (
                    <p className="font-bold text-center text-base mb-1">or</p>
                  )}
                  <Btn
                    // className="rounded-full w-full flex items-center gap-10 shadow-lg font-bold"
                    // variant="ghost"
                    text={
                      type === "register"
                        ? "Register with Google"
                        : "Continue with Google"
                    }
                    size="full"
                    type="invisible"
                    icon={
                      <span className="mr-3">
                        <img src="/google.svg" alt="google" />
                      </span>
                    }
                  />
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

import React, { useEffect } from "react";
import Logo from "./Logo";
import Heading from "./Heading";
import FormRow from "./FormRow";
import { useState } from "react";
// import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import { formTitle, otp_choice } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { cn } from "../lib/utils";
import Btn from "./Btn";
import OtpInput from "./OtpInput";
import loginUser from "../lib/requests/login";
import verification from "../lib/requests/verify";
import requestOtp from "../lib/requests/auth/otp-request";
import { addUser } from "../store/slices/user-slice";
import { addItemToLs, getItemFromLs } from "../lib/ls";
import { changeInputValue, setFormData } from "../store/slices/form-data-slice";
import FormInputs from "./FormInputs";
import {
  alertUser,
  changeAuthPage,
  changeVerificationType,
  hideAlert,
} from "../store/slices/global-slice";
import verifyOtp from "../lib/requests/auth/otp-verification";
import resetPassword from "../lib/requests/auth/reset-password";

const getDescription = (type) => {
  return type === "verification"
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
  // redux globals and dispatch func
  const formData = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [active, setActive] = useState(true);

  const showAlert = (msg) => {
    dispatch(alertUser(msg));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(changeInputValue({ key, value }));
  };

  const handleOtpType = (type) => {
    dispatch(changeInputValue({ key: "message_type", value: type }));
  };

  const changeAuthenticationPageAndRoute = (link, authPage) => {
    navigate(link);
    dispatch(changeAuthPage(authPage));
    setActive(true);
  };

  useEffect(() => {
    const data = getItemFromLs("formData");
    // dispatch(setFormData(data));
    console.log(data);
  }, []);

  useEffect(() => {
    const {
      fullname,
      email,
      password,
      checkPass,
      phone,
      state,
      address,
      username,
    } = formData;

    if (type === "register" && fullname && email && password && checkPass) {
      setActive(false);
    } else if (type === "login" && username && password && checkPass) {
      setActive(false);
    } else if (type === "complete" && phone && state && address) {
      setActive(false);
    } else if (type === "forget" && username) {
      setActive(false);
    } else if (type === "new" && password && checkPass) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, checkPass, otpValue, username, email } = formData;
    switch (type) {
      case "register":
        console.log("who");
        const passwordMatches = password === checkPass;
        if (!passwordMatches) {
          showAlert("password unmatch");
          return;
        }
        addItemToLs("user-email", email);
        return changeAuthenticationPageAndRoute(
          "/authentication/complete-profile",
          "complete"
        );

      case "complete":
        return changeAuthenticationPageAndRoute(
          "/authentication/choose-otp-method",
          "otpMethod"
        );

      case "forget":
        dispatch(changeVerificationType("update-password"));
        addItemToLs("user-email", username);
        try {
          const { detail } = await requestOtp({ username });
          showAlert(detail);
          return navigate("/authentication/verification");
        } catch (error) {
          showAlert("error fetching otp");
          return;
        }

      case "new":
        console.log(username);
        try {
          const { detail } = await resetPassword({
            username,
            password,
            re_password: checkPass,
          });
          showAlert(detail);
          return changeAuthenticationPageAndRoute(
            "/authentication/login",
            "login"
          );
        } catch (error) {
          console.log(error);
          showAlert("error reseting passcode");
        }
        return;

      case "login":
        try {
          await loginUser(formData, showAlert);
          return changeAuthenticationPageAndRoute("/", null);
        } catch (error) {
          console.log(error);
          return;
        }
      // return;
      default:
        throw new Error("i dont know what action to take");
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
              to="/authentication/register-as"
              handleClick={() => {
                dispatch(changeAuthPage("register-as"));
              }}
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

          <FormInputs
            type={type}
            formData={formData}
            handleChange={handleChange}
            handleOtpType={handleOtpType}
          />

          {type === "login" && (
            <div className="flex items-center justify-between w-full my-dell:w-[80%] mx-auto mb-[30px] my-dell:mb-10">
              <div className="flex gap-2">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link
                to="/authentication/forgot-password"
                onClick={() => dispatch(changeAuthPage("forget"))}
              >
                <p className="font-semibold">Forgot Password?</p>
              </Link>
            </div>
          )}

          {type === "otpMethod" ? null : (
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
                    onClick={() => dispatch(changeAuthPage("register"))}
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

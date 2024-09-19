import Logo from "../shared/Logo";
import Heading from "../shared/Heading";
import { Link } from "react-router-dom";
import { formTitle } from "../../constants";
import { cn } from "../../lib/utils";
import Btn from "../shared/Btn";
import FormInputs from "./FormInputs";
import useAuthFormDefault from "../../utils/useAuthForm";
import Google from "../../assets/svg/Google";
import ForgetTab from "./ForgetTab";
import Congrats from "./Congrats";

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
  const { handleSubmit, formData, disabled, changeAuthenticationPage } =
    useAuthFormDefault();

  return (
    <>
      {type === "congrats" ? (
        <Congrats />
      ) : (
        <form onSubmit={handleSubmit} className={formClassName(type)}>
          <Logo className="w-[122px] h-[81px] mx-auto" />

          <Heading
            title={formTitle[type]}
            className="text-center mt-2 my-dell:mt-10"
            description={getDescription(type)}
          />

          <FormInputs type={type} formData={formData} />

          {type === "login" && (
            <ForgetTab changeAuthenticationPage={changeAuthenticationPage} />
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
                disabled={disabled}
              />

              {/* for login route to sign up */}
              {type === "login" && (
                <p className="switch-login">
                  Dont have an account?{" "}
                  <Link
                    to="/authentication/register"
                    onClick={() => changeAuthenticationPage("register")}
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
                    text={
                      type === "register"
                        ? "Register with Google"
                        : "Continue with Google"
                    }
                    size="full"
                    type="invisible"
                    icon={<Google />}
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

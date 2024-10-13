import React from "react";
import SharedStepLayout from "../SharedStepLayout";
import { Link, useNavigate } from "react-router-dom";
import ForgetTab from "../../auth/ForgetTab";
import ReusableFormRows from "../../auth/ReusableFormRows";
import { useSelector } from "react-redux";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import Google from "../../../assets/svg/Google";
import dispatchables from "../../../utils/dispatchables";
import { useGlobalAuthContext } from "../../../contexts/AuthContext";
import { LoginUser } from "../../../services/auth";
import { addItemToLs } from "../../../utils/ls";
import Btn from "@/components/shared/btn/Btn";
import { onboarding_descs } from "@/constants";

const Login = ({ nextProcess, prevProcess }) => {
  const navigate = useNavigate();
  const { username, password } = useSelector((state) => state.formData);
  const isDisbaled = useAreInputsFilled(username && password);
  const { AuthenticateLogin } = useGlobalAuthContext();
  const { loading, unloading, showAlert } = dispatchables();

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading();
    try {
      const link = await LoginUser({
        username,
        password,
      });
      console.log(link);
      unloading();
      AuthenticateLogin();
      showAlert("Login Sucess");
      navigate(link);
    } catch (error) {
      showAlert(error.message);
      unloading();
    }
  };

  const goToRegister = () => addItemToLs("onboarding-process", 0);

  return (
    <SharedStepLayout
      text={onboarding_descs.login}
      headTitle="Log in to your Account!"
      prevProcess={prevProcess}
    >
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="space-y-7">
          <ReusableFormRows type="login" />
        </div>

        <div className=" mt-14">
          <ForgetTab nextProcess={nextProcess} />
          <div className="w-[343px] mx-auto">
            <Btn
              text="Login"
              styling="btn btn--lg btn--primary w-full rounded-full"
              disabled={isDisbaled}
            />

            <div className="mt-5">
              <p className="switch-login my-[50px]">
                Dont have an account?{" "}
                <Link
                  to="/onboarding"
                  className="text-basic"
                  onClick={goToRegister}
                >
                  Sign Up
                </Link>
              </p>

              <Btn
                text="Continue with Google"
                styling="w-full h-14 rounded-full bg-white shadow-md text-black"
                icon={<Google />}
              />
            </div>
          </div>
        </div>
      </form>
    </SharedStepLayout>
  );
};

export default Login;

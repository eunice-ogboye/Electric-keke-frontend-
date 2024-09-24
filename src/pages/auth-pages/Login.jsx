import { Link, useNavigate } from "react-router-dom";
import ReusableFormRows from "../../components/auth/ReusableFormRows";
import Logo from "../../components/shared/Logo";
import React, { useEffect, useState } from "react";
import CustomizedBtn from "../../components/shared/CustomizedBtn";
import Google from "../../assets/svg/Google";
import Heading from "../../components/shared/Heading";
import ForgetTab from "../../components/auth/ForgetTab";
import { useSelector } from "react-redux";
import dispatchables from "../../utils/dispatchables";
import { useGlobalAuthContext } from "../../contexts/AuthContext";
import { LoginUser } from "../../lib/requests/auth";

const Login = () => {
  const navigate = useNavigate();
  const { AuthenticateLogin } = useGlobalAuthContext();
  const { loading, unloading, showAlert } = dispatchables();
  const [isLoading, setIsLoading] = useState(true);
  const { username, password } = useSelector((state) => state.formData);

  useEffect(() => {
    if (username && password) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    loading();
    try {
      const link = await LoginUser({
        username,
        password,
      });
      console.log(link)
      unloading();
      AuthenticateLogin();
      showAlert("Login Sucess");
      navigate(link);
    } catch (error) {
      showAlert(error.message)
      unloading();
    }
  };

  return (
    <div className="auth-page-right">
      <div className="w-full">
        <div className="auth-head">
          <Logo className="flex-center" logoClassName="w-[122px]" />
          <Heading title="Log in to Your Account" tclass="auth-title" />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="space-y-7">
            <ReusableFormRows type="login" />
          </div>

          <div className=" mt-14">
            <ForgetTab />
            <div className="w-[343px] mx-auto border">
              <CustomizedBtn
                text="Login"
                className="primary-btn h-14 w-full rounded-full"
                disabled={isLoading}
              />

              <div className="mt-5">
                <p className="switch-login my-[50px]">
                  Dont have an account?{" "}
                  <Link
                    to="/authentication/register"
                    // onClick={() => changeAuthenticationPage("register")}
                    className="text-eco-green"
                  >
                    Sign Up
                  </Link>
                </p>

                <CustomizedBtn
                  text="Continue with Google"
                  className="w-full h-14 rounded-full bg-white shadow-md text-black"
                  icon={<Google />}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

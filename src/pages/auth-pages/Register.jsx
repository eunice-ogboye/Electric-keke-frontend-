import { Link, useNavigate } from "react-router-dom";
import ReusableFormRows from "../../components/auth/ReusableFormRows";
import Logo from "../../components/shared/Logo";
import React, { useEffect, useState } from "react";
import CustomizedBtn from "../../components/shared/CustomizedBtn";
import Google from "../../assets/svg/Google";
import Heading from "../../components/shared/Heading";
import { addItemToLs } from "../../lib/ls";
import dispatchables from "../../utils/dispatchables";
import { useSelector } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { showAlert } = dispatchables();
  const { fullname, email, password, re_password } = useSelector(
    (state) => state.formData
  );

  useEffect(() => {
    if (fullname && email && password && re_password) {
      setIsLoading(false);
    }else {
      setIsLoading(true);
    }
  }, [fullname, email, password, re_password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const passwordMatches = password === re_password;
    if (!passwordMatches) {
      showAlert('password should match')
      return
    }
    navigate('/authentication/complete')
  };

  return (
    <div className="auth-page-right">
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
              to="/authentication/login"
              // onClick={() => changeAuthenticationPage("register")}
              className="text-eco-green"
            >
              Login!
            </Link>
          </p>

          <div className="w-[343px] mx-auto">
            <CustomizedBtn
              text="Continue"
              className="primary-btn h-14 w-full rounded-full"
              disabled={isLoading}
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
  );
};

export default Register;

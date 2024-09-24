import ReusableFormRows from "../../components/auth/ReusableFormRows";
import Logo from "../../components/shared/Logo";
import React, { useEffect, useState } from "react";
import CustomizedBtn from "../../components/shared/CustomizedBtn";
import Assurance from "../../components/auth/Assurance";
import Heading from "../../components/shared/Heading";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dispatchables from "../../utils/dispatchables";

const Complete = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const { phone, state, address } = useSelector((state) => state.formData);
  const {changeAuthenticationPage} = dispatchables();

  useEffect(() => {
    if (phone && state && address) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [phone, state, address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    changeAuthenticationPage('otpMethod')
    navigate('/authentication/otp')
  };

  return (
    <div className="auth-page-right">
      <div className="w-full">
        <div className="auth-head">
          <Logo className="flex-center" logoClassName="w-[122px]" />
          <Heading title="Complete your profile" tclass="auth-title" />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="space-y-7 mb-6 md:mb-14">
            <ReusableFormRows type="complete" />
          </div>

          <div className="w-[343px] mx-auto">
            <CustomizedBtn
              text="Continue"
              className="primary-btn h-14 w-full rounded-full mb-4"
              disabled={isLoading}
            />
            <Assurance />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Complete;

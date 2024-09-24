import ReusableFormRows from "../../components/auth/ReusableFormRows";
import Logo from "../../components/shared/Logo";
import React from "react";
import CustomizedBtn from "../../components/shared/CustomizedBtn";
import Heading from "../../components/shared/Heading";
import { useSelector } from "react-redux";
import { ResetPassword } from "../../lib/requests/auth";
import { useNavigate } from "react-router-dom";
import dispatchables from "../../utils/dispatchables";

const New = () => {
  const navigate = useNavigate();
  const {showAlert} = dispatchables();
  const { username, password, re_password } = useSelector(
    (state) => state.formData
  );

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const { detail } = await ResetPassword({
        username,
        password,
        re_password
      });
      showAlert(detail);
      return navigate("/authentication/login", "login");
    } catch (error) {
      console.log(error);
      showAlert("error reseting passcode");
    }
  }
  return (
    <div className="auth-page-right">
      <div className="w-full">
        <div className="auth-head">
          <Logo className="flex-center" logoClassName="w-[122px]" />
          <Heading title="Enter New Password" tclass="auth-title" />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="space-y-7">
            <ReusableFormRows type="new" />
          </div>

          <div className="max-w-[343px] mx-auto mt-14">
            <CustomizedBtn
              text="Continue"
              className="primary-btn h-14 w-full rounded-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;

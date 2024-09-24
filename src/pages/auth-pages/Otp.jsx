import { otp_choice } from "../../constants";
import Logo from "../../components/shared/Logo";
import React from "react";
import CustomizedBtn from "../../components/shared/CustomizedBtn";
import Assurance from "../../components/auth/Assurance";
import Heading from "../../components/shared/Heading";
import dispatchables from "../../utils/dispatchables";
import { useSelector } from "react-redux";
import { RegisterUser } from "../../lib/requests/auth";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();
  const formData = useSelector((state) => state.formData);
  const { switchVerificationType, chooseOtpMethod, showAlert } =
    dispatchables();

  const handleSubmit = async () => {
    switchVerificationType("activate");
    console.log(formData)
    try {
      await RegisterUser(formData);
      // showAlert("Otp Sent for verification");
      // changeAuthenticationPage("verification");
      // navigate("/authentication/verification");
    } catch (error) {
      showAlert(error.message);
      // showAlert("Problem")
      // showAlert("Something dae wrong")
      // this is here for development purpos
      // navigate("/authentication/verification");
    }
  };

  return (
    <div className="auth-page-right">
      <div className="w-full">
        <div className="auth-head">
          <Logo className="flex-center" logoClassName="w-[122px]" />
          <Heading title="OTP!" tclass="auth-title" />
        </div>

        <div className="auth-form space-y-7">
          <p>Where should we send your OTP?</p>
          {otp_choice.map((item) => {
            return (
              <div
                key={item.title}
                className={`otp-opt ${
                  item.title.toLowerCase() === formData.message_type &&
                  "bg-eco-green-faint"
                }`}
                onClick={() => chooseOtpMethod(item.title.toLowerCase())}
              >
                <div>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p className="ml-3">{item.title}</p>
              </div>
            );
          })}
        </div>

        <div className="w-[343px] mx-auto mt-6">
          <CustomizedBtn
            text="Continue"
            className="primary-btn h-14 w-full rounded-full mb-4"
            handleClick={handleSubmit}
          />
          <Assurance />
        </div>
      </div>
    </div>
  );
};

export default Otp;

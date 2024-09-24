import Logo from "../../components/shared/Logo";
import Heading from "../../components/shared/Heading";
import ReusableFormRows from "../../components/auth/ReusableFormRows";
import CustomizedBtn from "../../components/shared/CustomizedBtn";
import { useEffect, useState } from "react";
import dispatchables from "../../utils/dispatchables";
import { useSelector } from "react-redux";
import { addItemToLs } from "../../lib/ls";
import { RequestOtp } from "../../lib/requests/auth";
import { useNavigate } from "react-router-dom";

const Forget = () => {
  const { username } = useSelector((state) => state.formData);
  const [isLoading, setIsLoading] = useState(true);
  const { switchVerificationType, showAlert } = dispatchables();
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [username]);

  const handleSubmit = async (e) => {
    console.log(username)
    e.preventDefault();
    addItemToLs("user-email", username);
    try {
      const { detail } = await RequestOtp({ username });
      showAlert(detail);
      switchVerificationType('update-password');
      navigate('/authentication/verification')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-page-right">
      <div className="w-full">
        <div className="auth-head">
          <Logo className="flex-center" logoClassName="w-[122px]" />
          <Heading
            title="Forgot Password"
            tclass="auth-title"
            description="Enter registered phone number or email to receive a reset code"
            dclass="auth-desc"
          />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="space-y-7">
            <ReusableFormRows type="forget" />
          </div>
          <div className="w-[343px] mx-auto border mt-10">
            <CustomizedBtn
              // href="/authentication/verification"
              text="Send Code"
              className="h-14 w-full rounded-full bg-eco-green"
              disabled={isLoading}
              handleClick={() => {
                // console.log("jose")
                switchVerificationType("update-password");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;

import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "../../../store/slices/form-data-slice";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import SharedStepLayout from "../SharedStepLayout";
import Logo from "../../shared/Logo";
import Heading from "../../shared/Heading";
import OtpInput from "../../OtpInput";
import ResendOtpTab from "../../auth/ResendOtpTab";
import CustomizedBtn from "../../shared/CustomizedBtn";
import Assurance from "../../auth/Assurance";
import { getItemFromLs } from "../../../utils/ls";
import { OtpVerification } from "../../../services/auth";

const VerifyOtp = ({ nextProcess }) => {
  const { otpValue } = useSelector((state) => state.formData);
  const dispatch = useDispatch();

  const setOtpValue = (value) => {
    dispatch(changeInputValue({ key: "otpValue", value }));
  };

  const isDisbaled = useAreInputsFilled(otpValue.split("").length === 5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // logic to activate account
    try {
      // the logic
      const otpParam = {
        id: getItemFromLs("userId"),
        otp: otpValue,
      };
      const { detail } = await OtpVerification(otpParam);
      console.log(detail);
      nextProcess();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SharedStepLayout text="Enter the code sent to your chosen email or phone number to reset your password. This helps us verify your identity and secure your Eco-Ride account.">
      <div className="auth-page-right">
        <div className="w-full">
          <div className="auth-head">
            <Logo className="flex-center" logoClassName="w-[122px]" />
            <Heading
              title="Enter Code"
              description="Please enter the one time password sent (OTP)"
              tclass="auth-title"
              dclass="text-center text-sm text-eiteen font-josefin"
            />
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="max-w-[438px] mx-auto space-y-4">
              <div>
                <OtpInput
                  value={otpValue}
                  handleChange={(value) => {
                    setOtpValue(value);
                  }}
                />
              </div>

              <ResendOtpTab verificationType="update-password" />
            </div>

            <div className="max-w-[343px] mx-auto space-y-4 mt-6 lg:mt-14">
              <CustomizedBtn
                text="Continue"
                className="h-14 w-full rounded-full bg-eco-green"
                disabled={isDisbaled}
              />
              <Assurance />
            </div>
          </form>
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default VerifyOtp;

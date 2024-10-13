import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "../../../store/slices/form-data-slice";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import SharedStepLayout from "../SharedStepLayout";
import OtpInput from "../../OtpInput";
import ResendOtpTab from "../../auth/ResendOtpTab";
import Assurance from "../../auth/Assurance";
import { getItemFromLs } from "../../../utils/ls";
import { OtpVerification } from "../../../services/auth";
import Btn from "@/components/shared/btn/Btn";
import { onboarding_descs } from "@/constants";

const VerifyOtp = ({ nextProcess, prevProcess }) => {
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
    <SharedStepLayout
      text={onboarding_descs.reset_otp}
      headTitle="Enter Code"
      headDesc="Please enter the one time password sent (OTP)"
      prevProcess={prevProcess}
    >
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
          <Btn
            text="Continue"
            styling="btn btn--lg btn--primary w-full rounded-full"
            disabled={isDisbaled}
          />
          <Assurance />
        </div>
      </form>
    </SharedStepLayout>
  );
};

export default VerifyOtp;

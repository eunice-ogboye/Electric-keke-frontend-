import Assurance from "../../auth/Assurance";
import SharedStepLayout from "../SharedStepLayout";
import CustomizedBtn from "../../shared/CustomizedBtn";
import ReusableFormRows from "../../auth/ReusableFormRows";
import Logo from "../../shared/Logo";
import Heading from "../../shared/Heading";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import { useSelector } from "react-redux";
import { ArrowLeft } from "lucide-react";

const Step2 = ({ nextProcess, prevProcess }) => {
  const { phone, state, address } = useSelector((state) => state.formData);
  const isDisabled = useAreInputsFilled((phone, state, address));

  return (
    <SharedStepLayout text="Complete your profile to unlock the full EcoRide experience. Help us personalize your journey and enhance your eco-friendly rides.">
      <div className="auth-page-right">
        <CustomizedBtn
          icon={<ArrowLeft />}
          className="absolute top-5 left-5"
          handleClick={prevProcess}
        />

        <div className="w-full">
          <div className="auth-head">
            <Logo className="flex-center" logoClassName="w-[122px]" />
            <Heading title="Complete your profile" tclass="auth-title" />
          </div>

          <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-7 mb-6 md:mb-14">
              <ReusableFormRows type="complete" />
            </div>

            <div className="w-[343px] mx-auto">
              <CustomizedBtn
                text="Continue"
                className="primary-btn h-14 w-full rounded-full mb-4"
                disabled={isDisabled}
                handleClick={() => nextProcess()}
              />
              <Assurance />
            </div>
          </form>
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default Step2;

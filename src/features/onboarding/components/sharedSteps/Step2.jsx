import SharedStep from "../../layouts/SharedStep";
import { useSelector } from "react-redux";
import { onboarding_descs } from "@/constants";
import { useAreInputsFilled } from "../../hooks/useAreInputsFilled";
import Assurance from "../Assurance";
import OnboardFormRows from "../OnboardFormRows";
import Btn from "@/components/btn/Btn";

const Step2 = ({ nextProcess, prevProcess }) => {
  const { phone, state, address } = useSelector((state) => state.formData);
  const isDisabled = useAreInputsFilled((phone, state, address));

  return (
    <SharedStep
      text={onboarding_descs.complete}
      headTitle="Complete your profile"
      prevProcess={prevProcess}
    >
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-7 mb-6 md:mb-14">
          <OnboardFormRows type="complete" />
        </div>

        <div className="w-[343px] mx-auto">
          <Btn
            text="Continue"
            styling="btn btn--lg btn--primary w-full rounded-full mb-4"
            disabled={isDisabled}
            onClick={() => nextProcess()}
          />
          <Assurance />
        </div>
      </form>
    </SharedStep>
  );
};

export default Step2;

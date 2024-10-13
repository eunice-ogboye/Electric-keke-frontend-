import Assurance from "../../auth/Assurance";
import SharedStepLayout from "../SharedStepLayout";
import ReusableFormRows from "../../auth/ReusableFormRows";
import { useAreInputsFilled } from "../../../hooks/useAreInputsFilled";
import { useSelector } from "react-redux";
import Btn from "@/components/shared/btn/Btn";
import { onboarding_descs } from "@/constants";

const Step2 = ({ nextProcess, prevProcess }) => {
  const { phone, state, address } = useSelector((state) => state.formData);
  const isDisabled = useAreInputsFilled((phone, state, address));

  return (
    <SharedStepLayout
      text={onboarding_descs.complete}
      headTitle="Complete your profile"
      prevProcess={prevProcess}
    >
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-7 mb-6 md:mb-14">
          <ReusableFormRows type="complete" />
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
    </SharedStepLayout>
  );
};

export default Step2;

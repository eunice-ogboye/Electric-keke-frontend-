import { onboarding_descs, otp_choice } from "@/constants"
import OtpChoice from "../OtpChoice";
import { getItemFromLs } from "@/utils/ls";
import { RegisterUser } from "@/services/auth";
import Btn from "@/components/btn/Btn";
import Assurance from "../Assurance";
import dispatchables from "@/utils/dispatchables";
import RegularList from "@/components/_design-patterns/RegularList";
import SharedStep from "../../layouts/SharedStep";

const PassengerStep3 = ({ nextProcess, prevProcess }) => {
  const { showAlert } = dispatchables();

  const handleSubmit = async () => {
    let lengthOfErrors = 0;
    const formData = getItemFromLs("formData");

    // console.log(formData);
    try {
      await RegisterUser(formData);
      showAlert("otp sent for verification");
      nextProcess();
    } catch (error) {
      const errorArr = error.data;
      showAlert(errorArr[0] || '500 error');
    }
  };

  return (
    <SharedStep
      text={onboarding_descs.otp}
      headTitle="OTP!"
      prevProcess={prevProcess}
    >
      <div className="auth-form space-y-7">
        <p>Where should we send your OTP?</p>
        <RegularList
          itemsToDisplay={otp_choice}
          itemComponent={OtpChoice}
        />
      </div>

      <div className="w-full max-w-[343px] mx-auto mt-6">
        <Btn
          text="Continue"
          styling="btn btn--lg btn--primary h-14 w-full rounded-full mb-4"
          onClick={handleSubmit}
        />
        <Assurance />
      </div>
    </SharedStep>
  );
};

export default PassengerStep3;

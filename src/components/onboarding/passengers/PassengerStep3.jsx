import SharedStepLayout from "../SharedStepLayout";
import Assurance from "../../auth/Assurance";
import Logo from "../../shared/Logo";
import { otp_choice } from "../../../constants";
import RegularList from "../../shared/RegularList";
import OtpChoice from "../OtpChoice";
import Heading from "../../shared/Heading";
import dispatchables from "../../../utils/dispatchables";
import { getItemFromLs } from "../../../utils/ls";
import { RegisterUser } from "../../../services/auth";
import { ArrowLeft } from "lucide-react";
import Btn from "@/components/shared/btn/Btn";

const PassengerStep3 = ({ nextProcess, prevProcess }) => {
  const { showAlert } = dispatchables();

  const handleSubmit = async () => {
    let lengthOfErrors = 0;
    const formData = getItemFromLs("formData");

    console.log(formData);
    try {
      // logic to get otp
      await RegisterUser(formData);
      showAlert("otp sent for verification");
      nextProcess();
    } catch (error) {
      const errorArr = error.data;
      showAlert(errorArr[0]);
      // for sake of development
      // nextProcess();
    }
  };

  return (
    <SharedStepLayout
      text="Choose where you will like to receive your OTP, via Phone number or Gmail. This step helps secure your EcoRide account."
      prevProcess={prevProcess}
    >
      <div className="onboarding__page--right">
        {/* <Btn
          icon={<ArrowLeft />}
          styling="absolute top-5 left-5"
          onClick={prevProcess}
        /> */}

        <div className="w-full">
          <div className="auth-head">
            <Logo className="flex-center" logoClassName="w-[122px]" />
            <Heading title="OTP!" tclass="auth-title" />
          </div>

          <div className="auth-form space-y-7">
            <p>Where should we send your OTP?</p>
            <RegularList
              itemsToDisplay={otp_choice}
              resourceName="otp_options"
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
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default PassengerStep3;

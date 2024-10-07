import React from "react";
import SharedStepLayout from "./SharedStepLayout";
import Heading from "../shared/Heading";
import Logo from "../shared/Logo";
import Assurance from "../auth/Assurance";
import Btn from "../shared/btn/Btn";

const Congrats = ({ nextProcess }) => {
  return (
    <SharedStepLayout text="Congratulations on successfully signing up for EcoRide! please proceed to login and start your eco-friendly journey with us.">
      <div className="auth-page-right">
        <div className="w-full">
          <div className="auth-head">
            <Logo className="w-[122px] h-[81px] mx-auto" />
            <Heading
              title="Continue to Login"
              className="text-center mt-2 tablet:mt-10"
            />
          </div>

          <div className="auth-form">
            <div className="congrats-board">
              <div className="flex-center">
                <img src="/congrats.svg" alt="tick" />
              </div>
            </div>

            <div className="mt-0 tablet:mt-14 max-w-[343px] mx-auto">
              <Btn
                text="Proceed"
                styling="w-full btn btn--hero btn--primary"
                onClick={() => nextProcess()}
              />
              <Assurance />
            </div>
          </div>
        </div>
      </div>
    </SharedStepLayout>
  );
};

export default Congrats;

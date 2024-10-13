import Btn from "@/components/btn/Btn";
import RiderShared from "../../layouts/RiderShared";
import Heading from "@/components/Heading";
import { driver_authProcess } from "@/constants";
import { useGlobalOnboardContext } from "@/features/onboarding/context/OnboardingContext";

const RiderStep4 = ({ nextProcess, prevProcess }) => {
  const { openUploadModal } = useGlobalOnboardContext();

  return (
    <RiderShared nextProcess={nextProcess}>
      <div className="driverauth">
        <div className="driverauth__img">
          <div className="size-full">
            <img
              src={driver_authProcess[1].img}
              alt={driver_authProcess[1].title}
              className="size-full"
            />
          </div>
        </div>

        <div>
          <Heading
            className="text-center"
            tclass="driverauth__title"
            title={driver_authProcess[1].title}
            description={driver_authProcess[1].desc}
            dclass="driverauth__desc"
          />

          <Btn
            text="Upload Driver's License"
            styling="btn btn--primary btn__driverauth"
            onClick={openUploadModal}
          />
        </div>
      </div>
    </RiderShared>
  );
};

export default RiderStep4;

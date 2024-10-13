import Btn from "@/components/btn/Btn";
import RiderShared from "../../layouts/RiderShared";
import Heading from "@/components/Heading";
import { driver_authProcess } from "@/constants";
import { useGlobalOnboardContext } from "../../context/OnboardingContext";

const RiderStep5 = ({ prevProcess, nextProcess }) => {
  const { openUploadModal } = useGlobalOnboardContext();

  return (
    <RiderShared nextProcess={nextProcess}>
      <div className="driverauth">
        <div className="driverauth__img">
          <div className="size-full">
            <img
              src={driver_authProcess[2].img}
              alt={driver_authProcess[2].title}
              className="size-full"
            />
          </div>
        </div>

        <div>
          <Heading
            className="text-center"
            tclass="driverauth__title"
            title={driver_authProcess[2].title}
            description={driver_authProcess[2].desc}
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

export default RiderStep5;

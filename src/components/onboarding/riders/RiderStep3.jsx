import RiderShared from "./RiderShared";
import Heading from "@/components/shared/Heading";
import { driver_authProcess } from "@/constants";
import dispatchables from "@/utils/dispatchables";
import UploadImageModal from "@/components/shared/modals/UploadImageModal";
import { useState } from "react";
import Btn from "@/components/shared/btn/Btn";
import { useGlobalOnboardContext } from "@/contexts/OnboardingContext";

const RiderStep3 = ({ nextProcess, prevProcess }) => {
  const { openUploadModal } = useGlobalOnboardContext();

  return (
    <>
      {/* {isModalOpen && <UploadImageModal nextProcess={nextProcess} />} */}
      <RiderShared nextProcess={nextProcess}>
        <div className="driverauth">
          <div className="driverauth__img">
            <div className="size-full">
              <img
                src={driver_authProcess[0].img}
                alt={driver_authProcess[0].title}
                className="size-full"
              />
            </div>
          </div>

          <div>
            <Heading
              className="text-center"
              tclass="driverauth__title"
              title={driver_authProcess[0].title}
              description={driver_authProcess[0].desc}
              dclass="driverauth__desc"
            />

            <Btn
              text="Upload Selfie"
              className="btn btn--primary btn__driverauth"
              onClick={openUploadModal}
            />
          </div>
        </div>
      </RiderShared>
    </>
  );
};

export default RiderStep3;

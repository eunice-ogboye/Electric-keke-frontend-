import RiderShared from "./RiderShared";
import CustomizedBtn from "@/components/shared/CustomizedBtn";
import Heading from "@/components/shared/Heading";
import { driver_authProcess } from "@/constants";
import dispatchables from "@/utils/dispatchables";

const RiderStep4 = ({ nextProcess, prevProcess }) => {
  const { openModalWithContent } = dispatchables();

  const handleClick = () => {
    openModalWithContent(
      "driver-auth",
      "md:max-w-[680px] laptop:max-w-[800px]",
      nextProcess
    );
  };

  return (
    <RiderShared>
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

          <CustomizedBtn
            text="Upload Driver's License"
            className="btn btn--primary btn__driverauth"
            handleClick={handleClick}
          />
        </div>
      </div>
    </RiderShared>
  );
};

export default RiderStep4;

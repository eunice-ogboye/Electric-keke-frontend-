import RiderShared from "../../layouts/RiderShared";
import { driver_authProcess } from "@/constants";
import Heading from "@/components/Heading";
import Loader from "@/components/loaders/Loader";

const Processing = () => {
  return (
    <RiderShared>
      <div className="driverauth">
        <div className="driverauth__processing">
          <Loader type="spin2" className="size-[153px]" />
        </div>

        <div className="mt-10">
          <Heading
            className="text-center"
            tclass="driverauth__title"
            title={driver_authProcess[3].title}
            description={driver_authProcess[3].desc}
            dclass="driverauth__desc"
          />
        </div>
      </div>
    </RiderShared>
  );
};

export default Processing;

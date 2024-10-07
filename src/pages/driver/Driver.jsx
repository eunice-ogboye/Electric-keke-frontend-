import Section from "../../sharedLayouts/Section";
import Choose from "../../components/shared/Choose";
import { useEffect, useState } from "react";
import Statistics from "../../components/driver/Statistics";
import dispatchables from "../../utils/dispatchables";
import { GetListOfBookings } from "../../services/bookings";
import { addItemToLs } from "../../utils/ls";
import NewRideModal from "@/components/shared/modals/NewRideModal";
// import { useSocket } from "../../hooks/useSocket";

const Driver = () => {
  // const socket = useSocket();
  const [online, setOnline] = useState(false);
  const [newRideRequest, setNewRideRequest] = useState(false);
  const closeModal = () => setNewRideRequest(false)

  useEffect(() => {
    let time_out = setTimeout(() => {
      setNewRideRequest(true);
      console.log("jose");
    }, 3000);

    return () => clearTimeout(time_out);
  }, []);

  return (
    <>
      {newRideRequest && <NewRideModal closeModal={closeModal} />}

      <Section darkLogo>
        <div className="driver-board">
          <div className="driver">
            {/* <ToggleStats /> */}
            <Choose
              containerClass="w-[225px] md:w[310px] h-11 md:h-16 rounded-[2rem] bg-white flex-center mt-6 md:mt-10 py-1 px-2  ml-auto md:mr-5"
              choice1txt={online ? "Online" : "Go Online"}
              choice2txt={online ? "Go Offline" : "Offline"}
              btnClass="rounded-full w-1/2 md:h-14 md:w-[171px]"
              addedClass1={online ? "driver-online-btn" : "driver-offline-btn"}
              addedClass2={online ? "driver-offline-btn" : "driver-online-btn"}
              condition={online}
              handleChoice1={() => setOnline(true)}
              handleChoice2={() => setOnline(false)}
            />
            <h2 className="font-bold font-josefin">Earnings</h2>

            <div className="mt-5 md:flex items-center justify-between">
              <Statistics />

              <div className="overflow-hidden ms-[77px] w-full md:w-1/2">
                <div className="w-[378px] md:w-[567px] h-[247px] md:h-[446px]">
                  <img
                    src="/driver_bg.png"
                    alt="driver"
                    className="transform -scale-x-100 size-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Driver;

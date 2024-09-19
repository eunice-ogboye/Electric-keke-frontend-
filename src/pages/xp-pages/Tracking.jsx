import Map from "../../components/shared/Map";
import Btn from "../../components/shared/Btn";
import DeliveryProcess, {
  DeliveryProcessLine,
} from "../../components/xp/DeliveryProcess";
import React from "react";
import { useDispatch } from "react-redux";
import { changeModalContent } from "../../store/slices/global-slice";

const Tracking = () => {
  const dispatch = useDispatch();
  return (
    <section className="home-pad py-5">
      <header className="flex items-center gap-2">
        <div>
          <img src="/arr-left.svg" alt="arr" />
        </div>
        <h2 className="font-bold">Ride Tracking</h2>
      </header>

      <div className="mt-4 md:mt-[31px] md:flex gap-6 items-start">
        <div className="w-full md:w-1/2 h-[603px] md:h-[881.32px]">
          <Map className="w-full h-full" />
        </div>

        <div className="w-full max-w-[586px] mt-3 md:mt-0">
          <div>
            <div>
              <div className="flex items-center py-2 px-0 md:px-4 justify-between bg-pgreen-1">
                <div className="size-[74px] md:size-[103px] rounded-full">
                  <img
                    src="/persons/rider1.png"
                    alt="rider name"
                    className="size-full object-cover object-center rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between  mt-2 md:mt-0 w-[72%]">
                  <div>
                    <p className="text-xl md:text-[28px] font-bold">
                      Harrison David
                    </p>
                    <p className="text-sm md:text-eiteen text-neutral">
                      On his way...
                    </p>
                  </div>

                  <div className="w-[88px] lg:w-[123px] flex items-center justify-between">
                    <div className="size-[35px] lg:size-[50px] flex-center">
                      <img src="/chat-rider.svg" alt="call rider" />
                    </div>
                    <div className="size-[35px] lg:size-[50px] flex-center">
                      <img src="/call-rider.svg" alt="call rider" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <DeliveryProcess
                  title="Driver Accepts Order"
                  image="/accept.svg"
                  desc="Estimated time: 3secs"
                />
                <DeliveryProcessLine success />
                <DeliveryProcess
                  title="On the way"
                  image="/way.svg"
                  desc="Estimated time: 3secs"
                />
                <DeliveryProcessLine />
                <DeliveryProcess
                  title="Drop off"
                  image="/drop-off.svg"
                  desc="Estimated time: 3secs"
                />
              </div>
            </div>

            <div className="mt-14">
              <div className="space-y-4">
                <div className="h-[70px] max-w-[586px] rounded-[14px] shadow-2xl flex items-center py-6 px-7">
                  <p className="text-eiteen">12, Olayiwola Close Ikeja</p>
                </div>
                <div className="h-[70px] max-w-[586px] rounded-[14px] shadow-2xl flex items-center py-6 px-7">
                  <p className="text-eiteen">10, West avenue street yaba</p>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-8">
                <div className="bg-eco-green-faint flex-center h-[56px] w-[179px] text-eiteen font-bold rounded-[10px]">
                  #3000
                </div>
                <Btn
                  text="Cancel Ride"
                  handleClick={() => {
                    dispatch(changeModalContent("rate"));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;

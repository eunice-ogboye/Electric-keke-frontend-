import Btn from "../components/Btn";
import DeliveryProcess, {
  DeliveryProcessLine,
} from "../components/DeliveryProcess";
import { useGlobalContext } from "../context";
import React from "react";

const Tracking = () => {
  const { Dispatch } = useGlobalContext();
  return (
    <section className="home-pad py-5">
      <header className="flex items-center gap-2">
        <div>
          <img src="/arr-left.svg" alt="arr" />
        </div>
        <h2 className="font-bold">Ride Tracking</h2>
      </header>

      <div className="mt-4 md:mt-[31px] md:flex gap-6 items-start">
        <div className="w-full md:w-1/2 h-96 md:h-[881.32px]">
          <img
            src="/tracking-map.png"
            alt="tracking"
            className="size-full object-cover object-center"
          />
        </div>

        <div className="w-full max-w-[586px] mt-3 md:mt-0 border">
          <div>
            <div>
              <div className="md:flex items-center py-2 px-4 justify-between bg-pgreen-1">
                <div className="size-[103px] rounded-full">
                  <img
                    src="/persons/rider1.png"
                    alt="rider name"
                    className="size-full object-cover object-center rounded-full"
                  />
                </div>
                <div className="border-2 flex items-center justify-between w-full mt-2 md:mt-0 md:w-[72%]">
                  <div>
                    <p className="text-[28px] font-bold">Harrison David</p>
                    <p className="text-eiteen text-neutral">On his way...</p>
                  </div>
                  <div className="w-[123px] border flex items-center justify-between">
                    <div className="size-[50px] flex-center">
                      <img src="/chat-rider.svg" alt="call rider" />
                    </div>
                    <div className="size-[50px] flex-center">
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
                <div className="bg-pgreen-1 flex-center h-[56px] w-[179px] text-eiteen font-bold rounded-[10px]">
                  #3000
                </div>
                <Btn text="Cancel Ride" handleClick={() => {
                  Dispatch('modalContent', {modalContent: "rate"})
                }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;

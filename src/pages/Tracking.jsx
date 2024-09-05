import Map from "../components/Map";
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

      <div className="track-board">
        <div className="track-map">
          <Map className="w-full h-full isolate" />
        </div>

        <div className="track-details">
          <div>
            <div>
              <div className="track-driver">
                <div className="size-[103px] rounded-full">
                  <img
                    src="/persons/rider1.png"
                    alt="rider name"
                    className="size-full object-cover object-center rounded-full"
                  />
                </div>
                <div className="track-driver-details">
                  <div>
                    <p className="text-[28px] font-bold">Harrison David</p>
                    <p className="track-driver-stats">On his way...</p>
                  </div>
                  <div className="track-cta">
                    <div className="track-action">
                      <img src="/chat-rider.svg" alt="call rider" />
                    </div>
                    <div className="track-action">
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
                <div className="track-location">
                  <p className="text-eiteen font-montserrat text-neutral">12, Olayiwola Close Ikeja</p>
                </div>

                <div className="track-location">
                  <p className="text-eiteen font-montserrat text-neutral">10, West avenue street yaba</p>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-8">
                <div className="ride-amount">
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

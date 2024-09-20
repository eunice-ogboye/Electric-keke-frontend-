import Map from "../../components/shared/Map";
import Btn from "../../components/shared/Btn";
import DeliveryProcess, {
  DeliveryProcessLine,
} from "../../components/xp/DeliveryProcess";
import React, { useEffect, useState } from "react";
import { getItemFromLs } from "../../lib/ls";
import { useNavigate } from "react-router-dom";

const onDestinationReached = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order());
    }, 10000);
  });
};

const Tracking = () => {
  const [rider] = useState(getItemFromLs("rider"));
  const [bookingInfo] = useState(getItemFromLs("book-data"));
  const navigate = useNavigate();

  useEffect(() => {
    // for developement purpos
    onDestinationReached(() => navigate('/transaction'))
  });

  return (
    <section className="home-pad pt-5 pb-20">
      <header className="flex items-center gap-2">
        <div>
          <img src="/arr-left.svg" alt="arr" />
        </div>
        <h2 className="font-bold">Ride Tracking</h2>
      </header>

      <div className="tracking-info-board">
        <div className="tracking-map">
          <Map className="w-full h-full" />
        </div>

        <div className="track-details">
          <div>
            <div className="rider-details">
              <div className="rider-photo-container">
                <img
                  src="/persons/rider1.png"
                  alt="rider name"
                  className="rider-photo"
                />
              </div>

              <div className="flex items-center justify-between  mt-2 md:mt-0 w-[72%]">
                <div>
                  <p className="text-xl md:text-[28px] font-bold">
                    {rider.fullname}
                  </p>
                  <p className="rider-status">On his way...</p>
                </div>

                <div className="ride-cta">
                  <div className="ride-cta-icon">
                    <img src="/chat-rider.svg" alt="call rider" />
                  </div>
                  <div className="ride-cta-icon">
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
              <div className="ride-location">
                <p className="text-eiteen">{bookingInfo.origin}</p>
              </div>
              <div className="ride-location">
                <p className="text-eiteen">{bookingInfo.destination}</p>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-x-8">
              <div className="ride-fare">#{bookingInfo.price}</div>
              <Btn text="Cancel Ride" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;

import Map from "../../components/shared/Map";
import Btn from "../../components/shared/Btn";
import DeliveryProcess, {
  DeliveryProcessLine,
} from "../../components/xp/DeliveryProcess";
import React, { useEffect, useState } from "react";
import { getItemFromLs } from "../../lib/ls";
import { useNavigate } from "react-router-dom";
import Person from "../../components/tracking/Person";
import TrackDetails from "./TrackDetails";
import Logo from "../../components/shared/Logo";

const onDestinationReached = (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(order());
    }, 10000);
  });
};

const Tracking = () => {
  const [user] = useState(getItemFromLs("user") || null);

  const [person] = useState(
    user.role === "user" ? getItemFromLs("rider") : getItemFromLs("passenger")
  );
  const [bookingInfo] = useState(getItemFromLs("book-data"));
  const navigate = useNavigate();

  useEffect(() => {
    // for developement purpos
    // onDestinationReached(() => navigate("/transaction"));
  });

  return (
    <section className="home-pad pt-5 pb-20">
      <header className="tracking-header">
        <div>
          <img src="/arr-left.svg" alt="arr" />
        </div>
        <Logo />
      </header>

      <h2 className="font-bold text-2xl">
        {user.role === "user" ? "Ride Tracking" : "Locate passenger"}
      </h2>

      <div className="tracking-info-board">
        <div className="tracking-map">
          <Map className="size-full" />
        </div>

        <div className="track-details">
          <div>
            <Person role={user.role} fullname={person.fullname} />

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

          <TrackDetails
            role={user.role}
            origin={bookingInfo.origin}
            destination={bookingInfo.destination}
            price={bookingInfo.price}
          />
        </div>
      </div>
    </section>
  );
};

export default Tracking;

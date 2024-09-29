import Map from "../../components/shared/Map";
import Btn from "../../components/shared/Btn";
import DeliveryProcess, {
  DeliveryProcessLine,
} from "../../components/xp/DeliveryProcess";
import React, { useEffect, useState } from "react";
import { addItemToLs, getItemFromLs } from "../../utils/ls";
import { useNavigate } from "react-router-dom";
import Person from "../../components/tracking/Person";
import TrackDetails from "./TrackDetails";
import Logo from "../../components/shared/Logo";
import Accept from "../../assets/svg/Accept";
import Way from "../../assets/svg/Way";
import Dropped from "../../assets/svg/Dropped";
import { GetListOfBookings, UpdateBooking } from "../../services/bookings";
import { useUpdateBooking } from "../../hooks/useUpdateBooking";
import { rideStatusUpdateRequest } from "../../services/bookings/abstracts";

const Tracking = () => {
  const [user] = useState(getItemFromLs("user") || null);
  const [person] = useState(
    user.role === "User" ? getItemFromLs("rider") : getItemFromLs("passenger")
  );
  const [currentRide, setCurrentRide] = useState(getItemFromLs("current-ride"));
  const navigate = useNavigate();

  useUpdateBooking("pending", setCurrentRide);
  useUpdateBooking("accepted", setCurrentRide);

  useEffect(() => {
    if (currentRide.status === "in_progress") {
      console.log("good to go");
      setTimeout(() => {
        (async () => {
          const rideToUpdateData = rideStatusUpdateRequest("completed");
          try {
            const data = await UpdateBooking(rideToUpdateData);
            console.log(data);
            if (user.role === "User") {
              navigate("/transaction");
            } else {
              console.log("i am a rider");
            }
          } catch (error) {
            console.log(error);
          }
        })();
      }, 10000);
    }
  }, [currentRide]);

  return (
    <section className="home-pad pt-5 pb-20">
      <header className="tracking-header">
        <div>
          <img src="/arr-left.svg" alt="arr" />
        </div>
        <Logo />
      </header>

      <h2 className="font-bold text-2xl">
        {user.role === "User" ? "Ride Tracking" : "Locate passenger"}
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
                icon={
                  <Accept
                    accept={
                      currentRide.status === "accepted" ||
                      currentRide.status === "in_progress"
                    }
                  />
                }
                desc="Estimated time: 3secs"
              />
              <DeliveryProcessLine success />
              <DeliveryProcess
                title="On the way"
                icon={
                  <Way
                    way={
                      currentRide.status === "in_progress" ||
                      currentRide.status === "completed"
                    }
                  />
                }
                desc="Estimated time: 3secs"
              />
              <DeliveryProcessLine />
              <DeliveryProcess
                title="Drop off"
                icon={<Dropped dropped={currentRide.status === "completed"} />}
                desc="Estimated time: 3secs"
              />
            </div>
          </div>

          <TrackDetails
            role={user.role}
            origin={currentRide.origin}
            destination={currentRide.destination}
            price={currentRide.price}
            status={currentRide.status === "in_progress"}
          />
        </div>
      </div>
    </section>
  );
};

export default Tracking;

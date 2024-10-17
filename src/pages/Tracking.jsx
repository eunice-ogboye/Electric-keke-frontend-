import Map from "@/components/Map";
import React, { useEffect, useState } from "react";
import { addItemToLs, getItemFromLs } from "../utils/ls";
import { useNavigate } from "react-router-dom";
import Person from "../features/tracking/components/Person";
import TrackDetails from "../features/tracking/components/TrackDetails";
import { LogoPlain } from "@/assets/svg/Logo";
import { GetListOfBookings, UpdateBooking } from "../features/booking/services";
import { useUpdateBooking } from "../hooks/useUpdateBooking";
// import { rideStatusUpdateRequest } from "../features/booking/services/abstracts";

import Btn from "@/components/btn/Btn";
import ArrLeft from "@/assets/svg/ArrLeft";
import DeliveryStats from "../features/tracking/components/DeliveryStats";
import Arrived from "../features/tracking/components/Arrived";
import RiderSummary from "../features/tracking/components/RiderSummary";
import ConfirmRideModal from "@/components/modals/ConfirmRideModal";
import { useModal } from "@/hooks/useModal";

const Tracking = () => {
  const [user] = useState(getItemFromLs("user") || null);
  const [person] = useState(
    user.role === "User" ? getItemFromLs("rider") : getItemFromLs("passenger")
  );
  const [currentRide, setCurrentRide] = useState(getItemFromLs("current-ride"));
  const navigate = useNavigate();
  const [hasArrived, setHasArrived] = useState(true);
  const { isModalOpen, openModal, closeModal } = useModal();

  // useUpdateBooking("pending", setCurrentRide);
  // useUpdateBooking("accepted", setCurrentRide);

  // useEffect(() => {
  //   if (currentRide.status === "in_progress") {
  //     console.log("good to go");
  //     setTimeout(() => {
  //       (async () => {
  //         const rideToUpdateData = rideStatusUpdateRequest("completed");
  //         try {
  //           const data = await UpdateBooking(rideToUpdateData);
  //           console.log(data);
  //           if (user.role === "User") {
  //             navigate("/transaction");
  //           } else {
  //             console.log("i am a rider");
  //           }
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       })();
  //     }, 10000);
  //   }
  // }, [currentRide]);

  return (
    <>
      <ConfirmRideModal
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />

      <section className="home-pad pt-5 pb-20">
        <header className="tracking-header">
          <Btn
            icon={<ArrLeft color="black" />}
            styling="bg-transparent"
            onClick={() => history.back()}
          />
          <LogoPlain />
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
              <Person
                role={user.role}
                fullname={person?.fullname || "airxist"}
                hasArrived={hasArrived}
              />

              {hasArrived ? <Arrived /> : <DeliveryStats role={user.role} />}
            </div>

            {hasArrived ? (
              <RiderSummary openModal={openModal} />
            ) : (
              <TrackDetails
                role={user.role}
                origin={currentRide?.origin || "origin"}
                destination={currentRide?.destination || "destination"}
                price={currentRide?.price || "price"}
                // status={currentRide.status === "in_progress"}
                status={false}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tracking;

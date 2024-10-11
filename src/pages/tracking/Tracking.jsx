import Map from "../../components/shared/Map";
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
import Btn from "@/components/shared/btn/Btn";
import ArrLeft from "@/assets/svg/ArrLeft";
import DeliveryStats from "./DeliveryStats";
import Arrived from "./Arrived";
import RiderSummary from "./RiderSummary";
import ConfirmRideModal from "@/components/shared/modals/ConfirmRideModal";
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

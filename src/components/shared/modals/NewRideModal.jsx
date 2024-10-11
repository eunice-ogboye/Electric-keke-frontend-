import React from "react";
import NewModal from "../CustomModal";
import SharedModalMap from "./SharedModalMap";
import RideDetails from "@/components/driver/RideDetails";
import Choose from "../Choose";
import dispatchables from "@/utils/dispatchables";
import {
  rideStatusLsUpdate,
  rideStatusUpdateRequest,
} from "@/services/bookings/abstracts";
import { UpdateBooking } from "@/services/bookings";
import { addItemToLs } from "@/utils/ls";
import { useNavigate } from "react-router-dom";

const NewRideModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const { showAlert, flipModal } = dispatchables();

  const acceptRide = async () => {
    // const rideToUpdateData = rideStatusUpdateRequest("accepted");

    try {
      // accept ride and navigate to tracking page
      // const data = await UpdateBooking(rideToUpdateData);
      // get passenger details
      addItemToLs("passenger", {
        fullname: "Passenger",
      });
      // rideStatusLsUpdate("accepted");

      navigate("/tracking");
      closeModal();
    } catch (error) {
      // catch error
      showAlert(error.message);
      navigate("/tracking");
    }
  };

  const declineRide = async () => {
    const rideToUpdateData = rideStatusUpdateRequest("cancelled");
    try {
      // cancle ride
      const data = await UpdateBooking(rideToUpdateData);
      console.log(data);
      rideStatusLsUpdate("cancelled");
      closeModal();
    } catch (error) {
      showAlert("Error declining ride");
    }
  };

  return (
    <NewModal definedState={true} modalStylling="modal-map__request">
      <SharedModalMap>
        <RideDetails />
        <Choose
          containerClass="pt-8 pb-4 flex flex-col gap-y-6"
          choice1txt="Accept"
          choice2txt="Reject"
          btnClass="w-full rounded-full h-14"
          addedClass1="bg-basic"
          addedClass2="bg-neutral-500"
          handleChoice1={acceptRide}
          handleChoice2={declineRide}
        />
      </SharedModalMap>
    </NewModal>
  );
};

export default NewRideModal;

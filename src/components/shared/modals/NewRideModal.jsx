import React from "react";
import CustomModal from "../CustomModal";
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

const NewRideModal = ({ isModalOpen, openModal, closeModal }) => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

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

      await closeModal();
      navigate("/tracking");
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
    <CustomModal
      isModalOpen={isModalOpen}
      openModal={openModal}
      modalStyling="modal-map__request"
      closeModal={closeModal}
      showCloseBtn={false}
    >
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
    </CustomModal>
  );
};

export default NewRideModal;

import React from "react";
import Choose from "./Choose";
import dispatchables from "../../utils/dispatchables";
import { useNavigate } from "react-router-dom";
import { addItemToLs, getItemFromLs } from "../../lib/ls";
import { UpdateBooking } from "../../lib/requests/booking";
import {
  rideStatusLsUpdate,
  rideStatusUpdateRequest,
} from "../../lib/requests/booking/abstracts";

const ModalActionBoard = ({ modalContent }) => {
  const { flipModal, showAlert } = dispatchables();
  const navigate = useNavigate();

  /**
   * wee need two handling options for the
   * choose modal action
   */

  const handleClick1 = async () => {
    const rideToUpdateData = rideStatusUpdateRequest("accepted");

    try {
      // accept ride and navigate to tracking page
      const data = await UpdateBooking(rideToUpdateData);
      // get passenger details
      addItemToLs("passenger", {
        fullname: "Passenger",
      });
      rideStatusLsUpdate("accepted");

      navigate("/tracking");
      flipModal(false);
    } catch (error) {
      // catch error
      showAlert(error.message);
    }
  };

  const handleClick2 = async () => {
    const rideToUpdateData = rideStatusUpdateRequest("cancelled");
    try {
      if (modalContent === "request-ride") {
        // cancle ride
        const data = await UpdateBooking(rideToUpdateData);
        rideStatusLsUpdate("cancelled");
        console.log(data);
      }
      flipModal(false);
    } catch (error) {}
  };

  return (
    <Choose
      containerClass="pt-8 px-9 pb-12 flex flex-col gap-y-6"
      choice1txt="Accept"
      choice2txt="Reject"
      btnClass="w-full rounded-full h-14"
      addedClass1="bg-eco-green"
      addedClass2="bg-eco-neutral-prime"
      handleChoice1={handleClick1}
      handleChoice2={handleClick2}
    />
  );
};

export default ModalActionBoard;

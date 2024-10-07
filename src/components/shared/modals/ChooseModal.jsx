import { useState } from "react";
import Btn from "../btn/Btn";
import NewModal from "../CustomModal";
import ChooseMain from "./ChooseMain";
import RideForm from "./RideForm";
import dispatchables from "@/utils/dispatchables";

const ChooseModal = ({ type }) => {
  const [rideForm, setMap] = useState(false);
  const { inputDataForBookingRequest } = dispatchables();

  const goToInputRideDetails = () => {
    setMap(true);
  };

  return (
    <NewModal
      trigger={Btn}
      triggerProps={{
        text: type === "ride" ? "Book a Ride" : "Request a Booking",
        styling:
          type === "ride"
            ? "btn--hero btn--primary"
            : "btn--hero btn--secondary",
        otherclickfunc:()  => inputDataForBookingRequest('booking_type', type)
      }}
      modalStylling={rideForm ? "modal-map__booking" : "modal__choose"}
      closeCallBack={() => setMap(false)}
    >
      {rideForm ? (
        <RideForm />
      ) : (
        <ChooseMain type={type} goToInputRideDetails={goToInputRideDetails} />
      )}
    </NewModal>
  );
};

export default ChooseModal;

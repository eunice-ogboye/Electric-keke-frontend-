import { useState } from "react";
import Btn from "../btn/Btn";
import NewModal from "../NewModal";
import ChooseMain from "./ChooseMain";
import RideForm from "./RideForm";

const ChooseModal = ({ type }) => {
  const [rideForm, setMap] = useState(false);

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
      }}
      modalStylling={rideForm ? "modal__map" : "modal__choose"}
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

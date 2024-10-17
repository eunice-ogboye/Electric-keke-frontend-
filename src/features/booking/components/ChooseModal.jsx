import { useState } from "react";
import ChooseMain from "./ChooseMain";
import RideForm from "./RideForm";
import dispatchables from "@/utils/dispatchables";
import { useModal } from "@/hooks/useModal";
import Btn from "@/components/btn/Btn";
import CustomModal from "@/components/CustomModal";

const ChooseModal = ({ type }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [rideForm, setMap] = useState(false);
  const { inputDataForBookingRequest } = dispatchables();

  const goToInputRideDetails = () => setMap(true);

  return (
    <CustomModal
      trigger={Btn}
      triggerProps={{
        text: type === "ride" ? "Book a Ride" : "Request a Delivery",
        styling:
          type === "ride"
            ? "btn--hero btn--primary md:w-[166px]  lg:w-[171px]"
            : "btn--hero btn--secondary md:w-[1]  lg:w-[232px]",
      }}
      modalStyling={rideForm ? "modal-map__booking" : "modal__choose"}
      isModalOpen={isModalOpen}
      openModal={() => {
        openModal();
        inputDataForBookingRequest("booking_type", type);
      }}
      closeModal={() => {
        setMap(false);
        closeModal();
      }}
      showCloseBtn={false}
    >
      {rideForm ? (
        <RideForm />
      ) : (
        <ChooseMain type={type} goToInputRideDetails={goToInputRideDetails} />
      )}
    </CustomModal>
  );
};

export default ChooseModal;

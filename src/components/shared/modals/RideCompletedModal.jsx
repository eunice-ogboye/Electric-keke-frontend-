import { useState } from "react";
import NewModal from "../CustomModal";
import TransactModal from "./TransactModal";
import RateRiderModal from "./RateRiderModal";

const RideCompletedModal = () => {
  const [rateDriver, setRateDriver] = useState(false);

  return (
    <NewModal definedState={true} modalStylling="modal__transaction">
      {rateDriver ? (
        <RateRiderModal setRateDriver={setRateDriver} />
      ) : (
        <TransactModal setRateDriver={setRateDriver} />
      )}
    </NewModal>
  );
};

export default RideCompletedModal;

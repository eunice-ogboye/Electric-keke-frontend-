import { useState } from "react";
import Btn from "../shared/Btn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getItemFromLs } from "../../utils/ls";
import dispatchables from "../../utils/dispatchables";

const getPrice = async (action, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(action());
    }, time);
  });
};

const ModalFormInput = ({
  placeholder,
  name,
  value,
  handleChange,
  showTarget,
}) => {
  return (
    <div className="map-modal-input">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className="text-eiteen w-10/12"
      />
      {showTarget && (
        <div>
          <img src="/target.svg" alt="target" />
        </div>
      )}
    </div>
  );
};

const ModalForm = () => {
  const { showAlert, inputDataForBookingRequest, flipModal, inputBookingData } =
    dispatchables();
  const { origin, destination, price } = useSelector((state) => state.bookData);

  const navigate = useNavigate();
  const [showPrice, setShowPrice] = useState(false);

  const isDisabled = !origin || !destination;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!showPrice) {
      showAlert("Getting price estimate");
      await getPrice(() => {
        let price = `${Math.floor(Math.random() * 3000)}`;
        inputDataForBookingRequest("price", price);
        setShowPrice(true);
      }, 5000);
      return;
    }

    try {
      const user = getItemFromLs("user");
      if (!user) {
        throw new Error("Open an accont");
      }
      navigate("/riders");
    } catch (error) {
      showAlert("Login to book a ride");
    } finally {
      // console.log("me");
      flipModal(false);
    }
  };

  return (
    <form className="modal-form" onSubmit={handleSubmit}>
      <ModalFormInput
        placeholder="Input Pick up address"
        name="origin"
        value={origin}
        handleChange={inputBookingData}
        showTarget
      />
      <ModalFormInput
        placeholder="Drop off location"
        name="destination"
        value={destination}
        handleChange={inputBookingData}
      />

      {showPrice && (
        <div className="estimate-price">
          <p>#{price}</p>
        </div>
      )}

      <Btn
        text={showPrice ? "Proceed" : "Confirm"}
        size="full"
        disabled={isDisabled}
      />
    </form>
  );
};

export default ModalForm;

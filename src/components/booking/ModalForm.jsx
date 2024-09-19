import { useState } from "react";
import Btn from "../shared/Btn";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  alertUser,
  changeAuthPage,
  hideAlert,
  toggleModal,
} from "../../store/slices/global-slice";
import { updateBookingData } from "../../store/slices/bookride-slice";
import { getItemFromLs } from "../../lib/ls";

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
    <div className="h-[59px] border border-neutral py-4 px-5 rounded-md bg-white flex items-center justify-between">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className="text-eiteen w-10/12 font-montserrat"
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
  const dispatch = useDispatch();
  const { origin, destination, price } = useSelector((state) => state.bookData);

  const showAlert = (msg) => {
    dispatch(alertUser(msg));
    setTimeout(() => {
      dispatch(hideAlert())
    }, 5000);
  };

  const navigate = useNavigate();
  const [showPrice, setShowPrice] = useState(false);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatch(updateBookingData({ key, value }));
  };

  const isDisabled = !origin || !destination;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!showPrice) {
      showAlert('Getting price estimate')
      await getPrice(() => {
        let price = `${Math.floor(Math.random() * 3000)}`;
        dispatch(updateBookingData({ key: "price", value: price }));
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
      console.log("me");
      dispatch(toggleModal(false));
    }
  };

  return (
    <form
      className="max-w-[520px] mx-auto mt-6 flex flex-col gap-[13px]"
      onSubmit={handleSubmit}
    >
      <ModalFormInput
        placeholder="Input Pick up address"
        name="origin"
        value={origin}
        handleChange={handleChange}
        showTarget
      />
      <ModalFormInput
        placeholder="Drop off location"
        name="destination"
        value={destination}
        handleChange={handleChange}
      />

      {showPrice && (
        <div className="h-10 md:h-[59px] py-4 px-5 rounded-md bg-eco-green-faint flex items-center justify-between">
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

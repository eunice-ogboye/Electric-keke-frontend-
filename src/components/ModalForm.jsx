import { useState } from "react";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";

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
    <div className="h-10 md:h-[59px] border border-neutral py-4 px-5 rounded-md bg-white flex items-center justify-between">
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
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();
  const [modalFormData, setModalFormData] = useState({
    location: "",
    destination: "",
  });
  const [price, setPrice] = useState(false);

  const handleChange = (e) =>
    setModalFormData({ ...modalFormData, [e.target.name]: e.target.value });
  const isDisabled = !modalFormData.location || !modalFormData.destination;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!price) {
      await getPrice(() => setPrice(true), 5000);
      return;
    }
    dispatch({ type: "modal", payload: { modal: false } });
    navigate("/riders");
  };
  return (
    <form
      className="max-w-[520px] mx-auto mt-6 flex flex-col gap-[13px]"
      onSubmit={handleSubmit}
    >
      <ModalFormInput
        placeholder="Input Pick up address"
        name="location"
        value={modalFormData.location}
        handleChange={handleChange}
        showTarget
      />
      <ModalFormInput
        placeholder="Drop off location"
        name="destination"
        value={modalFormData.destination}
        handleChange={handleChange}
      />
      {price && (
        <div className="h-10 md:h-[59px] py-4 px-5 rounded-md bg-eco-green-faint flex items-center justify-between">
          <p>#3000</p>
        </div>
      )}
      <Btn
        text={price ? "Proceed" : "Confirm"}
        size="full"
        disabled={isDisabled}
      />
    </form>
  );
};

export default ModalForm;

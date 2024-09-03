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
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();
  const [modalFormData, setModalFormData] = useState({
    initialPoint: "",
    finalPoint: "",
  });
  const [price, setPrice] = useState(false);

  const handleChange = (e) =>
    setModalFormData({ ...modalFormData, [e.target.name]: e.target.value });
  const isDisabled = !modalFormData.initialPoint || !modalFormData.finalPoint;

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
        name="initialPoint"
        value={modalFormData.initialPoint}
        handleChange={handleChange}
        showTarget
      />
      <ModalFormInput
        placeholder="Drop off location"
        name="finalPoint"
        value={modalFormData.finalPoint}
        handleChange={handleChange}
      />
      {price && (
        <div className="h-10 md:h-[59px] py-4 px-5 rounded-md bg-pgreen-1 flex items-center justify-between">
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

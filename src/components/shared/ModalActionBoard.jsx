import React from "react";
import Choose from "./Choose";
import dispatchables from "../../utils/dispatchables";
import { useNavigate } from "react-router-dom";
import { addItemToLs } from "../../lib/ls";

const ModalActionBoard = ({ modalContent }) => {
  const { flipModal } = dispatchables();
  const navigate = useNavigate();

  /**
   * wee need two handling options for the
   * choose modal action
   */

  const handleClick1 = async () => {
    try {
      if (modalContent === "request-ride") {
        // accept ride and navigate to tracking page
        console.log("ride accepted");
        addItemToLs("passenger", {
          fullname: "Testing",
        });
        addItemToLs("book-data", {
          origin: "Orile",
          destination: "Okoko",
          price: "3000",
        });
        navigate("/tracking");
      }
      flipModal(false);
    } catch (error) {
      // catch error
    }
  };

  const handleClick2 = async () => {
    try {
      if (modalContent === "request-ride") {
        // cancle rider
        console.log("ride declined");
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

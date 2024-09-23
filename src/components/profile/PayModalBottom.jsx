import React from "react";
import Choose from "../shared/Choose";
import CustomizedBtn from "../shared/CustomizedBtn";
import dispatchables from "../../utils/dispatchables";

const PayModalBottom = ({ methodOfPayment }) => {
  const { showAlert } = dispatchables();
  return (
    <>
      {methodOfPayment === "card" && (
        <Choose
          containerClass="grid grid-cols-2 gap-x-2 border"
          choice1txt="Confirm"
          choice2txt="Cancel"
          btnClass="h-14 rounded-full"
          addedClass1="bg-eco-green"
          addedClass2="border border-eco-green text-eco-green bg-eco-green/10"
          handleChoice1={() => {
            showAlert("save card details");
          }}
          handleChoice2={() => {
            showAlert("cancel card");
          }}
        />
      )}
      {methodOfPayment === "bank" && (
        <CustomizedBtn
          text="Confirm"
          className="bg-eco-green h-14 w-full rounded-full"
          handleClick={() => {
            showAlert("added bank details");
          }}
        />
      )}
    </>
  );
};

export default PayModalBottom;

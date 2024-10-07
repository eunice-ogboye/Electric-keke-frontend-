import React from "react";
import Choose from "../shared/Choose";
import dispatchables from "../../utils/dispatchables";
import Btn from "../shared/btn/Btn";

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
        <Btn
          text="Confirm"
          styling="btn btn--lg btn--primary w-full rounded-full"
          onClick={() => {
            showAlert("added bank details");
          }}
        />
      )}
    </>
  );
};

export default PayModalBottom;

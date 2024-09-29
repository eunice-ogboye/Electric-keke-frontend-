import React from "react";
import Togglers from "../shared/Togglers";
import MasterCard from "./MasterCard";
import CardForm from "./CardForm";
import BankForm from "./BankForm";

const PayModalTop = ({ formData, methodOfPayment, setMethodOfPayment }) => {
  return (
    <>
      <header>
        <h2 className="payment-modal-title">Update payment method</h2>
        <p>update your card details</p>
      </header>
      {methodOfPayment === "card" && (
        <div className="card-container ">
          <MasterCard
            name={formData.name}
            expiry={formData.expiry}
            number={formData.number}
          />
        </div>
      )}
      
      <Togglers
        color="color2"
        isConditionTrue={methodOfPayment === "card"}
        text1="Bank Card"
        text2="Bank Account"
        handleClick1={() => setMethodOfPayment("card")}
        handleClick2={() => setMethodOfPayment("bank")}
        className="mt-10 flex items-center justify-between gap-10 max-w-[309px] mx-auto"
        btnClassName="!pb-0 min-w-[114px] text-base font-semibold border-b-4"
      />
      {methodOfPayment === "card" && <CardForm formData={formData} />}
      {methodOfPayment === "bank" && <BankForm />}
    </>
  );
};

export default PayModalTop;

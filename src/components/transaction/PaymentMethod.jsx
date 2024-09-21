import React from "react";
import Btn from "../shared/Btn";
import PaymentForm from "./PaymentForm";
import dispatchables from "../../utils/dispatchables";

const PaymentMethod = () => {
  const { openModalWithContent } = dispatchables();
  return (
    <div className="payment-method">
      <div className="w-full max-w-[488px]">
        <div>
          <Btn
            text="Payment with cash"
            type="secondary"
            size="full"
            handleClick={() => openModalWithContent("Pay for ride")}
          />
          <p className="mt-8 text-center">or pay with card</p>
        </div>

        <PaymentForm />
      </div>
    </div>
  );
};

export default PaymentMethod;

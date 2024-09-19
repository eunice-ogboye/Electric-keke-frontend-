import PayPass from "../../assets/svg/PayPass";
import React, { useState } from "react";
import MasterCard from "./MasterCard";
import Togglers from "../shared/Togglers";
import FormRow from "../shared/FormRow";
import Btn from "../shared/Btn";
import MasterCircles from "../../assets/svg/MasterCircles";

const PaymentModal = () => {
  const [methodOfPayment, setMethodOfPayment] = useState("card");

  const [formData, setFormData] = useState({
    name: "Susan Michael",
    expiry: "00/00",
    number: "1234 1234 1234 1234",
    cvv: "777",
  });

  return (
    <div className="payment-modal">
      <header>
        <h2 className="payment-modal-title">Update payment method</h2>
        <p>update your card details</p>
      </header>

      <div className="card-container ">
        <MasterCard
          name={formData.name}
          expiry={formData.expiry}
          number={formData.number}
        />
      </div>

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

      <form>
        <div className="flex flex-col gap-y-4">
          <div className="grid grid-cols-3 gap-4">
            <FormRow
              label="Name on card"
              name="name"
              value={formData.name}
              placeholder="susan michael"
              formRowContainer="col-span-2"
            />
            <FormRow label="Expiry" name="expiry" value={formData.expiry} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <FormRow
              label="Card number"
              name="number"
              value={formData.number}
              placeholder="000 000 000"
              formRowContainer="col-span-2"
              icon={<MasterCircles />}
            />
            <FormRow label="CVV" name="expiry" />
          </div>
        </div>

        <div className="px-9 pt-8 pb-12 grid grid-cols-2 border-4 gap-x-4">
          <Btn text="Confirm" size="full" />
          <Btn text="Cancel" type="secondary" size="full" />
        </div>
      </form>
    </div>
  );
};

export default PaymentModal;

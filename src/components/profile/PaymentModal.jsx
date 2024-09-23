import React, { useState } from "react";
import MasterCard from "./MasterCard";
import Togglers from "../shared/Togglers";
import CardForm from "./CardForm";
import BankForm from "./BankForm";
import ModalTemplate from "../shared/ModalTemplate";
import PayModalTop from "./PayModalTop";
import PayModalBottom from "./PayModalBottom";

const PaymentModal = () => {
  const [methodOfPayment, setMethodOfPayment] = useState("card");

  const [formData, setFormData] = useState({
    name: "Susan Michael",
    expiry: "00/00",
    number: "1234 1234 1234 1234",
    cvv: "777",
  });

  return (
    <ModalTemplate
      top={
        <PayModalTop
          formData={formData}
          methodOfPayment={methodOfPayment}
          setMethodOfPayment={setMethodOfPayment}
        />
      }
      bottom={<PayModalBottom methodOfPayment={methodOfPayment} />}
    />
  );
};

export default PaymentModal;

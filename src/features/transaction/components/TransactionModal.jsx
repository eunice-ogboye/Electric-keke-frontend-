import React, { useEffect, useState } from "react";
import Heading from "../shared/Heading";
import { make_payment } from "../../../services/transaction";
import Btn from "../shared/Btn";
import Congrats from "../../../assets/svg/Congrats";
import dispatchables from "../../../utils/dispatchables";
import Loader from "../../../components/loaders/Loader";

const TransactionModal = () => {
  const [paySuccessful, setPaySuccessful] = useState(false);
  const { openModalWithContent } = dispatchables();

  useEffect(() => {
    make_payment(() => setPaySuccessful(true));
  });

  return (
    <div className="transaction-modal" onClick={(e) => e.stopPropagation()}>
      <div className="text-center mt-12">
        <div className="size-20 mx-auto">
          {paySuccessful ? <Congrats /> : <Loader size={80} />}
        </div>
        <Heading
          className="mt-6"
          title={paySuccessful ? "Great Job" : "One Moment "}
          description={`your payment ${
            paySuccessful ? "was successfull" : "is processing..."
          }`}
          dclass="mt-6"
        />
      </div>

      {paySuccessful && (
        <div className="w-full max-w-[488px] mt-10 mx-auto">
          <Btn
            text="Proceed"
            size="full"
            handleClick={() => openModalWithContent("rate")}
          />
        </div>
      )}
    </div>
  );
};

export default TransactionModal;

import Congrats from "@/assets/svg/Congrats";
import Loader from "@/components/loaders/Loader";
import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import Btn from "../btn/Btn";

const TransactModal = ({setRateDriver}) => {
  const [paySuccessful, setPaySuccessful] = useState(false);

  useEffect(() => {
    const time_out =setTimeout(() => {
      setPaySuccessful(true)
    }, 5000);

    return () => clearTimeout(time_out);
  })
  return (
    <>
      <div className="text-center mt-12">
        <div className="size-20 mx-auto">
          {paySuccessful ? <Congrats /> : <Loader />}
        </div>
        <Heading
          className="mt-6"
          title={paySuccessful ? "Great Job" : "One Moment "}
          description={`your payment ${
            paySuccessful ? "was successfull" : "is processing..."
          }`}
          dclass="mt-6 text-eiteen"
        />
      </div>

      {paySuccessful && (
        <div className="w-full max-w-[488px] mt-10 mx-auto">
          <Btn
            text="Proceed"
            styling="btn btn--primary btn--hero w-full"
            onClick={() => setRateDriver(true)}
          />
        </div>
      )}
    </>
  );
};

export default TransactModal;

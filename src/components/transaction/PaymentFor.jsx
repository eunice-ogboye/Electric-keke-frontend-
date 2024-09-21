import Spear from "../../assets/svg/Spear";
import React, { useState } from "react";
import Logo from "../shared/Logo";
import Heading from "../shared/Heading";
import Trip from "./Trip";
import { getItemFromLs } from "../../lib/ls";
import ProgressLine from "../shared/ProgressLine";

const PaymentFor = () => {
  const [bookinfo, setbookinfo] = useState(getItemFromLs("book-data"));
  return (
    <div className="payment-for-board">
      <div>
        <div className="transaction-head">
          <div>
            <Spear color="black" />
          </div>
          <Logo logoClassName="w-20 h-14" />
        </div>

        <div className="md:mt-10">
          <Heading
            title="Payment"
            description="How would you like to make your payment "
            tclass="font-josefin"
            dclass="mt-3"
          />

          <div className="trip-detail">
            <Trip label="Pick up" location={bookinfo.origin} />
            <ProgressLine className="hidden md:block md:h-[80px]" />
            <Trip label="Drop off" location={bookinfo.destination} />
          </div>

          <div className="flex items-center justify-between md:justify-start gap-2">
            <p className="font-semibold text-xs md:text-base">Total Cost of ride</p>
            <div className="ride-fare">#{bookinfo.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFor;

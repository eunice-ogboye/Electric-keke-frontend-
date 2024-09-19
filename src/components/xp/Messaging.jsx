import React from "react";
import Btn from "../shared/Btn";

const Messaging = () => {
  return (
    <div className="flex items-center mt-3 gap-2 w-full max-w-[1009px] mx-auto">
      <div className="flex items-center gap-[14px]">
        <div>
          <img src="/call-customer-care.svg" alt="call" />
        </div>
        <div>
          <img src="/vn-mic.svg" alt="microphone" />
        </div>
      </div>
      <div className="w-full max-w-[865px] border-2 rounded-[40px] p-1 flex items-center justify-between mx-auto">
        <input
          type="text"
          placeholder="search for help"
          className="w-9/12 pl-4 outline-none border-none"
        />
        <div className="w-3/12">
          <Btn text="Send" size="full" />
        </div>
      </div>
    </div>
  );
};

export default Messaging;

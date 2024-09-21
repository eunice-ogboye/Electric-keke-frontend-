import React from "react";
import Microphone from "../../assets/svg/Microphone";
import CustomizedBtn from "../shared/CustomizedBtn";
import Send from "../../assets/svg/Send";
import DefaultMsg from "./DefaultMsg";

const TypingBoard = () => {
  return (
    <>
      <DefaultMsg />
      <div className="min-h-[84px] w-full max-w-[95%] px-6 py-4 bg-[#F2F2F2] absolute bottom-5 flex-center left-1/2 -translate-x-1/2">
        <div className="w-full min-h-[50px] flex items-center justify-between">
          <textarea
            cols={30}
            className="h-5 bg-transparent text-black border-none outline-none resize-none w-[600px]"
            placeholder="Type your message"
          />

          <div>
            <CustomizedBtn icon={<Microphone />} className="bg-transparent" />
            <CustomizedBtn
              icon={<Send color="#77BB77" />}
              className="rounded-full size-[50px] -rotate-45 bg-eco-green-faint send-shadow"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TypingBoard;

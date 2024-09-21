import React from "react";
import TypingBoard from "./TypingBoard";
import ChatBox from "./ChatBox";

const ConnectChatBoard = () => {
  return (
    <div className="border-2 border-modal rounded-[10px] relative h-[693px] mt-6 px-4 py-5">
      <ChatBox type="receiver" />
      <ChatBox type="sender" msg="I am around the bending corner, just chill small abeg" />
      
      <TypingBoard />
    </div>
  );
};

export default ConnectChatBoard;

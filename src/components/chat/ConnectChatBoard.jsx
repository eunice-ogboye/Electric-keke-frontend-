import TypingBoard from "./TypingBoard";
import ChatBox from "./ChatBox";

const ConnectChatBoard = () => {
  return (
    <div className="border-2 border-modal rounded-[10px] relative h-[94%] md:h-[693px] mt-[16px] md:mt-6 py-5">
      <ChatBox type="receiver" />
      <ChatBox type="sender" msg="I am around the bending corner, just chill small abeg" />
      {/* <ChatBox type="receiver" />
      <ChatBox type="sender" msg="I am around the bending corner, just chill small abeg" />
      <ChatBox type="receiver" />
      <ChatBox type="sender" msg="I am around the bending corner, just chill small abeg" /> */}
      
      <TypingBoard />
    </div>
  );
};

export default ConnectChatBoard;

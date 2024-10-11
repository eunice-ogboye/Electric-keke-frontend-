import UserChatImage from "./UserChatImage";

const ChatBox = ({ type = "sender", msg = "Hello Mathew where you dae?" }) => {
  const person = {
    sender: "rounded-s-full",
    receiver: "rounded-e-full",
  };
  return (
    <div
      className={`flex items-end py-2 ${
        type === "receiver" ? "pl-1 pr-[18px]" : "justify-end pr-1 pl-[18px]"
      }`}
    >
      <div className="flex-center gap-x-2">
        {type === "receiver" && <UserChatImage />}

        <div className={`px-4 py-3 bg-connect w-[calc(100%-44px)] rounded-t-full ${person[type]}`}>
          <p className="text-sm md:text-base">{msg}</p>
        </div>

        {type === "sender" && <UserChatImage />}
      </div>
    </div>
  );
};

export default ChatBox;

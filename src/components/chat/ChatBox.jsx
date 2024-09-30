const ChatBox = ({ type = "sender", msg = 'Hello Mathew where you dae?' }) => {
  const person = {
    sender: "rounded-s-[40px]",
    receiver: "rounded-e-[40px]",
  };
  return (
    <div
      className={`flex items-end gap-2 mt-4 ${
        type === "receiver" ? null : "justify-end"
      }`}
    >
      {type === "receiver" && (
        <div className="size-11 rounded-full bg-black"></div>
      )}
      <div className={`px-4 py-3 bg-connect rounded-t-20 ${person[type]}`}>
        <p>{msg}</p>
      </div>
      {type === "sender" && (
        <div className="size-11 rounded-full bg-black"></div>
      )}
    </div>
  );
};

export default ChatBox;

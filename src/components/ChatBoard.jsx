import React, { useEffect, useState } from "react";

const Chat = ({ identity }) => {
  const person = {
    sender: {
      box: "bg-neutral rounded-e-20",
      text: "text-white",
    },
    receiver: {
      box: "bg-pgreen rounded-s-20 ",
      text: "text-black",
    },
  };
  return (
    <div
      className={`flex ${identity === "sender" && "justify-end"}`}
      onDrag={(e) => e.stopPropagation()}
      style={{
        userSelect: "none"
      }}
    >
      <div
        className={`px-2 py-4 rounded-b-20 flex items-end w-[90%] md:w-[50%] ${person[identity].box}`}
      >
        <div>
          <p className="text-white" onDrag={(e) => e.preventDefault()}>
            Lorem ipsum dolor sit amet consectetur. Adipiscing convallis
            ultrices feugiat et. Mattis non non lectus tempus. Ornare sodales in
            ligula aliquam sed donec.
          </p>
        </div>
        <div>
          <p className="text-white">7:00pm</p>
        </div>
      </div>
    </div>
  );
};

const ChatBoard = () => {
  const [scroll, setScroll] = useState(false);
  const [scrollPos, setScrollPos] = useState({
    initial: 0,
    final: 0,
    diff: 0,
  });

  return (
    <div
      className="h-[65vh] w-full max-w-[1156px] border border-pgreen/50 rounded-[40px] mt-5 px-2 py-10 overflow-hidden"
      onMouseDown={(e) => {
        setScroll(true);
        setScrollPos((prev) => ({ ...prev, initial: e.clientY }));
      }}
      onMouseUp={() => {
        setScroll(false);
        console.log(scrollPos);
      }}
      onMouseMove={(e) => {
        if (!scroll) return;
        const difference = -(e.clientY - scrollPos.initial);
        setScrollPos((prev) => ({
          ...prev,
          final: e.clientY,
          diff: difference,
        }));
        e.currentTarget.scrollTop += scrollPos.diff;
      }}
    >
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
      <Chat identity="receiver" />
      <Chat identity="sender" />
    </div>
  );
};

export default ChatBoard;

import React, { useState } from "react";
import Btn from "./Btn";

const ToggleStats = () => {
  const [online, setOnline] = useState(false);
  return (
    <div className="bg-white w-[225px] md:w-[310px] h-[44px] md:h-[67px] rounded-normal ml-auto mr-5 flex-center px-3">
      <div className="flex items-center justify-between w-full">
        <Btn
          size={online ? "driver" : "none"}
          text={online ? "Online" : "Go Online"}
          type={online ? "default" : "invisible"}
          handleClick={() => setOnline(true)}
        />
        <Btn
          text={online ? "Go Offline" : "Offline"}
          size={online ? "none" : "driver"}
          type={online ? "invisible" : "default"}
          handleClick={() => setOnline(false)}
        />
      </div>
    </div>
  );
};

export default ToggleStats;

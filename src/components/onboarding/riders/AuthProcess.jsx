import { useState } from "react";
import ProcessIndicator from "./ProcessIndicator";
import { getItemFromLs } from "@/utils/ls";

const AuthProcess = () => {
  const [processValue] = useState(getItemFromLs("onboarding-process"));
  console.log(processValue);
  return (
    <div className="h-[50px] mt-4 flex items-center justify-between px-[14px] relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[90%] h-1 md:h-3 rounded-full bg-white process--shadow border-b">
        <div
          className={`rounded-full h-full bg-eco-green ${processValue === 2 && "w-[20%]"} ${
            processValue === 3 && "w-[50%]"
          } ${processValue === 4 && "w-[80%]"} ${
            processValue === 5 && "w-[100%]"
          }`}
        ></div>
      </div>

      <ProcessIndicator
        text="1"
        process="Identity"
        condition={processValue >= 2}
      />
      <ProcessIndicator
        text="2"
        process="License"
        condition={processValue >= 3}
      />
      <ProcessIndicator
        text="3"
        process="License"
        condition={processValue >= 4}
      />
      <ProcessIndicator
        text="4"
        process="Processing"
        condition={processValue >= 5}
      />
    </div>
  );
};

export default AuthProcess;

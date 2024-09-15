import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const AuthProcess = () => {
  const { driverAuthProcess } = useSelector((state) => state.global);

  const process = [
    "Identity",
    "Driver License Front",
    "Driver License Back",
    "Processing",
  ];
  const processesCompleted =
    driverAuthProcess === process[0]
      ? 0
      : driverAuthProcess === process[1]
      ? 1
      : driverAuthProcess === process[2]
      ? 2
      : 3;

  const [percentage, setPercentage] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-between mt-3 md:mt-8 relative">
        {/* <div className="hidden w-[90%] h-[4px] bg-neutral absolute top-5 -z-30 left-1/2 -translate-x-1/2">
          <div
            className="bg-pgreen"
            style={{
              width: `${percentage}%`,
              height: "100%",
            }}
          ></div>
        </div> */}
        {process.map((item, index) => {
          const completed = processesCompleted >= index;
          return (
            <div key={index}>
              <div
                className={`size-5 md:size-10 rounded-full mx-auto flex-center ${
                  completed ? "bg-eco-green-prime" : "bg-eco-neutral-faint"
                }`}
              >
                {completed && (
                  <div className="size-2 md:size-5 bg-white rounded-full" />
                )}
              </div>
              <p
                className={`mt-4 md:mt-[35px] text-xs md:text-[28px] ${
                  completed ? "text-neutral-0" : "text-neutral"
                }`}
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthProcess;

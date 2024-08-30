import { account_types } from "../constants";
import Heading from "../components/Heading";
import Onboarding from "../shared-layout/Onboarding";
import React, { useState } from "react";

const OnbordingMain = () => {
  const [type, setType] = useState("Passenger");
  return (
    <Onboarding>
      <div className="py-5 px-20 w-1/2">
        <p className="border text-right">
          Already have an account?{" "}
          <span className="text-green-500">Log in</span>
        </p>

        <div className="mt-20">
          <Heading
            title="Join Us!"
            description="To begin, select your kind of account"
          />

          <div className="mt-10 space-y-6">
            {account_types.map((item) => (
              <div
                key={item.title}
                className={`flex items-center justify-between h-28 rounded-md px-7 py-6 cursor-pointer ${
                  item.title === type &&
                  "bg-green-200/30 border border-green-300"
                }`}
                onClick={() => setType(item.title)}
              >
                <div className="flex items-center gap-5">
                  <div>
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <p>{item.title}</p>
                </div>

                <div>
                  <img src="/arrow-right.svg" alt="arrow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Onboarding>
  );
};

export default OnbordingMain;

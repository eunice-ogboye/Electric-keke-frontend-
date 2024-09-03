import { settings } from "../constants";
import React from "react";

const Settings = () => {
  return (
    <section className="pt-10 md:pt-[7.5rem] pb-20 md:pb-[109px] home-pad">
      <h2 className="text-5xl font-bold text-center">Settings</h2>

      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto mt-10">
        <ul className="space-y-16">
          {settings.map((item) => {
            return (
              <li className="text-2xl md:text-[2rem] font-bold flex items-center gap-7">
                {item}{" "}
                <div>
                  <img src="/setting-arr.svg" alt="arrow" />
                </div>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:block w-[539px] h-96">
          <img src="/safe.png" alt="safe" className="size-full" />
        </div>
      </div>
    </section>
  );
};

export default Settings;

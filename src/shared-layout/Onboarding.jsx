import Overlay from "../components/Overlay";
import React from "react";

const Onboarding = ({ children }) => {
  return (
    <section className="flex">
      <div className="w-1/2 h-screen shadow-2xl relative">
        <Overlay className="bg-black/70 size-full absolute top-0 left-0 flex-center" />
        <img
          src="/onboarding-people.png"
          alt="onboarding"
          className="size-full object-cover object-center rounded-xl"
        />
      </div>
      {children}
    </section>
  );
};

export default Onboarding;

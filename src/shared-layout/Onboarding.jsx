import React from "react";

const Onboarding = ({ children }) => {
  return (
    <section className="flex">
      <div className="w-1/2 h-screen shadow-2xl">
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

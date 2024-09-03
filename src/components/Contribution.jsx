import { contribution } from "../constants";
import React from "react";

const Contribution = () => {
  return (
    <section className="home-pad py-20 bg-base-white">
      <div className="min-h-[546px] md:flex items-center">
        <div className="md:w-1/2 md:h-[546px] border rounded-normal bg-gradient-to-b from-pgreen to-peach">
          <img
            src="/hand-phone.svg"
            alt="hand and phone"
            className="size-full object-contain object-center"
          />
        </div>

        <div className="md:w-1/2 py-16 md:pl-16">
          <div>
            <h2 className="font-bold text-[2rem] text-center md:text-left">
              {contribution.title}
            </h2>
            <p className="text-neutral text-2xl mt-7 text-center md:text-left">
              {contribution.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contribution;

import React from "react";
import FaqAccordion from "./FaqAccordion";

const Faq = () => {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row w-full gap-16 mt-20 md:mt-0">
        <div className="w-full md:w-1/2 flex-center relative">
          <div className="w-60 h-[363px] border-4 rounded-20 border-eco-green" />

          <div className="w-9/12 md:w-[403px] bg-indigo-500 rounded-20 h-[295px] absolute top-0 md:top-5 left-0 z-20"></div>

          <div className="w-9/12 md:w-[403px] bg-red-500 rounded-20 absolute bottom-0 md:bottom-5 right-0 h-[295px]"></div>
        </div>

        <div className="w-full md:w-1/2">
          <FaqAccordion />
        </div>
      </div>

      <div className="text-center mt-20">
        <p className="text-eiteen font-bold">
          Didn't get what you are looking for?
        </p>
        <p className="text-sm">
          You can reach out to us via our 24 hour toll free line +234 5600 00
          000
        </p>
      </div>
    </>
  );
};

export default Faq;

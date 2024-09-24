import React from "react";
import FaqAccordion from "./FaqAccordion";
import FaqIcon from "../../assets/svg/FaqIcon";

const Faq = () => {
  return (
    <>
      <div className="flex items-center flex-col md:flex-row w-full gap-16 mt-20 md:mt-0">
        <div className="w-full md:w-1/2 flex-center relative">
          <div className="w-60 h-[363px] border-4 rounded-20 border-eco-green" />

          <div className="faq-img top-0 md:top-5 left-0 z-20">
            <img
              src="/hero/support1.png"
              alt="support1"
              className="size-full object-cover object-center"
            />
          </div>

          <div className="faq-img right-0 bottom-0 md:bottom-5">
            <img
              src="/hero/support2.png"
              alt="support1"
              className="size-full object-cover object-center"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div>
            <div className="flex items-center gap-x-3">
              <FaqIcon />
              <p>FAQ Question</p>
            </div>
            <p className="text-4xl font-semibold">Frequently Asked Questions</p>
          </div>
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

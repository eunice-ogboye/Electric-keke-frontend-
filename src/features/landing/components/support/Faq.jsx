import React from "react";
import FaqAccordion from "./FaqAccordion";
import FaqIcon from "../../../../assets/svg/FaqIcon";
import FaqImg from "./FaqImg";

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq-container">
        <div className="w-full tablet:w-[56%] flex-center relative h-[300px] tablet:h-[504px]">
          <div className="w-[37%] h-full border-4 rounded-20 border-basic" />

          <FaqImg className="faq-img-first" imgSrc="/hero/support1.png" />

          <FaqImg className="faq-img-second" imgSrc="/hero/support2.png" />
        </div>

        <div className="w-full tablet:w-[39%]">
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
    </div>
  );
};

export default Faq;

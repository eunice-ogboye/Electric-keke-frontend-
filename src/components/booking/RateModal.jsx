import React from "react";
import Rate from "../xp/Rate";
import Heading from "../shared/Heading";
import ModalTemplate from "../shared/ModalTemplate";
import ReviewForm from "./ReviewForm";

const RateModal = ({ comment, rateValue, rateTheDriver }) => {

  return (
    <ModalTemplate
      top={
        <>
          {!comment && (
            <div className="size-[103px] rounded-full border mx-auto">
              <img
                src="/persons/rider1.png"
                alt="rider"
                className="size-full rounded-full"
              />
            </div>
          )}
          <div className="w-full  mt-6 px-5">
            {comment && (
              <Rate rate={rateValue} big statik className="mx-auto space-x-3" />
            )}
            <Heading
              className="text-nowrap mt-6 text-center border-8 w-full"
              title={comment ? "Great!" : "Rate Your Experience"}
              tclass="text-xl md:text-[40px] text-center"
              description={comment && "Tell us a bit more about your ride"}
              dclass="text-xs md:text-3xl mt-6"
            />
            {!comment && (
              <Rate
                // rate={rateValue}
                big
                handleClick={rateTheDriver}
                // statik={comment}
                className="mx-auto space-x-3 mt-10"
              />
            )}
          </div>
        </>
      }
      bottom={
        comment && (
          <ReviewForm rateValue={rateValue} />
        )
      }
    />
  );
};

export default RateModal;

import React from "react";
import Rate from "../xp/Rate";
import Heading from "../shared/Heading";
import Btn from "../shared/Btn";
import dispatchables from "../../utils/dispatchables";

const RateModal = ({ comment, rateValue, rateTheDriver }) => {
  const { flipModal } = dispatchables();
  return (
    <div className="modal rate-modal">
      {!comment && (
        <div className="size-[103px] rounded-full border mx-auto">
          <img
            src="/persons/rider1.png"
            alt="rider"
            className="size-full rounded-full"
          />
        </div>
      )}
      <div className="w-full max-w-[432px] mt-6 px-5">
        {comment && (
          <Rate rate={rateValue} big statik className="mx-auto space-x-3" />
        )}
        <Heading
          className="text-nowrap mt-6 text-center"
          title={comment ? "Great!" : "Rate Your Experience"}
          tclass="text-xl md:text-[40px]"
          description={comment && "Tell us a bit more about your ride"}
          dclass="text-xs md:text-3xl"
        />
        {!comment && (
          <Rate
            // rate={rateValue}
            big
            handleClick={rateTheDriver}
            // statik={comment}
            className="mx-auto space-x-3"
          />
        )}
      </div>

      {comment && (
        <form className="w-full px-5">
          <label className="w-full">
            <span className="block text-base font-semibold">Comment</span>
            <textarea
              name="comment"
              id="comment"
              cols="30"
              rows="3"
              className="px-3 py-2 w-full resize-none"
            ></textarea>
          </label>
          <Btn to="/riders" text="Send" size="full" handleClick={() => flipModal(false)}/>
        </form>
      )}
    </div>
  );
};

export default RateModal;

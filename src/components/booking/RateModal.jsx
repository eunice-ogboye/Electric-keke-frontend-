import React from "react";
import Rate from "../xp/Rate";
import Heading from "../shared/Heading";
import Btn from "../shared/Btn";

const RateModal = ({ comment, rateValue, rateTheDriver }) => {
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
      <div className="w-fit mt-6">
        <Rate
          rate={rateValue}
          big
          handleClick={rateTheDriver}
          statik={comment}
          className="mx-auto space-x-3"
        />
        <Heading
          className="text-nowrap mt-6 text-center"
          title={comment ? "Great!" : "Rate Your Experience"}
          tclass="text-[40px]"
          description={comment && "Tell us a bit more about your ride"}
        />
      </div>

      {comment && (
        <form className="w-full">
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
          <Btn text="Send" size="md-full" />
        </form>
      )}
    </div>
  );
};

export default RateModal;

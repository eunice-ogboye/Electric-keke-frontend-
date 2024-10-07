import Rate from "@/components/xp/Rate";
import { useEffect, useState } from "react";
import Heading from "../Heading";
import ReviewForm from "@/components/booking/ReviewForm";

const starSize = (mediaSize) => {
  return mediaSize > 0 && mediaSize < 768
    ? 20
    : mediaSize > 769 && mediaSize < 1024
    ? 25
    : 50;
};

const RateRiderModal = ({ setRateDriver }) => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState(false);
  const [mediaSize, setMediaSize] = useState(window.outerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setMediaSize(e.currentTarget.outerWidth);
    });

    return window.removeEventListener("resize", (e) =>
      setMediaSize(e.currentTarget.outerWidth)
    );
  }, []);

  const rateTheDriver = (item) => {
    setRate(item);
    setComment(true);
  };

  return (
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
          <Rate
            rate={rate}
            statik
            className="mx-auto space-x-3"
            size={starSize(mediaSize)}
          />
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
            handleClick={rateTheDriver}
            size={starSize(mediaSize)}
            className="mx-auto space-x-3 mt-10"
          />
        )}
      </div>

      {comment && <ReviewForm rateValue={rate} setRateDriver={setRateDriver} />}
    </>
  );
};

export default RateRiderModal;

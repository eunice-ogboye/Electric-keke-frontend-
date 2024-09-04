import React, { useState } from "react";
import { Heading } from ".";
import Btn from "./Btn";
import { useGlobalContext } from "../context";
import ModalForm from "./ModalForm";
import Rate from "./Rate";
import { useNavigate } from "react-router-dom";
import Map from "./Map";

const Modal = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    Dispatch,
    globalState: { modalContent },
  } = useGlobalContext();
  const [content, setContent] = useState(0);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState(false);

  const handleClick = (item) => {
    if (modalContent === "rate") {
      setRate(item);
      setComment(true);
      return;
    }
    setContent(1);
  };

  return (
    <section className="modal">
      <div
        className={`${
          content === 0 && modalContent !== "rate"
            ? "w-full max-w-[478px] min-h-[348px] py-4"
            : modalContent === "rate"
            ? "flex-center w-[607px] h-[577px]"
            : "w-[715px] md:min-h-[665px] py-5 md:py-10 px-3 md:px-7"
        }  bg-white rounded-xl relative`}
      >
        {/* cancel btn */}
        <Btn
          type="cancel"
          handleClick={() =>
            dispatch({ type: "modal", payload: { modal: false } })
          }
        />
        {modalContent === "rate" ? (
          <div className="">
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
                rate={rate}
                big
                handleClick={handleClick}
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
        ) : (
          <>
            {content === 0 && (
              <>
                <div className="h-20">
                  <div className="h-14 w-[7.5rem] relative mx-auto border-4 mt-[1.5rem]">
                    {[
                      "/avatars/avatar1.svg",
                      "/avatars/avatar2.svg",
                      "/avatars/avatar1.svg",
                    ].map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`absolute ${
                            index === 2 && "right-0 bottom-0"
                          } ${index === 0 && ""} ${
                            index === 1 && "left-1/2 bottom-0 -translate-x-1/2"
                          }`}
                        >
                          <img
                            src={item}
                            alt="avatars"
                            className="size-full object-cover object-center"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Heading
                  className="text-center border-2"
                  title={
                    modalContent === "ride"
                      ? "Ready to Go?"
                      : "Instant or Sheduled- You Decide!"
                  }
                  tclass="mt-6"
                  description={`Choose how you want to ${
                    modalContent === "ride" ? "ride" : "send"
                  } with EcoRide`}
                  dclass="text-eiteen text-neutral"
                />

                <div className="flex-center gap-2 mt-12">
                  <Btn
                    text={
                      modalContent === "ride"
                        ? "Instant Ride"
                        : "Instant Delivery"
                    }
                    handleClick={handleClick}
                  />
                  <Btn
                    text={
                      modalContent === "ride"
                        ? "Schedule Ride"
                        : "Schedule a Delivery"
                    }
                    type="secondary"
                    handleClick={() => {
                      Dispatch("modal", { modal: false });
                      navigate("/schedule-ride");
                    }}
                  />
                </div>
              </>
            )}

            {content === 1 && (
              <>
                <div className="location-container">
                  <div className="location-map">
                    <Map className="w-full h-full rounded-[27px]" />
                  </div>
                  <Heading
                    className="text-center border-2 max-w-[520px] mx-auto"
                    title="Where Are You Headed?"
                    tclass="md:mt-6"
                    description="Start your eco-friendly journey by entering your pickup location and drop-off destination."
                    dclass="text-base md:text-eiteen text-neutral"
                  />
                </div>

                <ModalForm />
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Modal;

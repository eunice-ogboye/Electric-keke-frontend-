import React, { useEffect, useRef, useState } from "react";
import { Heading } from ".";
import Btn from "./Btn";
import { useGlobalContext } from "../context";
import ModalForm from "./ModalForm";
import Rate from "./Rate";
import { useNavigate } from "react-router-dom";
import Map from "./Map";

const getAvatars = (content) => {
  return content === "ride"
    ? [
        { src: "/how-to-go/ride1.png", bgColor: "bg-eco-green" },
        { src: "/how-to-go/ride3.png", bgColor: "bg-[#AA9C75]" },
        { src: "/how-to-go/ride3.png", bgColor: "bg-[#D4B5AD]" },
      ]
    : [
        { src: "/how-to-go/delivery1.png", bgColor: "bg-[#B5CBF8]" },
        { src: "/how-to-go/delivery2.png", bgColor: "bg-eco-green-agile" },
        { src: "/how-to-go/delivery3.png", bgColor: "bg-[#D4B5AD]" },
      ];
};

const Modal = () => {
  const navigate = useNavigate();
  const modalContainer = useRef(null);
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

  const closeModalWhenBodyClick = (e) => {
    const modal = modalContainer.current;
    const pageY = window.scrollY;
    const xStart = modal.offsetLeft;
    const xEnd = modal.offsetLeft + modal.clientWidth;
    const yStart = modal.offsetTop + pageY;
    const yEnd = modal.offsetTop + modal.clientHeight + pageY;
    const clickPositionX = e.pageX;
    const clickPositionY = e.pageY;
   if (
      clickPositionX > xStart &&
      clickPositionX < xEnd &&
      clickPositionY > yStart &&
      clickPositionY < yEnd
    ) {
      console.log("yes");
      return;
    }
    Dispatch("modal", { modal: false });
  };

  return (
    <section className="modal" onClick={closeModalWhenBodyClick}>
      <div
        className={`${
          content === 0 && modalContent !== "rate"
            ? "w-full max-w-[478px] min-h-[348px] py-4"
            : modalContent === "rate"
            ? "flex-center w-[607px] h-[577px]"
            : "w-[715px] md:min-h-[665px] py-5 md:py-10 px-3 md:px-7"
        }  bg-white rounded-xl relative`}
        ref={modalContainer}
      >
        {content === 1 && (
          <Btn
            type="cancel"
            handleClick={() =>
              dispatch({ type: "modal", payload: { modal: false } })
            }
          />
        )}
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
                  <div className="h-14 w-[7.5rem] relative mx-auto mt-[1.5rem] isolate">
                    {getAvatars(modalContent).map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`absolute border rounded-full overflow-hidden ${
                            index === 0 &&
                            "left-1/2 bottom-0 -translate-x-1/2 size-[56px]"
                          } ${index === 1 && "bottom-0 -z-10 size-[48px]"} ${
                            index === 2 && "right-0 bottom-0 -z-10 size-[48px]"
                          } ${item.bgColor}`}
                        >
                          <img
                            src={item.src}
                            alt="avatars"
                            className="size-full object-cover object-center"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Heading
                  className="text-center"
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

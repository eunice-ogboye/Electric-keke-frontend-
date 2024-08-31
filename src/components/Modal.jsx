import React from "react";
import { Heading } from ".";
import Btn from "./Btn";
import { useGlobalContext } from "../context";

const Modal = () => {
  const { dispatch } = useGlobalContext();
  return (
    <section className="w-full h-screen fixed top-0 left-0 z-50 flex-center bg-black/50">
      <div className="w-[478px] h-[348px] bg-white rounded-xl p-5 relative">
        <div
          className="rounded-full absolute top-2 right-2 p-1 bg-neutral/40"
          onClick={() => dispatch({ type: "modal", payload: { modal: false } })}
        >
          <img src="/cancel.svg" alt="cancel" />
        </div>

        <div className="h-20">
          <div className="h-14 w-[7.5rem] relative mx-auto border mt-[1.5rem]">
            {[
              "/avatars/avatar1.svg",
              "/avatars/avatar2.svg",
              "/avatars/avatar1.svg",
            ].map((item, index) => {
              return (
                <div
                  key={index}
                  className={`absolute ${index === 2 && "right-0 bottom-0"} ${
                    index === 0 && ""
                  } ${index === 1 && "left-1/2 bottom-0 -translate-x-1/2"}`}
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
          className="text-center mt-6"
          title="Ready to Go?"
          description="Choose how you want to ride with EcoRide"
          dclass="text-eiteen text-neutral"
        />

        <div className="flex-center gap-2 mt-14">
          <Btn text="Instant Ride" />
          <Btn text="Shedule Ride" type="secondary" />
        </div>
      </div>
    </section>
  );
};

export default Modal;

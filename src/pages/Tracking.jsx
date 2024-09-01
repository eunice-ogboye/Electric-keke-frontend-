import { useGlobalContext } from "../context";
import React from "react";

const Tracking = () => {
  const { dispatch } = useGlobalContext();
  return (
    <section className="home-pad py-5">
      <header>
        <h2 className="font-bold">Ride Tracking</h2>
      </header>

      <div className="mt-[31px] flex gap-6 items-start">
        <div className="w-1/2 h-[881.32px]">
          <img
            src="/tracking-map.png"
            alt="tracking"
            className="size-full object-cover object-center"
          />
        </div>

        <div className="w-[586px] border">
          <div>
            <div></div>
            <button
              onClick={() =>
                dispatch({
                  type: "modalContent",
                  payload: { modalContent: 'rate' },
                })
              }
            >
              open
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracking;

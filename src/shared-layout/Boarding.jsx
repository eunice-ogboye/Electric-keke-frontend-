import { briefs, onboardingImages } from "../constants";
import Overlay from "../components/Overlay";
import React from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";

const Boarding = () => {
  const {
    globalState: { onboardingType },
  } = useGlobalContext();

  return (
    <section className="flex">
      <div className="w-1/2 min-h-screen shadow-2xl relative">
        <div className="rounded-full size-11 bg-white flex-center absolute top-10 left-10 z-20">
          <img src="/cancel.svg" alt="cancel" />
        </div>

        {onboardingType === "main" ? (
          <>
            <Overlay className="bg-black/70 size-full absolute top-0 left-0 flex-center" />
            <img
              src={onboardingImages[onboardingType]}
              alt={`onboarding ${onboardingType}`}
              className="size-full object-cover object-center rounded-xl"
            />
          </>
        ) : (
          <div className="size-full bg-green-500 flex-center px-24">
            <h1 className="text-white font-semibold text-2xl">
              {briefs[onboardingType]}
            </h1>
          </div>
        )}
      </div>
      <Outlet />
    </section>
  );
};

export default Boarding;

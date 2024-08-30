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
      <div className="board">
        <div className="cancel-btn">
          <img src="/cancel.svg" alt="cancel" />
        </div>

        {onboardingType === "main" ? (
          <>
            <Overlay className="overlay" />
            <img
              src={onboardingImages[onboardingType]}
              alt={`onboarding ${onboardingType}`}
              className="size-full object-cover object-center rounded-xl"
            />
          </>
        ) : (
          <div className="size-full bg-green-500 flex-center px-24">
            <h1 className="briefing">
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

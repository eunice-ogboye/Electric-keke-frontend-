import { briefs, onboardingImages } from "../constants";
import Overlay from "../components/Overlay";
import React from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useTitle } from "../lib/hooks";
import CustomBg from "../components/CustomBg";

const Boarding = () => {
  useTitle("Authentication");
  const {
    globalState: { homePage },
  } = useGlobalContext();

  return (
    <section className="flex">
      {homePage === "driver-auth" ? null : (
        <div className="board">
          <div className="cancel-btn">
            <img src="/cancel.svg" alt="cancel" />
          </div>

          {homePage === "main" ? (
            <>
              <Overlay className="overlay" />
              <img
                src={onboardingImages[homePage]}
                alt={`onboarding ${homePage}`}
                className="size-full object-cover object-center rounded-xl"
              />
            </>
          ) : (
            <CustomBg children={<h1 className="briefing">{briefs[homePage]}</h1>} />
          )}
        </div>
      )}
      <Outlet />
    </section>
  );
};

export default Boarding;

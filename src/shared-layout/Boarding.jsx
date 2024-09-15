import { briefs, onboardingImages } from "../constants";
import Overlay from "../components/Overlay";
import React from "react";
import { Outlet } from "react-router-dom";
import { useTitle } from "../lib/hooks";
import CustomBg from "../components/CustomBg";
import { useSelector } from "react-redux";

const Boarding = () => {
  useTitle("Authentication");
  // redux globals
  const { authPage } = useSelector((state) => state.global);

  return (
    <section className="flex">
      {authPage === "driver-auth" ? null : (
        <div className="board">
          <div className="cancel-btn">
            <img src="/cancel.svg" alt="cancel" />
          </div>

          {authPage === ("start" || "verification") ? (
            <>
              <Overlay className="overlay" />
              <img
                src={onboardingImages[authPage]}
                alt={`onboarding ${authPage}`}
                className="size-full object-cover object-center rounded-xl"
              />
            </>
          ) : (
            <CustomBg
              children={<h1 className="briefing">{briefs[authPage]}</h1>}
            />
          )}
        </div>
      )}
      <Outlet />
    </section>
  );
};

export default Boarding;

import { briefs, onboardingImages } from "../constants";
import Overlay from "../components/Overlay";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTitle } from "../lib/hooks";
import CustomBg from "../components/CustomBg";
// import { useSelector } from "react-redux";
import { getItemFromLs } from "../lib/ls";

const Boarding = () => {
  useTitle("Authentication");
  // redux globals
  // const { authPage } = useSelector((state) => state.global);
  const [authPage, setAuthPage] = useState(
    getItemFromLs("authPage") || "start"
  );

  return (
    <section className="flex">
      {authPage === "driver-auth" ? null : (
        <div className="board">
          <div className="cancel-btn">
            <img src="/cancel.svg" alt="cancel" />
          </div>

          {authPage === ("start" || "otpMethod" || "forget") ? (
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
              children={
                <div className="w-[320px] lg:w-[501px] mx-auto">
                  <h1 className="briefing">{briefs[authPage]}</h1>
                </div>
              }
            />
          )}
        </div>
      )}
      <Outlet />
    </section>
  );
};

export default Boarding;

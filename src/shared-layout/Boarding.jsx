import { briefs, onboardingImages } from "../constants";
import Overlay from "../components/Overlay";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTitle } from "../lib/hooks";
import CustomBg from "../components/CustomBg";
// import { useSelector } from "react-redux";
import { clearLs, getItemFromLs } from "../lib/ls";
import { useSelector } from "react-redux";
import { Button } from "../components/ui/button";
import { ShieldCloseIcon, XIcon } from "lucide-react";
import Btn from "../components/Btn";

const Boarding = () => {
  useTitle("Authentication");
  // redux globals
  const { authPage } = useSelector((state) => state.global);

  // console.log(authPage);

  return (
    <section className="flex">
      {authPage === "driver-auth" ? null : (
        <div className="board">
          <Btn
            to="/"
            icon={<XIcon />}
            handleClick={() => {
              clearLs();
            }}
            className="cancel-btn"
          />
          {/* <Button className="cancel-btn p-0" onClick={() =>}>
            <XIcon color="black" />
          </Button> */}

          {authPage === "start" ? (
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

import { XIcon } from "lucide-react";
import CustomBg from "../components/auth/CustomBg";
import { briefs, onboardingImages } from "../constants";
import React from "react";
import Overlay from "../components/auth/Overlay";
import Btn from "../components/shared/Btn";

const AuthPageBoard = ({ authPage }) => {
  return (
    <>
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

          {authPage === "start" ? (
            <>
              <Overlay className="overlay sticky top-0" />
              <img
                src={onboardingImages[authPage]}
                alt={`onboarding ${authPage}`}
                className="overlay-img"
              />
            </>
          ) : (
            <CustomBg>
              <div className="w-[320px] lg:w-[501px] mx-auto">
                <h1 className="briefing">{briefs[authPage]}</h1>
              </div>
            </CustomBg>
          )}
        </div>
      )}
    </>
  );
};

export default AuthPageBoard;

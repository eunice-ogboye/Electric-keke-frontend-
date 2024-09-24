import { XIcon } from "lucide-react";
import CustomBg from "../components/auth/CustomBg";
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
                src="/hero/registerAs.png"
                alt="register as"
                className="overlay-img"
              />
            </>
          ) : (
            <CustomBg />
          )}
        </div>
      )}
    </>
  );
};

export default AuthPageBoard;

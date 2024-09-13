import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Header = ({ darkLogo }) => {
  const {
    globalState: { user },
    Dispatch,
  } = useGlobalContext();

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    // console.log(getUser);
    if (getUser !== null) {
      const user = JSON.parse(getUser);
      Dispatch("user", { user });
    }
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <Logo main dark={darkLogo} />
        <NavBar dark={darkLogo} />
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/notification">
              <div>
                <img src="/bell.svg" alt="notification" />
              </div>
            </Link>
            <Link to={`/profile/${user?.id}`}>
              <div>
                <img src={`/avatars/passenger.svg`} alt="notification" />
              </div>
            </Link>
          </div>
        ) : (
          <Btn
            text="Sign Up"
            to="/authentication"
            handleClick={() => {
              Dispatch("changeHomePage", { homePage: "main" });
            }}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

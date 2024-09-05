import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useGSAP } from "@gsap/react";
import { animateFromPosition } from "../animate";

const Header = ({ darkLogo }) => {
  const {
    globalState: { user },
    Dispatch,
  } = useGlobalContext();

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const user = JSON.parse(getUser);
    Dispatch("setUser", { user });
  }, []);

  useGSAP(() => {
    animateFromPosition(".header", {
      y: -200,
      duration: 1.75,
      ease: "bounce",
    });
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
            <Link to="/profile/:id">
              <div>
                <img src={`/avatars/${user?.role}.svg`} alt="notification" />
              </div>
            </Link>
          </div>
        ) : (
          <Btn text="Sign Up" to="/authentication" />
        )}
      </div>
    </header>
  );
};

export default Header;

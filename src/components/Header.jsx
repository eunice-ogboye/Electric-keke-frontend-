import React, { useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "./btn/Btn";
import Bell from "@/assets/svg/Bell";
import { HeroSmallInfo } from "./SmallInfo";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const Header = ({ darkLogo, blur }) => {
  const user = useCurrentUser();
  return (
    <header className="header">
      <div className={`header__content ${blur && "header__content--blur"}`}>
        <LogoPlain />
        <NavBar dark={darkLogo} />

        {user ? (
          <div className="header__profile-nav-board">
            <Link to="/notification">
              <div className="header__icon">
                <span className="indicator" />
                <Bell size={40} color={blur && "white"} />
              </div>
            </Link>

            <HeroSmallInfo
              fullname={user?.fullname}
              
            />
          </div>
        ) : (
          <Btn
            text="Sign Up"
            href="/onboarding"
            linkBtnWidth="w-[15%]"
            styling="btn--hero btn--primary"
          />
        )}
      </div>
    </header>
  );
};

export default Header;

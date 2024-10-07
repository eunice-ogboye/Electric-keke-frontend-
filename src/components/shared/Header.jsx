import React, { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { getItemFromLs } from "../../utils/ls";
import dispatchables from "../../utils/dispatchables";
import Bell from "../../assets/svg/Bell";
import Btn from "./btn/Btn";

const Header = ({ darkLogo, blur }) => {
  const { changeAuthenticationPage } = dispatchables();

  const [user, setUser] = useState(getItemFromLs("user") || null);

  return (
    <header className="header">
      <div className={`header__content ${blur && "header__content--blur"}`}>
        <Logo />
        <NavBar dark={darkLogo} />

        {user ? (
          <div className="header__profile-nav-board">
            <Link to="/notification">
              <div className="header__icon">
                <span className="indicator" />
                <Bell size={40} color={blur && "white"} />
              </div>
            </Link>

            <Link to={`/profile/${user?.id}`}>
              <div className="header__icon">{user.fullname[0]}</div>
            </Link>
          </div>
        ) : (
          <Btn
            text="Sign Up"
            href="/onboarding"
            styling="btn--hero btn--primary w-[171px]"
          />
        )}
      </div>
    </header>
  );
};

export default Header;

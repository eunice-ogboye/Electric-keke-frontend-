import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { getItemFromLs } from "../../utils/ls";
import dispatchables from "../../utils/dispatchables";
import Bell from "../../assets/svg/Bell";

const Header = ({ darkLogo, blur }) => {
  const { changeAuthenticationPage } = dispatchables();

  const [user, setUser] = useState(getItemFromLs("user") || null);

  return (
    <header className="header">
      <div className={`header-container ${blur && "header-con-blur"}`}>
        <Logo />
        <NavBar dark={darkLogo} />

        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/notification">
              <div className="relative">
                <span className="absolute top-0 right-0 bg-red-500 size-2 rounded-full" />
                <Bell color={blur && "white"} />
              </div>
            </Link>

            <Link to={`/profile/${user?.id}`}>
              <div className="header-user-circle">{user.fullname[0]}</div>
            </Link>
          </div>
        ) : (
          <Btn
            text="Sign Up"
            to="/onboarding"
            handleClick={() => changeAuthenticationPage("start")}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { getItemFromLs } from "../../lib/ls";
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
              <div>
                <Bell />
              </div>
            </Link>

            <Link to={`/profile/${user?.id}`}>
              <div className="header-user-circle">{user.fullname[0]}</div>
            </Link>
          </div>
        ) : (
          <Btn
            text="Sign Up"
            to="/authentication"
            handleClick={() => changeAuthenticationPage("start")}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

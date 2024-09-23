import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { getItemFromLs } from "../../lib/ls";
import dispatchables from "../../utils/dispatchables";

const Header = ({ darkLogo }) => {
  const { changeAuthenticationPage } = dispatchables();

  const [user, setUser] = useState(getItemFromLs("user") || null);

  return (
    <header className="header">
      <div className="header-container">
        <Logo main dark={darkLogo} />
        <NavBar dark={darkLogo} />

        {/* <Link to="/settings" className="text-sm text-red-500">
          Settings
        </Link> */}

        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/protect/notification">
              <div>
                <img src="/bell.svg" alt="notification" />
              </div>
            </Link>
            <Link to={`/profile/${user?.id}`}>
              <div className="size-12 flex-center text-3xl font-bold rounded-full bg-eco-green-dark text-white font-josefin">
                {user.fullname[0]}
              </div>
              {/* <div>
                <img src={`/avatars/passenger.svg`} alt="notification" />
              </div> */}
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

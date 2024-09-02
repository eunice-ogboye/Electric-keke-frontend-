import React, { useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header = ({ darkLogo }) => {
  const [user, setUser] = useState({
    role: "passenger",
  });
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
            <Link to="/profile">
              <div>
                <img src={`/avatars/${user.role}.svg`} alt="notification" />
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

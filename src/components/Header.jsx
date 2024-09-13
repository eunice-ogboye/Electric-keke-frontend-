import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { getLoggedInUser } from "../lib/actions/login";

const Header = ({ darkLogo }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const loggedInUser = await getLoggedInUser();
        console.log(loggedInUser);
        setUser(loggedInUser);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLoggedInUser();
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

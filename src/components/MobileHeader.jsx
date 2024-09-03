import React, { useEffect } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import MobileNav from "./MobileNav";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const {
    globalState: { user },
    Dispatch,
  } = useGlobalContext();

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    const user = JSON.parse(getUser);
    Dispatch("setUser", { user });
  }, []);
  return (
    <header className="mobile-header">
      <MobileNav />
      <Logo dark main />
      {user ? (
        <div className="flex items-center gap-[0.65rem]">
          <Link to="/notification">
            <div className="size-5">
              <img src="/bell.svg" alt="notification" />
            </div>
          </Link>
          <Link to="/profile">
            <div className="size-5">
              <img src={`/avatars/${user?.role}.svg`} alt="notification" />
            </div>
          </Link>
        </div>
      ) : (
        <Btn text="Sign Up" size="sm" to="/authentication" />
      )}
    </header>
  );
};

export default MobileHeader;

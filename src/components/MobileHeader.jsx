import React, { useEffect } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import MobileNav from "./MobileNav";
import { useGlobalContext } from "../context";
import { Link, useLocation } from "react-router-dom";

const MobileHeader = () => {
  const {
    globalState: { user },
    Dispatch,
  } = useGlobalContext();
  const { pathname } = useLocation();
  // console.log(pathname);

  useEffect(() => {
    const getUser = localStorage.getItem("user");
    if (!getUser) {
      console.log("no user");
      return;
    }
    const user = JSON.parse(getUser);
    Dispatch("user", { user });
  }, []);
  return (
    <header className="mobile-header h-16">
      {pathname !== "/schedule-ride" && <MobileNav />}

      <Logo dark main />
      {pathname === "/schedule-ride" && (
        <h2 className="font-bold text-xl">Eco Schedule</h2>
      )}

      {pathname !== "/schedule-ride" && (
        <>
          {user ? (
            <div className="flex items-center gap-[0.65rem]">
              <Link to="/notification">
                <div className="size-5">
                  <img src="/bell.svg" alt="notification" />
                </div>
              </Link>
              <Link to={`/profile/${user?.id}`}>
                <div className="size-5">
                  <img src={`/avatars/passenger.svg`} alt="notification" />
                </div>
              </Link>
            </div>
          ) : (
            <Btn
              text="Sign Up"
              size="sm"
              to="/authentication"
              handleClick={() => {
                Dispatch("changeHomePage", { homePage: "main" });
              }}
            />
          )}
        </>
      )}
      {pathname === "/schedule-ride" && (
        <Btn
          text="Search"
          size="search"
          icon={
            <div className="mr-2 size-[14px]">
              <img src="/search.svg" alt="search" className="size-full" />
            </div>
          }
        />
      )}
    </header>
  );
};

export default MobileHeader;

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../lib/actions/login";
import { getToken } from "../lib/actions/customAxios";

const MobileHeader = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const loggedInUser = await getLoggedInUser();
        console.log(loggedInUser);
        setUser(loggedInUser)
      } catch (error) {
        console.log(error);
      }
    };
    fetchLoggedInUser();
  }, []);
  const { pathname } = useLocation();
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
              text={user?.name || "Sign Up"}
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

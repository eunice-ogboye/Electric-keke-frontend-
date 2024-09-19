import React, { useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeAuthPage } from "../../store/slices/global-slice";
import { getItemFromLs } from "../../lib/ls";

const MobileHeader = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(getItemFromLs("user") || null);
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
                <div className="size-8 flex-center text-xl font-bold rounded-full bg-eco-green-dark text-white font-josefin">
                  {user.fullname[0]}
                </div>
                {/* <div className="size-5">
                  <img src={`/avatars/passenger.svg`} alt="notification" />
                </div> */}
              </Link>
            </div>
          ) : (
            <Btn
              text="Sign Up"
              size="sm"
              to="/authentication/register"
              handleClick={() => {
                dispatch(changeAuthPage("register"));
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

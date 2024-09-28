import React, { useState } from "react";
import Logo from "./Logo";
import Btn from "./Btn";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import { getItemFromLs } from "../../utils/ls";
import dispatchables from "../../utils/dispatchables";
import CustomizedBtn from "./CustomizedBtn";
import Bell from "../../assets/svg/Bell";

const MobileHeader = ({ blur }) => {
  // const { changeAuthenticationPage } = dispatchables();

  const [user, setUser] = useState(getItemFromLs("user") || null);
  const { pathname } = useLocation();

  return (
    <header className="mobile-header h-16">
      {pathname !== "/schedule-ride" && <MobileNav blur={blur} />}

      <Logo logoClassName="w-11" />
      {pathname === "/schedule-ride" && (
        <h2 className="font-bold text-xl">Eco Schedule</h2>
      )}

      {pathname !== "/schedule-ride" && (
        <>
          {user ? (
            <div className="flex items-center gap-[0.65rem]">
              <Link to="/notification">
                <div className="size-5 flex-center relative">
                <span className="absolute top-0 right-0 bg-red-500 size-2 rounded-full" />
                  <Bell color={blur && 'white'} />
                </div>
              </Link>

              <Link to={`/profile/${user?.id}`}>
                <div className="header-user-circle">{user.fullname[0]}</div>
              </Link>
            </div>
          ) : (
            <CustomizedBtn
              text="Sign Up"
              href="/onboarding"
              className="w-[134px] h-12 rounded-full bg-eco-green"
              // handleClick={() => changeAuthenticationPage("start")}
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

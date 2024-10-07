import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import { getItemFromLs } from "../../utils/ls";
import Bell from "../../assets/svg/Bell";
import Btn from "./btn/Btn";
import { LogoPlain, LogoWithText } from "@/assets/svg/Logo";

const MobileHeader = ({ blur }) => {
  const [user, setUser] = useState(getItemFromLs("user") || null);
  const { pathname } = useLocation();


  return (
    <header className="mobile-header">
      {pathname !== "/schedule-ride" && <MobileNav blur={blur} />}

      {pathname === "/schedule-ride" && (
        <h2 className="mobile-header__title">Eco Schedule</h2>
      )}

      {pathname === "/settings" ? <LogoWithText /> : <LogoPlain />}

      {pathname !== "/schedule-ride" && (
        <>
          {user ? (
            <div className="header__profile-nav-board">
              <Link to="/notification">
                <div className="header__icon">
                  <span className="indicator" />
                  <Bell color={blur && "white"} size={24} />
                </div>
              </Link>

              <Link to={`/profile/${user?.id}`}>
                <div className="header__icon">{user.fullname[0]}</div>
              </Link>
            </div>
          ) : (
            <Btn
              href="/onboarding"
              text="Sign Up"
              styling="btn--hero btn--primary w-[134px]"
            />
          )}
        </>
      )}

      {/* {pathname === "/schedule-ride" && (
        <Btn
          text="Search"
          size="search"
          icon={
            <div className="mr-2 size-[14px]">
              <img src="/search.svg" alt="search" className="size-full" />
            </div>
          }
        />
      )} */}
    </header>
  );
};

export default MobileHeader;

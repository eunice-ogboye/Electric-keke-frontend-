import { useState } from "react";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import { getItemFromLs } from "../../utils/ls";
import dispatchables from "../../utils/dispatchables";
import CustomizedBtn from "./CustomizedBtn";
import Bell from "../../assets/svg/Bell";
import Btn from "./btn/Btn";

const MobileHeader = ({ blur }) => {
  // const { changeAuthenticationPage } = dispatchables();

  const [user, setUser] = useState(getItemFromLs("user") || null);
  const { pathname } = useLocation();

  return (
    <header className="mobile-header">
      {pathname !== "/schedule-ride" && <MobileNav blur={blur} />}

      <Logo logoClassName="w-11" />
      {pathname === "/schedule-ride" && (
        <h2 className="mobile-header__title">Eco Schedule</h2>
      )}

      {pathname !== "/schedule-ride" && (
        <>
          {user ? (
            <div className="header__profile-nav-board">
              <Link to="/notification">
                <div className="profile-nav__icon">
                  <span className="indicator" />
                  <Bell color={blur && "white"} />
                </div>
              </Link>

              <Link to={`/profile/${user?.id}`}>
                <div className="header-user-circle">{user.fullname[0]}</div>
              </Link>
            </div>
          ) : (
            <Btn
              href="/onboarding"
              text="Sign Up"
              styling="btn--hero w-[134px]"
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

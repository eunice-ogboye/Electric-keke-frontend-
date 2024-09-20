import { briefs, onboardingImages } from "../constants";
import Overlay from "../components/auth/Overlay";
import { Outlet } from "react-router-dom";
import { useTitle } from "../lib/hooks";
import CustomBg from "../components/auth/CustomBg";
import { clearLs } from "../lib/ls";
import { useSelector } from "react-redux";
import { XIcon } from "lucide-react";
import Btn from "../components/shared/Btn";

const AuthPage = () => {
  useTitle("Authentication");
  // redux globals
  const { authPage } = useSelector((state) => state.global);
  console.log(authPage)

  return (
    <section className="flex">
      {authPage === "driver-auth" ? null : (
        <div className="board">
          <Btn
            to="/"
            icon={<XIcon />}
            handleClick={() => {
              clearLs();
            }}
            className="cancel-btn"
          />
          {/* <Button className="cancel-btn p-0" onClick={() =>}>
            <XIcon color="black" />
          </Button> */}

          {authPage === "start" ? (
            <>
              <Overlay className="overlay" />
              <img
                src={onboardingImages[authPage]}
                alt={`onboarding ${authPage}`}
                className="size-full object-cover object-center rounded-xl"
              />
            </>
          ) : (
            <CustomBg
              children={
                <div className="w-[320px] lg:w-[501px] mx-auto">
                  <h1 className="briefing">{briefs[authPage]}</h1>
                </div>
              }
            />
          )}
        </div>
      )}
      <Outlet />
    </section>
  );
};

export default AuthPage;

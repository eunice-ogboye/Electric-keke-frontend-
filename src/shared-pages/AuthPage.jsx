import { briefs, onboardingImages } from "../constants";
import Overlay from "../components/auth/Overlay";
import { Outlet, Routes, Route } from "react-router-dom";
import { useTitle } from "../lib/hooks";
import CustomBg from "../components/auth/CustomBg";
import { clearLs } from "../lib/ls";
import { useSelector } from "react-redux";
import { XIcon } from "lucide-react";
import Btn from "../components/shared/Btn";
import RegisterAs from "../pages/auth-pages/RegisterAs";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Verification from "../pages/auth-pages/Verification";
import Template from "../pages/auth-pages/Template";
import DriverAuth from "../pages/auth-pages/DriverAuth";

const AuthPage = () => {
  useTitle("Authentication");
  // redux globals
  const { authPage } = useSelector((state) => state.global);
  console.log(authPage);

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
      <Routes>
        <Route index element={<RegisterAs />} />
        <Route
          path="verification"
          element={
            <ErrorBoundary
              fallback={<div className="flex-center">Some erro</div>}
            >
              <Verification />
            </ErrorBoundary>
          }
        />
        <Route path=":id" element={<Template />} />
        <Route path="driver-auth" element={<DriverAuth />} />
      </Routes>
      {/* <Outlet /> */}
    </section>
  );
};

export default AuthPage;

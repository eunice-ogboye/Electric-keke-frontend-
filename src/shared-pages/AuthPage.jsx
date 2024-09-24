import { Routes, Route } from "react-router-dom";
import { useTitle } from "../lib/hooks";
import { useSelector } from "react-redux";
import RegisterAs from "../pages/auth-pages/RegisterAs";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Verification from "../pages/auth-pages/Verification";
import DriverAuth from "../pages/auth-pages/DriverAuth";
import AuthPageBoard from "./AuthPageBoard";
import Register from "../pages/auth-pages/Register";
import Complete from "../pages/auth-pages/Complete";
import Otp from "../pages/auth-pages/Otp";
import Congrats from "../pages/auth-pages/Congrats";
import Login from "../pages/auth-pages/Login";
import Forget from "../pages/auth-pages/Forget";
import New from "../pages/auth-pages/New";

const AuthPage = () => {
  useTitle("Authentication");
  // redux globals
  const { authPage } = useSelector((state) => state.global);
  console.log(authPage);

  return (
    <section className="flex">
      <AuthPageBoard authPage={authPage} />
      <Routes>
        <Route index element={<RegisterAs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/otp" element={<Otp />} />
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
        <Route path="/congrats" element={<Congrats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forget />} />
        <Route path="/new" element={<New />} />
        <Route path="driver-auth" element={<DriverAuth />} />
      </Routes>
    </section>
  );
};

export default AuthPage;

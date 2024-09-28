import { Routes, Route } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import { useSelector } from "react-redux";
import DriverAuth from "../pages/auth-pages/DriverAuth";

const AuthPage = () => {
  useTitle("Authentication");
  // redux globals
  const { authPage } = useSelector((state) => state.global);
  console.log(authPage);

  return (
    <section className="flex">
      <Routes>
        <Route path="driver-auth" element={<DriverAuth />} />
      </Routes>
    </section>
  );
};

export default AuthPage;

import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Alert from "./components/shared/Alert";
import Modal from "./components/shared/Modal";
//map css
import "leaflet/dist/leaflet.css";
//error handling and for suppenses
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
// shared page working as routes
import AdminLayout from "./shared-pages/AdminLayout";
//landing home pages
import About from "./pages/landing-pages/About";
import Home from "./pages/landing-pages/Home";
import Earn from "./pages/landing-pages/Earn";
import Support from "./pages/landing-pages/Support";
// auth pages
import AuthPage from "./shared-pages/AuthPage";
import RegisterAs from "./pages/auth-pages/RegisterAs";
import DriverAuth from "./pages/auth-pages/DriverAuth";
import Template from "./pages/auth-pages/Template";
import Verification from "./pages/auth-pages/Verification";
// protiction layer
import ProtectedRoute from "./shared-pages/Private";
// profile
import Profile from "./pages/profile-pages/Profile";
import Settings from "./pages/profile-pages/Settings";
// xp experience
import Driver from "./pages/xp-pages/Driver";
import Schedule from "./pages/xp-pages/Schedule";
import Notification from "./pages/xp-pages/Notification";
import RiderInfo from "./pages/xp-pages/RiderInfo";
import CustomerCare from "./pages/xp-pages/CustomerCare";
import RiderIndex from "./pages/xp-pages/RiderIndex";
import Riders from "./pages/xp-pages/Riders";
import Tracking from "./pages/xp-pages/Tracking";

//admin
import UserManagement from "./pages/admin/UserManagement";
import FinancialManagement from "./pages/admin/FinancialManagement";

function App() {
  const {
    alert: { show },
    modal,
  } = useSelector((state) => state.global);

  return (
    <>
      <div className="App max-w-screen-2xl overflow-hidden mx-auto relative">
        <AnimatePresence>
          {modal && <Modal />}
          {show && <Alert />}
        </AnimatePresence>
        <Routes>
          {/* homepages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/earn-with-us" element={<Earn />} />
          <Route path="/support" element={<Support />} />
          {/* auth pages */}
          <Route path="/authentication" element={<AuthPage />}>
            <Route path="register-as" element={<RegisterAs />} />
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
          </Route>

          {/* protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/driver/:id" element={<Driver />} />
            <Route path="/schedule-ride" element={<Schedule />} />
            <Route path="/riders" element={<Riders />}>
              <Route index element={<RiderIndex />} />
              <Route path=":id" element={<RiderInfo />} />
            </Route>
            <Route path="/notification" element={<Notification />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/customer-care" element={<CustomerCare />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="user-management" element={<UserManagement />} />
              <Route
                path="financial-management"
                element={<FinancialManagement />}
              />
              <Route
                path="settings"
                element={
                  <div className="flex-center">Will You be working on this</div>
                }
              />
            </Route>
          </Route>
          {/* protected routes */}

          <Route
            path="*"
            element={
              <div className="w-full h-screen flex-center flex-col">
                <p className="text-2xl font-bold">Not Found...</p>
                <Link to="/" className="text-eco-green">
                  Go Back to Home
                </Link>
              </div>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import {
  Home,
  Account,
  CustomerCare,
  Template,
  Earn,
  Riders,
  RiderIndex,
  RiderInfo,
  Tracking,
  Notification,
  Support,
  Driver,
  DriverAuth,
  Profile,
  Schedule,
  Settings,
} from "./pages";
import { Boarding } from "./shared-layout";
import { Modal } from "./components";
import { useGlobalContext } from "./context";
import "leaflet/dist/leaflet.css";
import Alert from "./components/Alert";
import { AnimatePresence } from "framer-motion";
import Admin from "./pages/Admin";

function App() {
  const {
    globalState: { modal },
    alert: { show },
  } = useGlobalContext();

  return (
    <>
      <div className="App max-w-screen-2xl overflow-hidden mx-auto relative">
        <AnimatePresence>
          {modal && <Modal />}
          {show && <Alert />}
        </AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/earn-with-us" element={<Earn />} />
          <Route path="/support" element={<Support />} />
          <Route path="/driver/:id" element={<Driver />} />
          <Route path="/schedule-ride" element={<Schedule />} />
          <Route path="/riders" element={<Riders />}>
            <Route index element={<RiderIndex />} />
            <Route path=":id" element={<RiderInfo />} />
          </Route>
          <Route path="/notification" element={<Notification />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/authentication" element={<Boarding />}>
            <Route index element={<Account />} />
            <Route path=":id" element={<Template />} />
            <Route path="driver-auth" element={<DriverAuth />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import {
  Home,
  Account,
  Template,
  Earn,
  Riders,
  RiderIndex,
  RiderInfo,
  Tracking,
  Notification
} from "./pages";
import { Boarding } from "./shared-layout";
import { Modal } from "./components";
import { useGlobalContext } from "./context";

function App() {
  const { modal } = useGlobalContext().globalState;
  return (
    <>
      {modal && <Modal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earn-with-us" element={<Earn />} />
        <Route path="/riders" element={<Riders />}>
          <Route index element={<RiderIndex />} />
          <Route path=":id" element={<RiderInfo />} />
        </Route>
        <Route path="/notification" element={<Notification />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/authentication" element={<Boarding />}>
          <Route index element={<Account />} />
          <Route path=":id" element={<Template />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Boarding from "./shared-layout/Boarding";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import CompleteProfile from "./pages/CompleteProfile";
// import ChooseOtp from "./pages/ChooseOtp";
import Template from "./pages/Template";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Boarding />}>
          <Route index element={<Account />} />
          <Route path=":id" element={<Template />} />
          {/* <Route path="register" element={<Register />} />
          <Route path="complete-profile" element={<CompleteProfile />} />
          <Route path="choose-otp" element={<ChooseOtp />} /> */}
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

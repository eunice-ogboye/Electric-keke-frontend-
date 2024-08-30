import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import Boarding from "./shared-layout/Boarding";
import Template from "./pages/Template";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Boarding />}>
          <Route index element={<Account />} />
          <Route path=":id" element={<Template />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

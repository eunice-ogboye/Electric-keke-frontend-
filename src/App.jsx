import { Route, Routes } from "react-router-dom";
import { Home, Account, Template, Earn } from "./pages";
import { Boarding } from "./shared-layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/earn-with-us" element={<Earn />} />
        <Route path="/:id" element={<Boarding />}>
          <Route index element={<Account />} />
          <Route path=":id" element={<Template />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

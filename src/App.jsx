import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Alert from "./components/shared/Alert";
import "leaflet/dist/leaflet.css";
import About from "./pages/landing-pages/About";
import Home from "./pages/landing-pages/Home";
import Earn from "./pages/landing-pages/Earn";
import Support from "./pages/landing-pages/Support";
import ProtectedRoute from "./sharedLayouts/Private";
import InternalServer from "./pages/error-pages/InternalServer";
import Loader from "./components/loaders/Loader";
import NotFound from "./pages/not-found/NotFound";
import Onboarding from "./pages/onboarding";

function App() {
  const {
    alert: { show },
    loading,
  } = useSelector((state) => state.global);

  return (
    <>
      <div className="App max-w-screen-2xl overflow-hidden mx-auto relative">
        <AnimatePresence>
          {show && <Alert />}
          {loading && (
            <Loader
              className="fixed top-5 right-5 z-50"
              type="spin2"
              size={30}
            />
          )}
        </AnimatePresence>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/earn-with-us" element={<Earn />} />
          <Route path="/support" element={<Support />} />
          <Route path="/onboarding/*" element={<Onboarding />} />
          <Route path="/*" element={<ProtectedRoute />} />
          <Route path="/ie/:id" element={<InternalServer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

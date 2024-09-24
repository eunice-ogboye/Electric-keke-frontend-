import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Alert from "./components/shared/Alert";
import Modal from "./components/shared/Modal";
//map css
import "leaflet/dist/leaflet.css";
//landing home pages
import About from "./pages/landing-pages/About";
import Home from "./pages/landing-pages/Home";
import Earn from "./pages/landing-pages/Earn";
import Support from "./pages/landing-pages/Support";
// auth pages
import AuthPage from "./shared-pages/AuthPage";
// protiction layer
import ProtectedRoute from "./shared-pages/Private";
// error
import InternalServer from "./pages/error-pages/InternalServer";
// message
import Loader from "./components/loaders/Loader";

function App() {
  const {
    alert: { show },
    modal,
    loading,
  } = useSelector((state) => state.global);

  return (
    <>
      <div className="App max-w-screen-2xl overflow-hidden mx-auto relative">
        <AnimatePresence>
          {modal && <Modal />}
          {show && <Alert />}
          {loading && (
            <Loader
              className="fixed top-5 right-20 text-white z-50 border"
              type="spin2"
              size={50}
            />
          )}
        </AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/earn-with-us" element={<Earn />} />
          <Route path="/support" element={<Support />} />
          <Route path="/authentication/*" element={<AuthPage />} />
          <Route path="/*" element={<ProtectedRoute />} />
          <Route path="/ie/:id" element={<InternalServer />} />
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

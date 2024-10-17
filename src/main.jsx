// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);

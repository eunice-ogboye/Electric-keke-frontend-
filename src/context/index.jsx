import { initialState, reducer } from "../reducer";
import { useReducer, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  const [alert, setAlert] = useState({
    type: "",
    msg: "Account Successfully Created",
    show: false,
  });
  const showAlert = (type = "success", msg) => {
    setAlert({
      type,
      msg,
      show: true,
    });
  };

  const hideAlert = () => setAlert((prev) => ({ ...prev, show: false }));
  const Dispatch = (type, payload) => dispatch({ type, payload });

  return (
    <AppContext.Provider
      value={{ dispatch, globalState, Dispatch, showAlert, hideAlert, alert }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("no context");
  }
  return context;
};

export { AppProvider, useGlobalContext };

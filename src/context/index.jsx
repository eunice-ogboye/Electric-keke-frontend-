import { initialState, reducer } from "../reducer";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);

  const Dispatch = (type, payload) => dispatch({ type, payload });
  
  return (
    <AppContext.Provider value={{ dispatch, globalState, Dispatch }}>
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

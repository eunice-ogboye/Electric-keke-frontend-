import { useNavigate } from "react-router-dom";
import { addItemToLs, deletItemFromLs, getItemFromLs } from "../utils/ls";
import { createContext, useCallback, useContext, useState } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(
    getItemFromLs("isAuthenticated") || false
  );

  const AuthenticateLogin = () => {
    console.log("login authentication");
    console.log("........................");
    addItemToLs("isAuthenticated", true);
    setIsAuthenticated(true);
  };

  const AuthenticateLogout = () => {
    deletItemFromLs("isAuthenticated");
    setIsAuthenticated(false);
    navigate("/");
    console.log(done);
    console.log("........................");
  };

  // const AuthProviderValue = useCallback(() => {
  //   return { isAuthenticated, AuthenticateLogin, AuthenticateLogout };
  // }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, AuthenticateLogin, AuthenticateLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useGlobalAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No auth context");
  }
  return context;
};

export { useGlobalAuthContext, AuthProvider };

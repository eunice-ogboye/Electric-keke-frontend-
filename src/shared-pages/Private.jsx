import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getItemFromLs } from "../lib/ls";
import { useGlobalAuthContext } from "../contexts/AuthContext";

const ProtectedRoute = () => {
  const [user, setUser] = useState(getItemFromLs("user") || null);
  const { isAuthenticated } = useGlobalAuthContext();
  // console.log(user, "from private route");

  return isAuthenticated ? <Outlet context={user} /> : <Navigate to="/" />;
};

export default ProtectedRoute;

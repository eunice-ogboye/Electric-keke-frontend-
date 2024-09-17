import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getItemFromLs } from "../lib/ls";

const ProtectedRoute = () => {
  const [user, setUser] = useState(getItemFromLs("user") || null);
  console.log(user, "from private route");

  return user ? <Outlet context={user} /> : <Navigate to="/" />;
};

export default ProtectedRoute;

import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../lib/actions/login";

const ProtectedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        const loggedInUser = await getLoggedInUser();
        console.log(loggedInUser);
        setUser(loggedInUser);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLoggedInUser();
  }, []);

  if (loading) {
    return <div>...</div>;
  }

  return user ? <Outlet context={user} /> : <Navigate to="/" />;
};

export default ProtectedRoute;

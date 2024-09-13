import { getLoggedInUser } from "../lib/actions/login";
import { useGlobalContext } from "../context";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const {
    globalState: { user },
    Dispatch,
  } = useGlobalContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLoggedInUser = async () => {
      try {
        await getLoggedInUser(Dispatch);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (user === null) {
      fetchLoggedInUser();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading ....</div>;
  }

  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;

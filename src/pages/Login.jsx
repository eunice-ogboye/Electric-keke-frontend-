import { useTitle } from "../lib/hooks";
import Boarding from "../shared-layout/Boarding";
import React from "react";

const Login = () => {
  useTitle("Login")
  return <Boarding>
    Login
  </Boarding>
};

export default Login;

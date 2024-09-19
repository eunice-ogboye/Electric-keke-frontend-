import React from "react";
import { Link } from "react-router-dom";

const ForgetTab = ({ changeAuthenticationPage }) => {
  return (
    <div className="forget-tab">
      <div className="flex gap-2">
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <Link
        to="/authentication/forgot-password"
        onClick={() => changeAuthenticationPage("forget")}
      >
        <p className="font-semibold">Forgot Password?</p>
      </Link>
    </div>
  );
};

export default ForgetTab;

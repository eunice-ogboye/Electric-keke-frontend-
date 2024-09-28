import dispatchables from "../../utils/dispatchables";
import React from "react";
import { Link } from "react-router-dom";

const ForgetTab = ({ nextProcess }) => {
  // const { changeAuthenticationPage } = dispatchables();

  return (
    <div className="forget-tab">
      <div className="flex gap-2">
        <input type="checkbox" name="remember" id="remember" />
        <label htmlFor="remember">Remember me</label>
      </div>
      <Link
        onClick={() => {
          console.log("omo")
          nextProcess();
        }}
      >
        <p className="font-semibold">Forgot Password?</p>
      </Link>
    </div>
  );
};

export default ForgetTab;

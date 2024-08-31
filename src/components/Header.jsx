import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Btn from "./Btn";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo main />
        <NavBar />
        <Btn text="Sign Up" to="/onboarding" />
      </div>
    </header>
  );
};

export default Header;

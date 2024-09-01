import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import Btn from "./Btn";
import NavBar from "./NavBar";

const Header = ({darkLogo}) => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo main dark={darkLogo} />
        <NavBar dark={darkLogo} />
        <Btn text="Sign Up" to="/authentication" />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CustomizedBtn = ({
  className,
  icon,
  text,
  handleClick,
  position = "left",
  href,
  disabled,
}) => {
  const ButtonMain = () => {
    return (
      <Button className={className} onClick={handleClick} disabled={disabled}>
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </Button>
    );
  };

  const LinkAsButton = () => {
    return (
      <Link to={href}>
        <Button className={className} onClick={handleClick} disabled={disabled}>
          {position === "left" && icon}
          {text}
          {position === "right" && icon}
        </Button>
      </Link>
    );
  };

  return href ? LinkAsButton() : ButtonMain();
};

export default CustomizedBtn;

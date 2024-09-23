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
}) => {
  const ButtonMain = () => {
    return (
      <Button className={className} onClick={handleClick}>
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </Button>
    );
  };

  const LinkAsButton = () => {
    return (
      <Link
        to={href}
        className={`${className} inline-block`}
        onClick={handleClick}
      >
        {position === "left" && icon}
        {text}
        {position === "right" && icon}
      </Link>
    );
  };

  return href ? LinkAsButton() : ButtonMain();
};

export default CustomizedBtn;

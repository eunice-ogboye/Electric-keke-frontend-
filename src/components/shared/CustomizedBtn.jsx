import React from "react";
import { Button } from "../ui/button";

const CustomizedBtn = ({ className, icon, text, handleClick, position = 'left' }) => {
  return (
    <Button className={className} onClick={handleClick}>
      {position === "left" && icon}
      {text}
      {position === "right" && icon}
    </Button>
  );
};

export default CustomizedBtn;

import React from "react";
import { Button } from "../ui/button";

const CustomizedBtn = ({ className, icon,  text, handleClick }) => {
  return (
    <Button className={className} onClick={handleClick}>
      {text}
    </Button>
  );
};

export default CustomizedBtn;

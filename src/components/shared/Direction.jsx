import React from "react";
import { Button } from "../ui/button";

const Direction = ({ handleClick }) => {
  return (
    <div className="direction">
      <Button
        className="direction-btn"
        onClick={() => {
          handleClick("decrement");
        }}
      >
        <img src="/arr-left.svg" alt="left direction" />
      </Button>
      <Button
        className="direction-btn"
        onClick={() => {
          handleClick("increment");
        }}
      >
        <img src="/arr-right.svg" alt="left direction" />
      </Button>
    </div>
  );
};

export default Direction;

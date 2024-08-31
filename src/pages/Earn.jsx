import React from "react";
import { HomePage } from "../shared-layout";
import { useTitle } from "../lib/hooks";
import { Contribution, Flexibility } from "../components";
const Earn = () => {
  useTitle("Earn");
  return (
    <HomePage>
      <Contribution />
    </HomePage>
  );
};

export default Earn;

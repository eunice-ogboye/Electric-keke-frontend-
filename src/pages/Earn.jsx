import React, { useEffect } from "react";
import { HomePage } from "../shared-layout";
import { useTitle } from "../lib/hooks";
import { Contribution } from "../components";
import { useGlobalContext } from "../context";
const Earn = () => {
  useTitle("Earn");
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: "homePage", payload: { homePage: "earn" } });
  }, []);

  return (
    <HomePage>
      <Contribution />
    </HomePage>
  );
};

export default Earn;

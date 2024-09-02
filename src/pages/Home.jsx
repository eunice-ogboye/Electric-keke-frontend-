import React, { useEffect } from "react";
import { useTitle } from "../lib/hooks";
import { Mission } from "../components";
import { HomePage } from "../shared-layout";
import { useGlobalContext } from "../context";

const Home = () => {
  useTitle("Home");
  const { Dispatch } = useGlobalContext();

  useEffect(() => {
    Dispatch("homePage", { homePage: "main" });
  }, []);

  return (
    <HomePage>
      <Mission />
    </HomePage>
  );
};

export default Home;

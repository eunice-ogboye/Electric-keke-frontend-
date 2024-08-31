import React, { useEffect } from "react";
import { useTitle } from "../lib/hooks";
import { Mission } from "../components";
import { HomePage } from "../shared-layout";
import { useGlobalContext } from "../context";

const Home = () => {
  useTitle("Home");
  const { dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: "homePage", payload: { homePage: "main" } });
  }, []);
  
  return (
    <HomePage>
      <Mission />
    </HomePage>
  );
};

export default Home;

import React from "react";
import { useTitle } from "../lib/hooks";
import { Mission, Testimonial } from "../components";
import { HomePage } from "../shared-layout";

const Home = () => {
  useTitle("Home");
  return (
    <HomePage>
      <Mission />
    </HomePage>
  );
};

export default Home;

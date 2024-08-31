import About from "../components/About";
import Hero from "../components/Hero";
import { Button } from "../components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Hero />
<About />
    </>
  );
};

export default Home;

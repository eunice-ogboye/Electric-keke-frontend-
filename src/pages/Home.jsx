import React from "react";
import { useTitle } from "../lib/hooks";
import {
  About,
  Connected,
  Footer,
  Hero,
  Mission,
  Testimonial,
} from "../components";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Hero />
      <About />
      <Mission />
      <Testimonial />
      <Connected />
      <Footer />
    </>
  );
};

export default Home;

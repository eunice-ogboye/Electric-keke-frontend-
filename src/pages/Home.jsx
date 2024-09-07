import React, { useEffect } from "react";
import { useTitle } from "../lib/hooks";
import { Connected, Footer, Mission, Testimonial } from "../components";
import { Section } from "../shared-layout";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = () => {
  useTitle("Home");

  return (
    <Section>
      <Hero />
      <About />
      <Mission />
      <Testimonial />
      <Connected />
      <Footer />
    </Section>
  );
};

export default Home;

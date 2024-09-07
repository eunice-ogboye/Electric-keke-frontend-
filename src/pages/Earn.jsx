import React, { useEffect } from "react";
import { Section } from "../shared-layout";
import { useTitle } from "../lib/hooks";
import { Connected, Contribution, Footer, Testimonial } from "../components";
import Hero from "../components/Hero";
import About from "../components/About";

const Earn = () => {
  useTitle("Earn");

  return (
    <Section>
      <Hero type="earn" />
      <About type="earn" />
      <Contribution />
      <Testimonial type="earn" />
      <Connected type="earn" />
      <Footer />
    </Section>
  );
};

export default Earn;

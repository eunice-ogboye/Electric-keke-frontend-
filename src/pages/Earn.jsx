import React, { useEffect } from "react";
import { HomePage, Section } from "../shared-layout";
import { useTitle } from "../lib/hooks";
import {
  About,
  Connected,
  Contribution,
  Footer,
  Hero,
  Testimonial,
} from "../components";
import { useGlobalContext } from "../context";
const Earn = () => {
  useTitle("Earn");
  const { Dispatch } = useGlobalContext();

  useEffect(() => {
    Dispatch('homePage', {homePage: 'earn'})
  }, []);

  return (
    <Section>
      <Hero />
      <About />
      <Contribution />
      <Testimonial />
      <Connected />
      <Footer />
    </Section>
  );
};

export default Earn;

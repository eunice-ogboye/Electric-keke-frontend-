import React, { useEffect } from "react";
import { Section } from "../shared-layout";
import { useTitle } from "../lib/hooks";
import {
  About,
  Connected,
  Contribution,
  Testimonial,
} from "../components";
import Hero from '../components/earn/Hero'
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
      {/* <Footer /> */}
    </Section>
  );
};

export default Earn;

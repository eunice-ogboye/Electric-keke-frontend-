import React, { useEffect } from "react";
import { Section } from "../shared-layout";
import { useTitle } from "../lib/hooks";
import {
  Connected,
  Contribution,
  Footer,
} from "../components";
import Hero from '../components/earn/Hero'
import { useGlobalContext } from "../context";
import AboutEarn from "../components/earn/AboutEarn";
import TestimonialEarn from "../components/earn/TestimonialEarn";
const Earn = () => {
  useTitle("Earn");
  const { Dispatch } = useGlobalContext();

  useEffect(() => {
    Dispatch('homePage', {homePage: 'earn'})
  }, []);

  return (
    <Section>
      <Hero />
      <AboutEarn />
      <Contribution />
      <TestimonialEarn />
      <Connected />
      <Footer />
    </Section>
  );
};

export default Earn;

import React, { useEffect } from "react";
import { useTitle } from "../lib/hooks";
import { About, Connected, Mission, Testimonial } from "../components";
import Hero from "../components/home/Hero";
import {  Section } from "../shared-layout";
import { useGlobalContext } from "../context";

const Home = () => {
  useTitle("Home");
  const { Dispatch } = useGlobalContext();

  useEffect(() => {
    Dispatch("homePage", { homePage: "main" });
  }, []);

  return (
    <Section>
      <Hero />
      <About />
      <Mission />
      <Testimonial />
      <Connected />
    </Section>
  );
};

export default Home;

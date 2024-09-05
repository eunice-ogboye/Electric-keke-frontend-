import React, { useEffect } from "react";
import { useTitle } from "../lib/hooks";
import { About, Connected, Hero, Mission, Testimonial } from "../components";
import { HomePage, Section } from "../shared-layout";
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

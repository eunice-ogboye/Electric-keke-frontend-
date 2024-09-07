import React, { useEffect } from "react";
import { useTitle } from "../lib/hooks";
import { Connected, Footer, Mission } from "../components";
import Hero from "../components/home/Hero";
import {  Section } from "../shared-layout";
import { useGlobalContext } from "../context";
import About from '../components/home/About'
import Testimonial from "../components/home/Testimonial";

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
      <Footer />
    </Section>
  );
};

export default Home;

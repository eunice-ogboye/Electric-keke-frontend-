import React from "react";
import {
  About,
  Connected,
  Footer,
  Hero,
  Testimonial,
} from "../components";
import { Section } from ".";
const HomePage = ({ children, type }) => {
  return (
    <Section>
      <Hero />
      {type === "support" ? (
        <>{children}</>
      ) : (
        <>
          <About />
          {children}
          <Testimonial />
          <Connected />
        </>
      )}
      <Footer />
    </Section>
  );
};

export default HomePage;

import React from "react";
import {
  About,
  Connected,
  Footer,
  Testimonial,
} from "../components";
import { Section } from ".";
const HomePage = ({ children, type }) => {
  return (
    <Section>
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

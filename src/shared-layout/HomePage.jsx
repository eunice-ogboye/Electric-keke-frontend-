import React from "react";
import {
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

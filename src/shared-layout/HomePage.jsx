import React from "react";
import { About, Connected, Footer, Hero, Testimonial } from "../components";
const HomePage = ({ children }) => {
  return (
    <>
      <Hero />
      <About />
      {children}
      <Testimonial />
      <Connected />
      <Footer />
    </>
  );
};

export default HomePage;

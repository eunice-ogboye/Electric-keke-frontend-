import React from "react";
import {
  About,
  Connected,
  Footer,
  Header,
  Hero,
  Testimonial,
} from "../components";
const HomePage = ({ children }) => {
  return (
    <>
      <Header />
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

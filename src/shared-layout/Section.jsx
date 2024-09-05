import { Footer, Header, MobileHeader } from "../components";
import React from "react";

const Section = ({ children, darkLogo }) => {
  return (
    <>
      <MobileHeader />
      <Header darkLogo={darkLogo} />
      <section>{children}</section>
      <Footer />
    </>
  );
};

export default Section;

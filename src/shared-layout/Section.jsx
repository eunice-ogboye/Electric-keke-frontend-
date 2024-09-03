import { Header, MobileHeader } from "../components";
import React from "react";

const Section = ({ children, darkLogo }) => {
  return (
    <section>
      <MobileHeader />
      <Header darkLogo={darkLogo} />
      {children}
    </section>
  );
};

export default Section;

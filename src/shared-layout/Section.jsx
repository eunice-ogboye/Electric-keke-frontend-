import { Header } from "../components";
import React from "react";

const Section = ({ children, darkLogo }) => {
  return (
    <section>
      <Header darkLogo={darkLogo} />
      {children}
    </section>
  );
};

export default Section;

import { useTitle } from "../lib/hooks";
import { useGlobalContext } from "../context";
import { Section } from "../shared-layout";
import React, { useEffect } from "react";
import { ContactSupport, Faq, Footer } from "../components";
import Hero from "../components/Hero";

const Support = () => {
  useTitle("Support");
  const {
    Dispatch,
    globalState: { support },
  } = useGlobalContext();

  useEffect(() => {
    Dispatch("homePage", { homePage: "support" });
  }, []);

  return (
    <Section>
      <Hero type="support"/>
      <div className="home-pad min-h-[617px] flex-center">
        {support === "faq" ? <Faq /> : <ContactSupport />}
      </div>
      <Footer />
    </Section>
  );
};

export default Support;

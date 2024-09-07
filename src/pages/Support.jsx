import { useTitle } from "../lib/hooks";
import { useGlobalContext } from "../context";
import { Section } from "../shared-layout";
import React, { useEffect } from "react";
import { ContactSupport, Faq } from "../components";
import Hero from "../components/support/Hero";

const Support = () => {
  const {
    Dispatch,
    globalState: { support },
  } = useGlobalContext();
  useTitle("Support");

  useEffect(() => {
    Dispatch("homePage", { homePage: "support" });
  }, []);

  return (
    <Section>
      <Hero />
      <div className="home-pad min-h-[617px] flex-center">
        {support === "faq" ? <Faq /> : <ContactSupport />}
      </div>
      <Footer />
    </Section>
  );
};

export default Support;

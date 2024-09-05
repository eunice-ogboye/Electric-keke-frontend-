import { useTitle } from "../lib/hooks";
import { useGlobalContext } from "../context";
import { HomePage, Section } from "../shared-layout";
import React, { useEffect } from "react";
import { ContactSupport, Faq, Hero } from "../components";

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
    </Section>
  );
};

export default Support;

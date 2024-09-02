import { useTitle } from "../lib/hooks";
import { useGlobalContext } from "../context";
import { HomePage } from "../shared-layout";
import React, { useEffect } from "react";
import { ContactSupport, Faq } from "../components";

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
    <HomePage type="support">
      <div className="home-pad min-h-[617px] flex-center">
        {support === "faq" ? (
          <Faq />
        ) : (
          <ContactSupport />
        )}
      </div>
    </HomePage>
  );
};

export default Support;

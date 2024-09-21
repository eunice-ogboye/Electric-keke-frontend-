/**
 * This page will store data for your route as well as
 * your previous info on the page you were in and after
 * your issue has been resolved, will take yo back to
 * where you left of
 */

/**FOR NOW IT WILL JUST GO BACK WITH NO DATA */

/** Concept is to save data from the page you are
 * redirecting from so as to go back when needed
 */

import { getItemFromLs } from "../../lib/ls";
import Btn from "../../components/shared/Btn";
import React from "react";

const InternalServer = () => {
  const previous_page = getItemFromLs("prev_page");

  return (
    <section className="h-screen w-full flex-center">
      <div>
        <h2>Internal Server Error</h2>
        <p>Check Internet Connection and Try Again</p>
        <Btn text="Try Again" to={previous_page} />
      </div>
    </section>
  );
};

export default InternalServer;

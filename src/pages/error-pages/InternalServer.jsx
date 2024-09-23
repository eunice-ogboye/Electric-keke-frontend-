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
import Logo from "../../components/shared/Logo";
import Heading from "../../components/shared/Heading";

const InternalServer = () => {
  const previous_page = getItemFromLs("prev_page");
  console.log(previous_page)

  return (
    <section className="h-screen w-full flex-center">
      <div>
        <Logo className="text-center w-20 mx-auto" />
        <Heading
          title="500"
          tclass="text-9xl text-center text-eco-green-prime"
          description="Internal Server Error, Check Connection and Try again"
          dclass="text-center text-2xl"
        />

        <div className="mt-6 flex-center">
          <Btn text="Try Again" to={previous_page} className="mx-auto block" />
        </div>
      </div>
    </section>
  );
};

export default InternalServer;

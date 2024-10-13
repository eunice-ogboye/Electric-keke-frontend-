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

import { getItemFromLs } from "../utils/ls";
import Btn from "@/components/btn/Btn";
import Heading from "@/components/Heading";
import { LogoPlain } from "@/assets/svg/Logo";

const InternalServer = () => {
  const prev_page = getItemFromLs("prev_page");

  return (
    <section className="h-screen w-full flex-center">
      <div>
        <LogoPlain styling="text-center w-20 mx-auto" />
        <Heading
          title="500"
          tclass="text-9xl text-center text-basic-prime"
          description="Internal Server Error, Check Connection and Try again"
          dclass="text-center text-2xl"
        />

        <div className="mt-6 flex-center">
          <Btn
            text="Try Again"
            styling="btn btn--lg w-[171px] btn--primary"
            href={prev_page}
          />
        </div>
      </div>
    </section>
  );
};

export default InternalServer;

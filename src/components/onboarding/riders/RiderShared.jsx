import Heading from "../../../components/shared/Heading";
import React from "react";
import AuthProcess from "./AuthProcess";

const RiderShared = ({ children }) => {
  return (
    <section className="home-pad py-10 md:py-6 laptop:py-[60px] w-full">
      <div>
        <div className="w-full md:w-[60%] max-w-[888px] mx-auto">
          <Heading
            title="Driver's license & Document"
            tclass="text-2xl font-bold md:text-[2rem] laptop:text-[40px] text-center font-josefin"
          />
          <AuthProcess />
        </div>
        {children}
      </div>
    </section>
  );
};

export default RiderShared;

import React from "react";
import Heading from "../shared/Heading";
import TeamBoard from "./TeamBoard";

const Meet = () => {
  return (
    <section className="h-[668px] border home-pad flex-center">
      <div className="w-full max-w-[1200px]">
        <Heading title="Meet The Team" tclass="text-center" />
        <TeamBoard />
      </div>
    </section>
  );
};

export default Meet;

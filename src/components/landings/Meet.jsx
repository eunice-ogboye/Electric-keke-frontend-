import React from "react";
import Heading from "../shared/Heading";
import TeamBoard from "./TeamBoard";

const Meet = () => {
  return (
    <section className="min-h-[668px] border home-pad flex-center py-10">
      <div className="w-full max-w-[1200px]">
        <Heading title="Meet The Team" type="about" tclass="text-center" />
        <TeamBoard />
      </div>
    </section>
  );
};

export default Meet;

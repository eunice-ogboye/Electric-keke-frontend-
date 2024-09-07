import React from "react";
import Heading from "./Heading";
import { mission } from "../constants";

const Mission = () => {
  return (
    <section className="py-[7.5rem] bg-eco-green-prime">
      <div className="home-pad">
        <Heading
          introTitle="Our Vision"
          introClass="text-base-white mission"
          title={mission.title}
          tclass="text-base-white"
          description={mission.desc}
          dclass="!text-base-white text-2xl mt-4"
          className="max-w-[894px]"
        />
      </div>

      <div className="px-3 mt-20 md:h-[810px] overflow-hidden">
        <img src="/map.svg" alt="map" className="" />
      </div>

      <div className="mt-14 max-w-[933px] mx-auto">
        <p className="text-center text-2xl text-base-white font-montserrat">
          By expanding our fleet of electric Kekes, we aim to make every journey
          a step towards a greener future, reducing emissions and improving air
          quality in our cities
        </p>
      </div>
    </section>
  );
};

export default Mission;

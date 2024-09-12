import React from "react";
import Heading from "./Heading";
import { mission } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-14 lg:py-[7.5rem] bg-eco-green-prime">
      <div className="home-pad">
        <Heading
          introTitle="Our Vision"
          introClass="text-base-white mission"
          title={mission.title}
          tclass="text-base-white font-josefin"
          description={mission.desc}
          dclass="!text-base-white text-base md:text-xl lg:text-2xl mt-4"
          className="max-w-[894px]"
        />
      </div>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 3 }}
        className="px-3 mt-20 md:h-[810px] overflow-hidden"
      >
        <img src="/map.svg" alt="map" className="" />
      </motion.div>

      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{once: true}}
        className="mt-14 max-w-[933px] mx-auto"
      >
        <p className="text-center text-xs md:text-xl lg:text-2xl text-base-white font-montserrat">
          By expanding our fleet of electric Kekes, we aim to make every journey
          a step towards a greener future, reducing emissions and improving air
          quality in our cities
        </p>
      </motion.div>
    </section>
  );
};

export default Mission;

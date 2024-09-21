import React from "react";
import Heading from "../../components/shared/Heading";
import { mission } from "../../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission" className="bg-eco-green py-10">
      <div className="home-pad">
        <Heading
          introTitle="Our Vision"
          introClass="text-base-white mission"
          title={mission.title}
          tclass="text-base-white font-josefin"
          description={mission.desc}
          dclass="mission-desc"
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
        <p className="mission-bottom-text">
          By expanding our fleet of electric Kekes, we aim to make every journey
          a step towards a greener future, reducing emissions and improving air
          quality in our cities
        </p>
      </motion.div>
    </section>
  );
};

export default Mission;

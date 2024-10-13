import { mission } from "@/constants";
import { motion } from "framer-motion";
import Heading from "@/components/Heading";

const Mission = () => {
  return (
    <section id="mission" className="bg-basic py-10">
      <div className="home-pad">
        <Heading
          introTitle="Our Vision"
          introClass="text-base-white mission"
          title={mission.title}
          tclass="page-brief__title title--light"
          description={mission.desc}
          dclass="page-brief__desc !text-neutral"
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
        viewport={{ once: true }}
        className="mt-14 max-w-[933px] mx-auto px-4"
      >
        <p className="mission-bottom-text">{mission.statement}</p>
      </motion.div>
    </section>
  );
};

export default Mission;

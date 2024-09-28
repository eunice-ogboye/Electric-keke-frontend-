import { motion } from "framer-motion";

const Testimony = ({ index, currentTestimony, name, testimony, location, initial, animate }) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      className={`testimony ${index !== currentTestimony && "absolute"}`}
    >
      <p className="testimony-paragraph">{testimony}</p>

      <div className="mt-6 text-center md:text-left">
        <p className="testimony-data">{name}</p>
        <p className="testimony-data">{location}</p>
      </div>
    </motion.div>
  );
};

export default Testimony;

import { flexibility_text } from "../../constants";
import { motion } from "framer-motion";

const Flexibility = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{duration: 3}}
      className="flexible"
    >
      <h2 className="text-eco-green font-bold text-[2rem]">Flexibility</h2>
      <p className="text-eco-neutral-prime font-montserrat text-base md:text-2xl">
        {flexibility_text}
      </p>
    </motion.div>
  );
};

export default Flexibility;

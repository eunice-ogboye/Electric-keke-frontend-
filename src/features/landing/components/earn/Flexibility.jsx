import Heading from "@/components/Heading";
import { flexibility_text } from "@/constants";
import { motion } from "framer-motion";

const Flexibility = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 3 }}
      className="flexible"
    >
      <Heading
        title="Flexibility"
        tclass="text-basic font-bold text-[2rem]"
        description={flexibility_text}
        dclass="text-neutral-500 font-montserrat text-base md:text-2xl"
      />
    </motion.div>
  );
};

export default Flexibility;

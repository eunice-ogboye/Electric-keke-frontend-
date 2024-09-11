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
        At EcoRide, we understand the importance of work-life balance. That is
        why we offer flexible working hours, allowing you to choose your own
        schedule. whether you prefer to drive during the day, night, or just
        weekends, the choice is entirely yours.
      </p>
    </motion.div>
  );
};

export default Flexibility;

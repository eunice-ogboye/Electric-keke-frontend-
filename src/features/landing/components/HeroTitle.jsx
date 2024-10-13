import { motion } from "framer-motion";

const HeroTitle = ({ type }) => {
  return (
    <>
      {type === "main" && (
        <motion.h1
          initial={{
            x: -2000,
          }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
          // id="title"
          className="hero-title title-transform"
        >
          Eco-Friendly{" "}
          <div className="relative inline-block ">
            <motion.img
              initial={{ x: 4000, scale: 0 }}
              animate={{ x: 0, scale: 1.35 }}
              transition={{ duration: 0.75 }}
              src="/circle-out.svg"
              alt="circle"
              className="absolute size-full scale-125 animate-image block"
            />
            <span className="text-basic">Rides</span>
          </div>{" "}
          & Swift <span className="text-basic">Deliveries</span> at Your
          Fingertips
        </motion.h1>
      )}

      {type === "about" && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "circOut" }}
          id="title"
          className="hero-title max-w-[1076px] mx-auto title-opacity"
        >
          About Eco-Ride: <span className="text-basic">Our</span> Mission &{" "}
          <span className="text-basic">Vision</span>
        </motion.h1>
      )}

      {type === "earn" && (
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "circOut" }}
          id="title"
          className="hero-title max-w-[1076px] mx-auto title-opacity"
        >
          Drive Green, <span className="text-basic">Earn More</span> Join the{" "}
          <br />
          Eco-Ride <span className="text-basic">Team</span> Today
        </motion.h1>
      )}

      {type === "support" && (
        <motion.h1
          initial={{
            x: 2000,
          }}
          animate={{ x: 0 }}
          transition={{ duration: 0.75 }}
          id="title"
          className="hero-title title-transform"
        >
          Help & Support Center
        </motion.h1>
      )}
    </>
  );
};

export default HeroTitle;

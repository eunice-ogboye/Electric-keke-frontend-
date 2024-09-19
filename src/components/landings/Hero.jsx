import { hero_descriptions } from "../../constants";
import React from "react";
import HeroCta from "./HeroCta";
import { motion } from "framer-motion";

const Hero = ({ type = "main" }) => {
  return (
    <div className="hero">
      <div className="hero-board">
        <div
          className={`${type === "main" && "max-w-[1160px]"} ${
            type === "earn" && "max-w-[1193px]"
          } ${type === "support" && "max-w-[1109px]"}`}
        >
          {type === "main" && (
            <motion.h1
              initial={{
                x: -2000,
              }}
              animate={{ x: 0 }}
              transition={{ duration: 0.75 }}
              id="title"
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
                <span className="text-eco-green">Rides</span>
              </div>{" "}
              & Swift <span className="text-eco-green">Deliveries</span> at Your
              Fingertips
            </motion.h1>
          )}

          {type === "about" && (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "circOut" }}
              id="title"
              className="hero-title max-w-[1076px] mx-auto title-opacity px-20"
            >
              About Eco-Ride: <span className="text-eco-green">Our</span>{" "}
              Mission & <span className="text-eco-green">Vision</span>
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
              Drive Green, <span className="text-eco-green">Earn More</span>{" "}
              Join the <br />
              Eco-Ride <span className="text-eco-green">Team</span> Today
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

          {type !== "about" && (
            <div className="mt-6 px-[30px]">
              <p className="hero-description">{hero_descriptions[type]}</p>
              <HeroCta type={type} />
            </div>
          )}
        </div>
      </div>

      <div className="hero-img">
        <img
          src={
            type === "main"
              ? "/hero_bg1.png"
              : type === "about"
              ? "/hero/about_hero.png"
              : type === "earn"
              ? "/earn_hero_bg.png"
              : "/support_bg.png"
          }
          alt="hero_background"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;

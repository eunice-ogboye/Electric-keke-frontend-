import React from "react";
import HeroCta from "../HeroCta";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".hero-title", {
      opacity: 0,
      duration: 3
    })
  }, [])
  return (
    <div className="hero">
      <div className="hero-board">
        <div className="pt-[231px] max-w-[1193px] mx-auto pb-[146px]">
          <h1 className="hero-title max-w-[1076px] mx-auto">
            Drive Green, <span className="text-eco-green">Earn More</span> Join the <br />
            Eco-Ride <span className="text-eco-green">Team</span>  Today
          </h1>
          <div className="mt-6">
            <p className="hero-description">
              By joining us as a driver, you will enjoy flexible working hours,
              competitive earnings, and the opportunity to contribute to a
              greener enviroment. Drive with us and be part of eco-friendly
              revolution.
            </p>
            <HeroCta />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src="/earn_hero_bg.png"
          alt="hero_background"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;

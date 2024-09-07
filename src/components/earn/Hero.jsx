import React from "react";
import HeroCta from "../HeroCta";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-board">
        <div className="pt-[231px] max-w-[1193px] mx-auto pb-[146px]">
          <h1 className="hero-title max-w-[1076px] mx-auto">
            Drive Green, Earn More Join the <br />
            Eco-Ride Team Today
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

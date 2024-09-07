import React from "react";
import HeroCta from "../HeroCta";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-board">
        <div className="pt-[234px] max-w-[1169px] mx-auto pb-[146px]">
          <h1 className="hero-title">
            Eco-Friendly{" "}
            <div className="relative inline-block ">
              <img
                src="/circle-out.svg"
                alt="circle"
                className="absolute size-full scale-125 animate-image block"
              />
              <span className="text-eco-green">Rides</span>
            </div>{" "}
            & Swift <span className="text-eco-green">Deliveries</span> at Your
            Fingertips
          </h1>

          <div className="mt-6 px-[30px]">
            <p className="hero-description">
              Join the Green Movement with Our Electric Keke: Real-time
              tracking, affordable pricing—making your life easier and the
              planet healthier.
            </p>
            <HeroCta />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src="/hero_bg1.png"
          alt="hero_background"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;

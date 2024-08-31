import React from "react";
import { Button } from "./ui/button";
import { hero_description } from "../constants";

const HeroCta = () => {
  return (
    <div className="flex-center gap-2 mt-6">
      <Button className="primary-btn rounded-full">Book A Ride</Button>
      <Button className="secondary-btn rounded-full">Request A Delivery</Button>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-board">
        <div>
          <h1 className="hero-title">
            Eco-Friendly{" "}
            <div className="relative inline-block ">
              <img
                src="/circle-out.svg"
                alt="circle"
                className="absolute size-full scale-125"
              />
              Rides
            </div>{" "}
            & Swift Deliveries at Your Fingertips
          </h1>

          <div className="px-7 mt-6">
            <p className="hero-description">{hero_description}</p>
            <HeroCta />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src="/hero_bg1.png"
          alt="hero"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;

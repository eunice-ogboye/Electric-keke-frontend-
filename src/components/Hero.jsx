import { hero_descriptions } from "../constants";
import React from "react";
import HeroCta from "./HeroCta";

const Hero = ({ type = "main" }) => {
  return (
    <div className="hero">
      <div className="hero-board">
        <div
          className={`${type === "main" && "pt-[33px] md:pt-[234px] max-w-[1169px]"} ${
            type === "earn" && "pt-[33px] md:pt-[231px] max-w-[1193px]"
          } ${
            type === "support" && "pt-[33px] md:pt-[248px] max-w-[1109px]"
          }  mx-auto pb-[108px] md:pb-[146px]`}
        >
          {type === "main" && (
            <h1 id="title" className="hero-title title-transform">
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
          )}

          {type === "earn" && (
            <h1
              id="title"
              className="hero-title max-w-[1076px] mx-auto title-opacity"
            >
              Drive Green, <span className="text-eco-green">Earn More</span>{" "}
              Join the <br />
              Eco-Ride <span className="text-eco-green">Team</span> Today
            </h1>
          )}

          {type === "support" && (
            <h1 id="title" className="hero-title title-transform">
              Help & Support Center
            </h1>
          )}

          <div className="mt-6 px-[30px]">
            <p className="hero-description">{hero_descriptions[type]}</p>
            <HeroCta type={type} />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src={
            type === "main"
              ? "/hero_bg1.png"
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

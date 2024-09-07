import React from "react";
import HeroCta from "../HeroCta";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.from('.hero-title', {
      x: 2000,
      duration: 2
    })
  }, [])
  return (
    <div className="hero">
      <div className="hero-board">
        <div className="pt-[248px] max-w-[1109px] mx-auto pb-[146px]">
          <h1 className="hero-title">Help & Support Center</h1>
          <div className="mt-6">
            <p className="hero-description">
              Have a question or need assistance? Our support team is ready to
              help you with any issue, big or smal
            </p>
            <HeroCta />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src="/support_bg.png"
          alt="hero_background"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;

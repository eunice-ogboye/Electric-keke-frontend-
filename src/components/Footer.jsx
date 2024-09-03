import { footer_note, socials } from "../constants";
import React from "react";

const Footer = () => {
  return (
    <footer className="home-pad py-10 md:py-[5.9rem] bg-neutral-0">
      <div>
        <div className="md:flex items-start justify-between border-b px-2 py-6">

          <div className="w-full md:max-w-[364px]">
            <div className="w-fit mx-auto md:mx-0">
              <img src="/logo2.svg" alt="logo" />
            </div>
            <p className="text-base-white text-base mt-6 text-center md:text-left">{footer_note}</p>
          </div>

          <div className="flex items-start justify-center my-5 md:my-0 gap-10">
            <div className="text-base-white">
              <h3>Explore</h3>
              <ul className="mt-6 space-y-4">
                <li>About Us</li>
                <li>Earn With Us</li>
                <li>Mission</li>
                <li>Services</li>
              </ul>
            </div>

            <div className="text-base-white">
              <h3>Legal</h3>
              <ul className="mt-6 space-y-4">
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>

          <div className="text-base-white">
            <h3 className="text-center md:text-left">social media</h3>
            <ul className="flex justify-center md:justify-start items-center gap-5 mt-5">
              {socials.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="size-[50px] bg-pgreen-1 flex-center rounded-full"
                  >
                    <img src={item.icon} alt={item.title} />
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <p className="text-base text-center mt-2 text-base-white">
          All rights reserved. Copyright © 2024 | Eco-Ride
        </p>
      </div>
    </footer>
  );
};

export default Footer;

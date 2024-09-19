import { footer_note, socials } from "../../constants";
import React from "react";
import Logo from "../Logo";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer className="home-pad py-10 md:py-[5.9rem] bg-eco-neutral overflow-hidden">
      <div>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:flex items-start justify-between border-b px-2 py-6 footer-main"
        >
          <div className="w-full md:max-w-[364px]">
            <Logo logoClassName="w-[72px] h-[39px]" />
            <p className="text-base-white text-base mt-6">{footer_note}</p>
          </div>

          <div className="flex items-start flex-col md:flex-row my-5 md:my-0 gap-14 md:gap-10">
            <div className="text-base-white">
              <h3 className="font-bold">Explore</h3>
              <ul className="mt-6 space-y-4">
                <li>
                  <Link to="#about">About Us</Link>
                  {/* <a href="#about">About Us</a> */}
                </li>
                <li>
                  <Link to="/earn-with-us">Earn With Us</Link>
                </li>
                <li>
                  <Link to="/#mission">Mission</Link>
                  {/* <a href="#mission">Mission</a> */}
                </li>
                <li>
                  <Link to="/#services">Services</Link>
                  {/* <a href="#services">Services</a> */}
                </li>
              </ul>
            </div>

            <div className="text-base-white">
              <h3 className="font-bold">Legal</h3>
              <ul className="mt-6 space-y-4">
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </div>
          </div>

          <div className="text-base-white mt-14 md:mt-0">
            <h3 className="font-bold">social media</h3>
            <ul className="flex items-center gap-5 mt-5">
              {socials.map((item) => {
                return (
                  <div
                    key={item.title}
                    className="size-[50px] bg-eco-green-social flex-center rounded-full"
                  >
                    <img src={item.icon} alt={item.title} />
                  </div>
                );
              })}
            </ul>
          </div>
        </motion.div>
        <motion.p
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          className="text-base text-center mt-6 text-base-white footer-copywright"
        >
          All rights reserved. Copyright © 2024 | Eco-Ride
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;

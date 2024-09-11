import React from "react";
import {
  about_descriptions,
  about_titles,
  earn_requirements,
  services,
} from "../constants";
import { Flexibility, Heading } from ".";
import Btn from "./Btn";
import { motion } from "framer-motion";

const About = ({ type = "main" }) => {
  return (
    <section className="home-pad bg-base-white overflow-hidden">
      <div className={`min-h-[696px] ${type === "main" && "flex-center"}`}>
        {type === "earn" && <Flexibility />}

        <div className="min-h-[526px] md:flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            id="brief"
            className="about-brief"
          >
            {type === "main" ? (
              <>
                <Heading
                  className="w-full"
                  introTitle="About Us"
                  introClass="text-eco-green"
                  title={about_titles.one}
                  tclass="text-eco-neutral font-josefin"
                  description={about_descriptions.one}
                  dclass="mt-5 mb-10 text-base md:text-eiteen"
                  type="about"
                />
                <div>
                  <Btn text="Learn More" />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-[2rem] font-bold text-center md:text-left font-josefin">
                  Requirements
                </h2>
                <ul className="list-disc pl-4 mt-7">
                  {earn_requirements.map((item, index) => (
                    <li
                      key={index}
                      className="text-base md:text-2xl text-eco-neutral-prime font-montserrat"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            id="about-image"
            className="about-image"
          >
            <img
              src={type === "main" ? "/about.png" : "/earn_about_bg.png"}
              alt="about keke"
              className="size-full object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {type === "main" && (
        <div className="py-20 overflow-hidden">
          <Heading
            introTitle="Service"
            title={about_titles.two}
            tclass="max-w-[623px] mx-auto text-center border service-heading font-josefin"
            description={about_descriptions.two}
            dclass="mt-3 md:mt-7 text-center text-base md:text-eiteen service-desc"
            introClass="mx-auto text-eco-green service-heading"
            type="about"
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            initialp={{ opacity: 0, x: -200 }}
            animatep={{ opacity: 1, x: 0 }}
          />

          <div className="service-board">
            {services.map((item) => (
              <div key={item.title} className="service">
                <div className="flex flex-col items-center text-center">
                  <div className="size-[65px] flex-center bg-eco-green-faint rounded-full">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <div className="mt-[21px] md:mt-[22px] lg:mt-8">
                    <h2 className="service-title">{item.title}</h2>
                    <p className="font-montserrat text-xs md:text-base mt-[5px] lg:mt-2 text-eco-neutral-prime">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

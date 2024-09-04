import React, { useState } from "react";
import Heading from "./Heading";
import {
  about_descriptions,
  about_titles,
  earn_requirements,
  services,
} from "../constants";
import { Flexibility } from ".";
import { useGlobalContext } from "../context";
import Btn from "./Btn";

const About = () => {
  const {
    globalState: { homePage },
  } = useGlobalContext();

  return (
    <section className="home-pad bg-base-white">
      <div className={`min-h-[696px] ${homePage === "main" && "flex-center"}`}>
        {homePage === "earn" && <Flexibility />}

        <div className="min-h-[526px] md:flex items-center">
          <div className="w-full tablet:w-6/12">
            {homePage === "main" ? (
              <>
                <Heading
                  className="w-full"
                  introTitle="About Us"
                  introClass="text-eco-green mx-auto md:mx-0"
                  title={about_titles.one}
                  tclass="text-center md:text-left text-eco-neutral"
                  description={about_descriptions.one}
                  dclass="mt-5 mb-10 text-eiteen text-center md:text-left"
                  type="about"
                />
                <div className="text-center md:text-left">
                  <Btn text="Learn More" />
                </div>
              </>
            ) : (
              <>
                <h2 className="text-[2rem] font-bold text-center md:text-left">
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
          </div>

          <div className="md:w-[33rem] md:h-[454px]">
            <img
              src={homePage === "main" ? "/about.png" : "/earn_about_bg.png"}
              alt="about keke"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      {homePage === "main" && (
        <div className="py-20 overflow-hidden">
          <Heading
            introTitle="Service"
            title={about_titles.two}
            tclass="max-w-[623px] mx-auto text-center border"
            description={about_descriptions.two}
            dclass="mt-7 text-center text-eiteen"
            introClass="mx-auto text-eco-green"
            type="about"
          />

          <div className="service-board">
            {services.map((item) => (
              <div key={item.title} className="service">
                <div className="flex flex-col items-center text-center">
                  <div className="size-[65px] flex-center bg-pgreen-1 rounded-full">
                    <img src={item.icon} alt={item.title} />
                  </div>

                  <div className="mt-8">
                    <h2 className="service-title">{item.title}</h2>
                    <p className="font-montserrat text-base mt-2 text-eco-neutral-prime">{item.desc}</p>
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

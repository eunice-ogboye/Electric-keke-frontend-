import React from "react";
import Heading from "./Heading";
import { about_descriptions, about_titles, services } from "../constants";

const About = () => {
  return (
    <section className="home-pad bg-base-white">
      <div className="min-h-[696px] flex items-center">
        <Heading
          introTitle="About Us"
          title={about_titles.one}
          description={about_descriptions.one}
          className="w-full tablet:w-6/12"
          dclass="mt-5 mb-10"
          type="about"
        />

        <div className="w-[33rem] h-[454px]">
          <img
            src="/about.png"
            alt="about keke"
            className="size-full object-cover object-center"
          />
        </div>
      </div>
      <div className="py-20">
        <Heading
          introTitle="Service"
          title={about_titles.two}
          tclass="max-w-[623px] mx-auto text-center border"
          description={about_descriptions.two}
          dclass="mt-7 text-center"
          introClass="mx-auto"
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
                  <p className="text-neutral text-base mt-2">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

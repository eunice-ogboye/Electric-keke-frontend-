import React from "react";
import { Flexibility } from "..";
import { earn_requirements } from "../../constants";
import { animateFromPosition } from "../../animate";
import { useGSAP } from "@gsap/react";

const AboutEarn = () => {
  useGSAP(() => {
    animateFromPosition(".brief", {
      x: -2000,
      opacity: 0,
      scrollTrigger: {
        trigger: ".brief",
        start: 'top center'
      },
    });
    animateFromPosition('.about-image', {
      x: 2000,
      opacity: 0,
      scrollTrigger: {
        trigger: '.about-image',
        start: "top center"
      }
    })
  }, []);
  return (
    <section className="home-pad bg-base-white overflow-hidden">
      <div className={`min-h-[696px]`}>
        <Flexibility />

        <div className="min-h-[526px] md:flex items-center">
          <div className="w-full tablet:w-6/12 brief">
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
          </div>

          <div className="md:w-[33rem] md:h-[454px] about-image">
            <img
              src="/earn_about_bg.png"
              alt="about keke"
              className="size-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEarn;

import React from "react";
import Heading from "./Heading";
import { testimonial_title, testimonies } from "../constants";
import Direction from "./Direction";

const Testimonial = () => {
  return (
    <section className="home-pad py-[7.5rem]">
      <div>
        <Heading
          introTitle="Testimonial"
          introClass="mx-auto text-pgreen"
          title={testimonial_title}
          className="text-center"
          type="about"
        />

        <div className="mt-10">
          <div className="flex items-center">
            {testimonies.map((item) => {
              return (
                <div className="w-[409px] h-[440px]">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="rounded-normal size-full"
                  />
                </div>
              );
            })}
            <div className="border tablet:max-w-[639px] laptop:max-w-[739px] ml-10">
              {testimonies.map((item) => {
                return (
                  <div className="" key={item.name}>
                    <p className="text-neutral text-2xl">{item.testimony}</p>
                    <div className="mt-6">
                      <p className="text-base text-neutral">{item.name}</p>
                      <p className="text-base text-neutral">{item.location}</p>
                    </div>
                  </div>
                );
              })}
              <Direction />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

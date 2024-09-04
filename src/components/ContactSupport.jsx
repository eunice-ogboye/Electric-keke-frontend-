import { care_socials } from "../constants";
import React from "react";

const ContactSupport = () => {
  return (
    <div className="space-y-[50px] w-full max-w-[1200px]">
      <div className="flex items-center gap-[21px] py-2 border-b border-black">
        <div>
          <img src="/headphone.svg" alt="headphone" />
        </div>

        <p className="font-bold text-2xl font-montserrat">Customer Services</p>
      </div>
      {care_socials.map((item, index) => {
        return (
          <div
            className="flex items-center gap-[21px] py-2 border-b border-black"
            key={index}
          >
            <div>
              <img src={item.icon} alt="headphone" />
            </div>

            <p className="font-bold text-2xl font-montserrat">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactSupport;

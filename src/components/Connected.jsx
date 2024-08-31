import React, { useState } from "react";
import Heading from "./Heading";
import { connected } from "../constants";
import { Button } from "./ui/button";

const Connected = () => {
  const [homePage, setHomePage] = useState("earn");
  return (
    <section>
      <div className="min-h-[704px] flex-center bg-black/60 relative">
        {homePage === "earn" && (
          <div className="size-full min-h-[704px] absolute top-0 left-0 -z-10">
            <img
              src="/earn_connected_bg.png"
              alt="earn_connected"
              className="size-full object-center object-cover"
            />
          </div>
        )}
        <div className="max-w-[894px]">
          <Heading
            className="text-center text-base-white"
            title={connected.title}
            description={connected.desc}
            dclass="mt-6 text-2xl"
            type="about"
          />

          <div className="px-48 mt-10">
            <form className="bg-base-white flex items-center justify-between py-6 px-5 rounded-lg">
              <div className="flex items-center border">
                <div>
                  <img src="/email.svg" alt="email" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-[203px] ml-2 text-eiteen bg-none border-none outline-none"
                />
              </div>
              <Button size="sm" className="primary-btn">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connected;

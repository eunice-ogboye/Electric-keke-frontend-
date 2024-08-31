import React from "react";
import Heading from "./Heading";
import { connected } from "../constants";
import { Button } from "./ui/button";

const Connected = () => {
  return (
    <section>
      <div className="min-h-[704px] flex-center bg-black/60">
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

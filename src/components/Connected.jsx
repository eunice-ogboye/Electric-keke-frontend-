import Heading from "./Heading";
import { connected } from "../constants";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const Connected = ({ type = "main" }) => {
  return (
    <section>
      <div className="h-[457px] md:min-h-[704px] flex-center bg-black/60 relative home-pad overflow-hidden">
        <div className="size-full h-[457px] md:min-h-[704px] absolute top-0 left-0 -z-10">
          <img
            src={
              type === "main"
                ? "/main_connected_bg.png"
                : "/earn_connected_bg.png"
            }
            alt="earn_connected"
            className="size-full object-center object-cover"
          />
        </div>
        <div className="max-w-[894px]">
          <Heading
            className="w-full text-center text-eco-white connect-heading"
            title={connected.title}
            tclass="font-josefin"
            description={connected.desc}
            dclass="mt-6 text-base md:text-2xl"
            type="about"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
          />

          <motion.form
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once: true}}
            className="bg-base-white flex items-center justify-between py-2 px-4 rounded-lg max-w-[534px] mt-6 mx-auto connect-form"
          >
            <div className="flex items-center">
              <div>
                <img src="/email.svg" alt="email" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-[200px] md:w-[264px] ml-2 text-sm md:text-eiteen bg-none border-none outline-none font-montserrat"
              />
            </div>
            <Button className="w-[135px] h-12 md:h-[56px] md:w-[162px] primary-btn">
              Subscribe
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Connected;

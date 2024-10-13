import { motion } from "framer-motion";
import { connected } from "@/constants";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";

const Connected = ({ type = "main" }) => {
  return (
    <section id="connect">
      <div className="connect">
        <div className="connect__bg">
          <img
            src={
              type === "main"
                ? "/main_connected_bg.png"
                : "/earn_connected_bg.png"
            }
            alt="earn_connected"
            className="image"
          />
        </div>
        <div className="max-w-[894px]">
          <Heading
            className="w-full text-center text-eco-white"
            title={connected.title}
            tclass="page-brief__title title--light"
            description={connected.desc}
            dclass="page-brief__desc !text-neutral"
            type="about"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
          />

          <motion.form
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once: true}}
            className="subscribe-form"
          >
            <div className="flex items-center">
              <div>
                <img src="/email.svg" alt="email" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="subscribe-input"
              />
            </div>
            <Button className="subscribe-btn">
              Subscribe
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Connected;

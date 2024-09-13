import Heading from "./Heading";
import { testimonial_title, testimonies } from "../constants";
import Direction from "./Direction";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Testimonial = ({ type = "main" }) => {
  const [tIndex, setTIndex] = useState(0);

  useEffect(() => {
    const lastTestimony = testimonies[type].length - 1;
    if (tIndex > lastTestimony) {
      setTIndex(0);
    }
    if (tIndex < 0) {
      setTIndex(lastTestimony);
    }
  }, [tIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTIndex((prev) => prev + 1);
    }, 8000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  const handleClick = (type) => {
    type === "increment"
      ? setTIndex((prev) => prev + 1)
      : setTIndex((prev) => prev - 1);
  };

  return (
    <section className="home-pad pt-8 py-10 md:py-[7.5rem] bg-base-white overflow-hidden">
      <div>
        <Heading
          introTitle="Testimonial"
          introClass="mx-auto text-pgreen"
          title={testimonial_title[type]}
          tclass="font-josefin"
          className="text-center testimonial-heading"
          type="about"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        />

        <div className="mt-10">
          <div className="flex flex-col md:flex-row items-center">
            <AnimatePresence>
              {/* {testimonies[type][tIndex]} */}
              {testimonies[type].map((item, index) => {
                const initial = { scale: 0, opacity: 0 };
                let animate;
                if (index === tIndex) {
                  animate = {
                    scale: 1,
                    opacity: 1,
                  };
                }
                return (
                  <motion.div
                    initial={initial}
                    whileInView={animate}
                    exit={{
                      x: 200,
                    }}
                    transition={{ type: "spring" }}
                    className={`w-full h-[304px] md:w-[409px] md:h-[440px] mt-6 md:mt-0 ${
                      index !== tIndex && "absolute -z-50"
                    }`}
                    key={item.name}
                  >
                    <img
                      src={item.photo}
                      alt={item.name}
                      className="rounded-normal size-full object-cover object-center"
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <motion.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ type: "spring" }}
              className="w-full tablet:max-w-[639px] laptop:max-w-[739px] mt-6 md:mt-0 md:ml-10 order-first md:order-last"
            >
              <AnimatePresence>
                {testimonies[type].map((item, index) => {
                  const initial = { scale: 0 };
                  let animate;
                  if (index === tIndex) {
                    animate = {
                      scale: 1,
                    };
                  }
                  return (
                    <motion.div
                      initial={initial}
                      whileInView={animate}
                      className={`testimony ${index !== tIndex && "absolute"}`}
                      key={item.name}
                    >
                      <p className="text-neutral text-base md:text-2xl text-center md:text-left">
                        {item.testimony}
                      </p>
                      <div className="mt-6 text-center md:text-left">
                        <p className="text-xs md:text-base md:-eco-neutral-prime font-montserrat">
                          {item.name}
                        </p>
                        <p className="text-xs md:text-base text-eco-neutral-prime font-montserrat">
                          {item.location}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <Direction handleClick={handleClick} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

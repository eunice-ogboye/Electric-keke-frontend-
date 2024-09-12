import Heading from "./Heading";
import { testimonial_title, testimonies } from "../constants";
import Direction from "./Direction";
import { AnimatePresence, motion } from "framer-motion";

const Testimonial = ({ type = "main" }) => {
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
          <div className="flex flex-col md:flex-row items-center ">
            <AnimatePresence>
              {testimonies[type].map((item) => {
                return (
                  <motion.div
                    initial={{ x: -200 }}
                    whileInView={{ x: 0 }}
                    transition={{type: 'spring'}}
                    className="w-full h-[304px] md:w-[409px] md:h-[440px] mt-6 md:mt-0"
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
              transition={{type: 'spring'}}
              className="w-full tablet:max-w-[639px] laptop:max-w-[739px] mt-6 md:mt-0 md:ml-10 order-first md:order-last"
            >
              <AnimatePresence>
                {testimonies[type].map((item) => {
                  return (
                    <div className="testimony" key={item.name}>
                      <p className="text-neutral text-base md:text-2xl text-center md:text-left font-montserrat">
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
                    </div>
                  );
                })}
              </AnimatePresence>
              <Direction />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

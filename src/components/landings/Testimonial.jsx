import Heading from "../../components/shared/Heading";
import { testimonial_title, testimonies } from "../../constants";
import Direction from "../shared/Direction";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Testimonial = ({ type = "main" }) => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  useEffect(() => {
    const lastTestimony = testimonies[type].length - 1;
    if (currentTestimony > lastTestimony) {
      setCurrentTestimony(0);
    }
    if (currentTestimony < 0) {
      setCurrentTestimony(lastTestimony);
    }
  }, [currentTestimony]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prev) => prev + 1);
    }, 8000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  const nextTestimony = (type) => {
    type === "increment"
      ? setCurrentTestimony((prev) => prev + 1)
      : setCurrentTestimony((prev) => prev - 1);
  };

  return (
    <section className="testimony-container">
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
          <div className="testimonials-display">
            <AnimatePresence>
              {testimonies[type].map((item, index) => {
                const initial = { scale: 0, opacity: 0 };
                let animate;
                if (index === currentTestimony) {
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
                    className={`testi-photo ${
                      index !== currentTestimony && "absolute -z-50"
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
              transition={{ type: "spring", damping: 15, stiffness: 20 }}
              className="testimonies"
            >
              <AnimatePresence>
                {testimonies[type].map((item, index) => {
                  const initial = { scale: 0 };
                  let animate;
                  if (index === currentTestimony) {
                    animate = {
                      scale: 1,
                    };
                  }
                  return (
                    <motion.div
                      initial={initial}
                      whileInView={animate}
                      className={`testimony ${
                        index !== currentTestimony && "absolute"
                      }`}
                      key={item.name}
                    >
                      <p className="testimony-paragraph">{item.testimony}</p>

                      <div className="mt-6 text-center md:text-left">
                        <p className="testimony-data">{item.name}</p>
                        <p className="testimony-data">{item.location}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              <Direction handleClick={nextTestimony} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

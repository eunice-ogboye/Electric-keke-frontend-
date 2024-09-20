import Heading from "../../components/shared/Heading";
import { testimonial_title, testimonies } from "../../constants";
import { useEffect, useState } from "react";
import TestimonialDisplay from "./TestimonialDisplay";

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
          <TestimonialDisplay type={type} />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

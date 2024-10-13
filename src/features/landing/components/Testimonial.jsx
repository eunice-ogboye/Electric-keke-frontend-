import { testimonial_title } from "../../../constants";
import TestimonialDisplay from "./TestimonialDisplay";
import Heading from "@/components/Heading";

const Testimonial = ({ type = "main" }) => {
  return (
    <section className="testimony-container">
      <div>
        <Heading
          introTitle="Testimonial"
          introClass="mx-auto text-basic"
          title={testimonial_title[type]}
          tclass="page-brief__title"
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

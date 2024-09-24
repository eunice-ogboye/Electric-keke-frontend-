import Heading from "../../components/shared/Heading";
import { testimonial_title } from "../../constants";
import TestimonialDisplay from "./TestimonialDisplay";

const Testimonial = ({ type = "main" }) => {

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

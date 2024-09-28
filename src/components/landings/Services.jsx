import { about_descriptions, about_titles, services } from "../../constants";
import Heading from "../shared/Heading";
import RegularList from "../shared/RegularList";
import Service from "./Service";

const Services = ({ type = "main" }) => {
  return (
    <div className="py-20 overflow-hidden home-pad bg-eco-white" id="services">
      <Heading
        introTitle={type === "main" && "Service"}
        title={type === "main" ? about_titles.two : "What We Offer"}
        tclass="max-w-[623px] mx-auto text-center service-heading font-josefin"
        description={type === "main" && about_descriptions.two}
        dclass="mt-3 md:mt-7 text-center text-base md:text-xl lg:text-2xl service-desc"
        introClass="mx-auto text-eco-green service-heading"
        type="about"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        initialp={{ opacity: 0, x: -200 }}
        animatep={{ opacity: 1, x: 0 }}
      />

      <div className="service-board">
        <RegularList
          itemsToDisplay={services}
          resourceName="service"
          itemComponent={Service}
        />
      </div>
    </div>
  );
};

export default Services;

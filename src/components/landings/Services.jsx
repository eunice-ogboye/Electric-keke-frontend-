import { about_descriptions, about_titles, services } from "../../constants";
import Heading from "../shared/Heading";
import RegularList from "../shared/RegularList";
import Service from "./Service";

const Services = ({ type = "main" }) => {
  return (
    <div
      className="py-10 tablet:py-20 laptop:py-32 overflow-hidden home-pad bg-eco-white"
      id="services"
    >
      <Heading
        introTitle={type === "main" && "Service"}
        title={type === "main" ? about_titles.two : "What We Offer"}
        tclass="max-w-[623px] mx-auto text-center service-heading font-josefin"
        description={type === "main" && about_descriptions.two}
        dclass="mt-3 md:mt-7 text-center text-base tablet:text-xl laptop:text-2xl"
        introClass="mx-auto text-eco-green"
        type="about"
        initial={{ y: type === "main" ? -100 : -50, opacity: 0 }}
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

import { about_descriptions, about_titles, services } from "../../constants";
import RegularList from "../shared/_design-pattern/RegularList";
import Heading from "../shared/Heading";
import Service from "./Service";

const Services = ({ type = "main" }) => {
  return (
    <section className="service" id="services">
      <Heading
        introTitle={type === "main" && "Service"}
        title={type === "main" ? about_titles.two : "What We Offer"}
        tclass="service__title"
        description={type === "main" && about_descriptions.two}
        dclass="service__desc"
        introClass="mx-auto text-eco-green"
        type="about"
        initial={{ y: type === "main" ? -100 : -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        initialp={{ opacity: 0, x: -200 }}
        animatep={{ opacity: 1, x: 0 }}
      />

      <div className="services">
        <RegularList list={services} component={Service} />
      </div>
    </section>
  );
};

export default Services;

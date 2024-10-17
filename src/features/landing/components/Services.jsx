import { about_descriptions, about_titles, services } from "@/constants";
import Heading from "@/components/Heading";
import Service from "./Service";
import RegularList from "@/components/_design-patterns/RegularList";

const Services = ({ type = "main" }) => {
  return (
    <section className="service" id="services">
      <Heading
        introTitle={type === "main" && "Service"}
        title={type === "main" ? about_titles.two : "What We Offer"}
        tclass="page-brief__title service__title"
        description={type === "main" && about_descriptions.two}
        dclass="page-brief__desc service__desc"
        introClass="mx-auto text-basic"
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

import { about_descriptions, about_titles, services } from "../../constants";
import Heading from "../shared/Heading";

const Services = ({ type = "main" }) => {
  return (
    <div className="py-20 overflow-hidden home-pad" id="services">
      <Heading
        introTitle={type === "main" && "Service"}
        title={type === "main" ? about_titles.two : "What We Offer"}
        tclass="max-w-[623px] mx-auto text-center service-heading font-josefin"
        description={type === "main" && about_descriptions.two}
        dclass="mt-3 md:mt-7 text-center text-base md:text-eiteen service-desc"
        introClass="mx-auto text-eco-green service-heading"
        type="about"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        initialp={{ opacity: 0, x: -200 }}
        animatep={{ opacity: 1, x: 0 }}
      />

      <div className="service-board">
        {services.map((item) => (
          <div key={item.title} className="service">
            <div className="flex flex-col items-center text-center">
              <div className="size-[43px] md:size-[65px] flex-center bg-eco-green-faint rounded-full">
                <img src={item.icon} alt={item.title} />
              </div>

              <div className="mt-[21px] md:mt-[22px] lg:mt-8">
                <h2 className="service-title">{item.title}</h2>
                <p className="font-montserrat text-xs md:text-base mt-[5px] lg:mt-2 text-eco-neutral-prime">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

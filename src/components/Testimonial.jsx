import Heading from "./Heading";
import { testimonial_title, testimonies } from "../constants";
import Direction from "./Direction";
import { useGlobalContext } from "../context";

const Testimonial = () => {
  const {
    globalState: { homePage },
  } = useGlobalContext();

  return (
    <section className="home-pad py-[7.5rem] bg-base-white">
      <div>
        <Heading
          introTitle="Testimonial"
          introClass="mx-auto text-pgreen"
          title={testimonial_title[homePage]}
          className="text-center"
          type="about"
        />

        <div className="mt-10">
          <div className="md:flex items-center">
            {testimonies[homePage].map((item) => {
              return (
                <div className="w-full md:w-[409px] h-[440px]" key={item.name}>
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="rounded-normal size-full object-cover object-center"
                  />
                </div>
              );
            })}
            <div className="border w-full tablet:max-w-[639px] laptop:max-w-[739px] mt-6 md:mt-0 md:ml-10">
              {testimonies[homePage].map((item) => {
                return (
                  <div className="" key={item.name}>
                    <p className="text-neutral text-2xl text-center md:text-left font-montserrat">
                      {item.testimony}
                    </p>
                    <div className="mt-6 text-center md:text-left">
                      <p className="text-base text-eco-neutral-prime font-montserrat">
                        {item.name}
                      </p>
                      <p className="text-base text-eco-neutral-prime font-montserrat">
                        {item.location}
                      </p>
                    </div>
                  </div>
                );
              })}
              <Direction />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

import Heading from "./Heading";
import { connected } from "../constants";
import { Button } from "./ui/button";
import { useGlobalContext } from "../context";
import { useGSAP } from "@gsap/react";
import { animateFromPosition } from "../animate";

const Connected = () => {
  const {
    globalState: { homePage },
  } = useGlobalContext();

  useGSAP(() => {
    animateFromPosition(".connect-heading", {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".connect-heading",
        start: "top center",
      },
    });
    animateFromPosition(".connect-form", {
      y: 200,
      opacity: 0,
      scrollTrigger: {
        trigger: ".connect-form",
        start: "top center",
      },
    });
  }, []);

  return (
    <section>
      <div className="min-h-[704px] flex-center bg-black/60 relative home-pad">
        {(homePage === "main" || homePage === "earn") && (
          <div className="size-full min-h-[704px] absolute top-0 left-0 -z-10">
            <img
              src={
                homePage === "main"
                  ? "/main_connected_bg.png"
                  : "/earn_connected_bg.png"
              }
              alt="earn_connected"
              className="size-full object-center object-cover"
            />
          </div>
        )}
        <div className="max-w-[894px]">
          <Heading
            className="w-full text-center text-eco-white connect-heading"
            title={connected.title}
            description={connected.desc}
            dclass="mt-6 text-2xl"
            type="about"
          />

          <form className="bg-base-white flex items-center justify-between py-2 px-4 rounded-lg max-w-[534px] mt-6 mx-auto connect-form">
            <div className="flex items-center border">
              <div>
                <img src="/email.svg" alt="email" />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                className="w-[203px] ml-2 text-eiteen bg-none border-none outline-none font-montserrat"
              />
            </div>
            <Button className="h-[56px] w-[162px]    primary-btn">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connected;

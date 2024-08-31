import { Button } from "./ui/button";
import { hero_description } from "../constants";
import { useGlobalContext } from "../context";
import Btn from "./Btn";

const HeroCta = () => {
  const {
    globalState: { homePage },
  } = useGlobalContext();

  return (
    <div className="flex-center gap-2 mt-6">
      <Btn text={homePage === "main" ? "Book a Ride" : "Register"} />
      {homePage === "main" && <Btn text="Request For Delivery" type="secondary" />}
    </div>
  );
};

const Hero = () => {
  const {
    globalState: { homePage },
  } = useGlobalContext();

  return (
    <div className="hero">
      <div className="hero-board">
        <div>
          {homePage === "main" ? (
            <h1 className="hero-title">
              Eco-Friendly{" "}
              <div className="relative inline-block ">
                <img
                  src="/circle-out.svg"
                  alt="circle"
                  className="absolute size-full scale-125"
                />
                Rides
              </div>{" "}
              & Swift Deliveries at Your Fingertips
            </h1>
          ) : (
            <h1 className="hero-title">
              Drive Green, Earn More Join the Eco-Ride Team Today
            </h1>
          )}

          <div className="px-7 mt-6">
            <p className="hero-description">{hero_description[homePage]}</p>
            <HeroCta />
          </div>
        </div>
      </div>

      <div className="hero-img">
        <img
          src={homePage === "main" ? "/hero_bg1.png" : "/earn_hero_bg.png"}
          alt="hero_background"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;

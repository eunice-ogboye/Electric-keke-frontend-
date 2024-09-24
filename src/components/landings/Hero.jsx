import { hero_descriptions, getHeroImage } from "../../constants";
import HeroCta from "./HeroCta";
import HeroTitle from "./HeroTitle";

const Hero = ({ type = "main" }) => {
  return (
    <div className="hero">
      <div className="hero-board">
        <div
          className={`${type === "main" && "max-w-[1160px]"} ${
            type === "earn" && "max-w-[1193px]"
          } ${type === "support" && "max-w-[1109px]"}`}
        >
          <HeroTitle type={type} />

          {type !== "about" && (
            <div className="mt-6 px-[30px]">
              <p className="hero-description">{hero_descriptions[type]}</p>
              <HeroCta type={type} />
            </div>
          )}
        </div>
      </div>

      <div className="hero-img">
        <img
          src={getHeroImage(type)}
          alt="hero_background"
          loading="lazy"
          className="size-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default Hero;

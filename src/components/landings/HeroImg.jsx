import { getHeroImage } from "../../constants";

const HeroImg = ({ type }) => {
  return (
    <div className="hero-img">
      <img
        src={getHeroImage(type)}
        alt="hero_background"
        loading="lazy"
        className="size-full object-cover object-center"
      />
    </div>
  );
};

export default HeroImg;

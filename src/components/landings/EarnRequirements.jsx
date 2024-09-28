import { earn_requirements } from "../../constants";
import Heading from "../shared/Heading";

const EarnRequirements = () => {
  return (
    <>
      <Heading
        title="Requirements"
        tclass="text-eco-neutral font-josefin"
        type="about"
      />
      <ul className="list-disc pl-4 mt-7">
        {earn_requirements.map((item, index) => (
          <li
            key={index}
            className="text-base md:text-xl lg:text-2xl text-eco-neutral-prime font-montserrat"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EarnRequirements;

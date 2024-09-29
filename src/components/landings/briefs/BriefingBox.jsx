import CustomizedBtn from "../../../components/shared/CustomizedBtn";
import Heading from "../../../components/shared/Heading";
import { motion } from "framer-motion";
import EarnRequirements from "../EarnRequirements";

const BriefingBox = ({ brief, type }) => {
  const {
    briefClass,
    introTitle,
    title,
    description,
    image,
    imgClass,
    showBtn,
  } = brief;
  return (
    <div className="w-full tablet:flex items-center relative isolate">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.5 }}
        id="brief"
        className={briefClass}
      >
        {type === "earn" ? (
          <EarnRequirements />
        ) : (
          <>
            <Heading
              className="w-full"
              introTitle={introTitle && introTitle}
              introClass="text-eco-green"
              title={title}
              tclass="text-eco-neutral font-josefin"
              description={description}
              dclass="mt-3 text-base tablet:text-xl lg:text-2xl"
              type="about"
            />
            {showBtn && (
              <div className="mt-8">
                <CustomizedBtn
                  text="Learn More"
                  className="w-[171px] h-12 tablet:h-14 flex-center rounded-full primary-btn"
                />
              </div>
            )}
          </>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85 }}
        viewport={{ once: true, amount: 0.5 }}
        // id="about-image"
        className={imgClass}
      >
        <img
          src={image}
          alt="about keke"
          className="size-full object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default BriefingBox;

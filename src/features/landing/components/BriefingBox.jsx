import { motion } from "framer-motion";
import EarnRequirements from "./earn/EarnRequirements";
import Heading from "@/components/Heading";
import Btn from "@/components/btn/Btn";

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
              introClass="text-basic"
              title={title}
              tclass="page-brief__title title-dark"
              description={description}
              dclass="page-brief__desc"
              type="about"
            />
            {showBtn && (
              <div className="mt-8">
                <Btn
                  text="Learn More"
                  styling="btn--hero btn--primary w-[171px]"
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
          className="size-full object-contain object-center"
        />
      </motion.div>
    </div>
  );
};

export default BriefingBox;

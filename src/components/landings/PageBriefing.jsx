import {
  about_descriptions,
  about_titles,
} from "../../constants";
import Btn from "../shared/Btn";
import { motion } from "framer-motion";
import Flexibility from "./Flexibility";
import Heading from "../shared/Heading";
import EarnRequirements from "./EarnRequirements";

const PageBriefing = ({ type = "main" }) => {
  return (
    <section id="about" className="page-brief-container">
      <div
        className={`min-h-[696px] ${type === "main" && "flex-center"} ${
          type === "about" && "flex-center"
        }`}
      >
        {type === "earn" && <Flexibility />}

        <div className="min-h-[526px] md:flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85 }}
            viewport={{ once: true, amount: 0.5 }}
            id="brief"
            className="about-brief"
          >
            {type === "main" && (
              <>
                <Heading
                  className="w-full"
                  introTitle="About Us"
                  introClass="text-eco-green"
                  title={about_titles.one}
                  tclass="text-eco-neutral font-josefin"
                  description={about_descriptions.one}
                  dclass="mt-5 mb-10 text-base md:text-xl lg:text-2xl"
                  type="about"
                />
                <div>
                  <Btn text="Learn More" />
                </div>
              </>
            )}

            {type === "about" && (
              <>
                <Heading
                  className="w-full"
                  title={about_titles.one}
                  tclass="text-eco-neutral font-josefin"
                  description={about_descriptions.three}
                  dclass="mt-5 mb-10 text-base md:text-xl lg:text-2xl"
                  type="about"
                />
              </>
            )}

            {type === "earn" && (
              <EarnRequirements />
            )}
          </motion.div>

          {type === "about" ? (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true, amount: 0.5 }}
              id="about-image"
              className="w-full md:w-[542px] h-[250px] md:h-[454px] rounded-[40px] overflow-hidden"
            >
              <img
                src="/briefings/about-clip.gif"
                alt=""
                className="size-full object-cover object-center"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              viewport={{ once: true, amount: 0.5 }}
              id="about-image"
              className="about-image"
            >
              <img
                src={type === "main" ? "/about.png" : "/earn_about_bg.png"}
                alt="about keke"
                className="size-full object-cover object-center"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageBriefing;

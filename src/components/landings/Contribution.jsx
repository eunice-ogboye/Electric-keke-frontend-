import { contribution } from "../../constants";
import { motion } from "framer-motion";
import AnimateText from "../animate/AnimateText";
import Heading from "../shared/Heading";

const Contribution = () => {
  return (
    <section className="contribution-section">
      <div className="contribution">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          viewport={{ margin: "0px 0px -300px 0px" }}
          className="contribution-phone"
        >
          <img
            src="/hand-phone.svg"
            alt="hand and phone"
            className="size-full object-contain object-center"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { duration: 1 } }}
          className="contribution-pg"
        >
          <Heading
            title={contribution.title}
            tclass="font-josefin !text-[2rem]"
            description={contribution.desc}
            type="about"
            dclass="text-eco-neutral-prime text-base tablet:text-xl laptop:text-2xl mt-7"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contribution;

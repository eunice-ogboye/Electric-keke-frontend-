import { contribution } from "../../constants";
import { motion } from "framer-motion";

const Contribution = () => {
  return (
    <section className="home-pad py-20 bg-base-white">
      <div className="contribution">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          className="contibution-phone"
        >
          <img
            src="/hand-phone.svg"
            alt="hand and phone"
            className="size-full object-contain object-center"
          />
        </motion.div>

        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          className="contibution-pg"
        >
          <h2 className="font-bold text-[2rem] font-josefin">
            {contribution.title}
          </h2>
          <p className="text-eco-neutral-prime text-base md:text-2xl mt-7">
            {contribution.desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contribution;

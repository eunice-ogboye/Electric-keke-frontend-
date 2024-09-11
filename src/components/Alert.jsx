import { useGlobalContext } from "../context";
import { motion } from "framer-motion";

const Alert = () => {
  const {
    alert: { msg },
  } = useGlobalContext();

  return (
    <motion.div initial={{x: 200}} animate={{x: 0}} className="flex items-center justify-between fixed top-5 md:top-20 right-3 md:right-20 shadow-2xl border border-eco-neutral-border p-5 z-50 rounded-lg bg-white">
      <div className="flex items-center gap-2 md:gap-0 justify-between md:w-[338px]">
        <p>{msg}</p>
        <div className="rounded-full bg-eco-green-dark size-7 flex-center">
          <img src="/tick.svg" alt="tick" className="size-5" />
        </div>
      </div>
    </motion.div>
  );
};

export default Alert;

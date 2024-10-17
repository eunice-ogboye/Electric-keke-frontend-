import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Alert = () => {
  const {
    alert: { msg },
  } = useSelector((state) => state.global);

  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ y: -200, opacity: 0 }}
      className="alert-container"
    >
      <p className="mr-4 text-xs">{msg}</p>

      <div className="alert-stats">
        <img src="/tick.svg" alt="tick" className="size-5" />
      </div>
    </motion.div>
  );
};

export default Alert;

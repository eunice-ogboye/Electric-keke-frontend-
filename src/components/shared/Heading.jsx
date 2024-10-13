import { motion } from "framer-motion";

const Heading = ({
  title,
  tclass,
  description,
  dclass,
  introTitle,
  introClass,
  className,
  initial,
  animate,
  initialp,
  animatep,
}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      transition={{ duration: 0.85 }}
      viewport={{ once: true }}
      className={className}
    >
      {introTitle && (
        <p className={`${introClass} intro-title`}>{introTitle}</p>
      )}
      <h1 className={tclass}>{title}</h1>
      {description && (
        <motion.p
          initial={initialp}
          whileInView={animatep}
          transition={{ duration: 2 }}
          className={dclass}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default Heading;

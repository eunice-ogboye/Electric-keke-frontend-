import React from "react";
import { motion } from "framer-motion";

const AnimateText = ({ text }) => {
  const words = text.split(" ");
  console.log(words);
  return (
    <div>
      {words.map((item, index) => {
        return (
          <motion.p
            key={index}
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: index * 0.035 }}
          >
            {item}
          </motion.p>
        );
      })}
    </div>
  );
};

export default AnimateText;

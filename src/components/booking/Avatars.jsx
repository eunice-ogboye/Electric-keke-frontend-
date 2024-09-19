import getAvatars from "../../utils/getAvatars";
import { motion } from "framer-motion";

import React from "react";

const Avatars = ({modalContent}) => {
  return (
    <motion.div
      variants={{
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.035,
            staggerChildren: 0.25,
          },
        },
        hide: { opacity: 0 },
      }}
      className="h-14 w-[7.5rem] relative mx-auto mt-[1.5rem] isolate"
    >
      {getAvatars(modalContent).map((item, index) => {
        return (
          <motion.div
            variants={{
              show: {
                opacity: 1,
              },
              hide: { opacity: 0 },
            }}
            key={index}
            className={`absolute border rounded-full overflow-hidden ${
              index === 0 && "left-1/2 bottom-0 -translate-x-1/2 size-[56px]"
            } ${index === 1 && "bottom-0 -z-10 size-[48px]"} ${
              index === 2 && "right-0 bottom-0 -z-10 size-[48px]"
            } ${item.bgColor}`}
          >
            <img
              src={item.src}
              alt="avatars"
              className="size-full object-cover object-center"
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Avatars;

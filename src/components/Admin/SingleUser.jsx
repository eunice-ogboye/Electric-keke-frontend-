import React from "react";
import { motion } from "framer-motion";

const SingleUser = ({ id, name, email, img, created, status, delay }) => {
  return (
    <motion.div
      initial={{ x: 200, y: -20, opacity: 0 }}
      animate={{
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration: delay * 0.035 + 0.32 },
      }}
      className="grid grid-cols-9 place-items-center py-4 border"
    >
      <div>
        <p className="font-normal text-base">{id}</p>
      </div>

      <div className="col-span-3 justify-self-start px-4">
        <div className="flex items-center gap-x-2">
          <div className="size-12 rounded-full bg-eco-neutral-prime flex-center">
            {img ? (
              <img src={img} alt={name} />
            ) : (
              <p className="text-white">{name[0]}</p>
            )}
          </div>

          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm">{email}</p>
          </div>
        </div>
      </div>

      <div className="col-span-2 justify-self-start">
        <p className="">{created}</p>
      </div>

      <div className="col-span-2 justify-self-start flex-center gap-2">
        <span
          className={`size-3 rounded-full block ${
            status === "active" ? "bg-eco-green" : "bg-red-500"
          }`}
        />
        <p>{status}</p>
      </div>

      <div>
        <img src="/admin-user.svg" alt={name} />
      </div>
    </motion.div>
  );
};

export default SingleUser;

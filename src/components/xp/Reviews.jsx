import React from "react";
import { motion } from "framer-motion";
import {
  reviewContainer,
  reviewContainerChildren,
} from "../../constants/variants";
import reviews from "../../mock-data/reviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  return (
    <>
      <motion.h2 className="font-bold">Review</motion.h2>
      <motion.div
        initial="out"
        animate="enter"
        variants={reviewContainer}
        className="space-y-2 mt-2 md:mt-6"
      >
        {reviews.map((item, index) => {
          return <SingleReview key={item.name} {...item} index={index} />;
        })}
      </motion.div>
    </>
  );
};

export default Reviews;

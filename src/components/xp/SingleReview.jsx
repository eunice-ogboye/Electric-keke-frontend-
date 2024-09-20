import React from "react";
import { reviewContainerChildren } from "../../constants/variants";
import { motion } from "framer-motion";



const SingleReview = ({ photo, name, review, createdAt, email, index }) => {
  return (
    <motion.div
      initial="out"
      animate="enter"
      variants={reviewContainerChildren}
      key={name}
      custom={index}
      className="review"
    >
      <div className="review-head">
        <div className="passenger-photo">
          <img src={photo} alt={name} />
        </div>
        <div>
          <p className="passenger-name">{name}</p>
          <p className="">{email}</p>
        </div>
      </div>
      <p className="passenger-review">{review}</p>
      <div className="passenger-review-details">
        <button className="review-btn">Show original</button>
        <p className="review-cat">{createdAt}</p>
      </div>
    </motion.div>
  );
};

export default SingleReview;

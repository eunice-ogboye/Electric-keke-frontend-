import React from "react";
import ModalForm from "./ModalForm";
import Heading from "../shared/Heading";
import Map from "../shared/Map";
import { modalParent } from "../../constants/variants";
import { motion } from "framer-motion";

const DetailsModal = () => {
  return (
    <motion.div
      variants={modalParent}
      exit="leave"
      className="detail-modal modal"
    >
      <div className="location-container">
        <div className="location-map">
          <Map className="w-full h-full rounded-[27px]" />
        </div>
        <Heading
          className="text-center border-2 max-w-[520px] mx-auto"
          title="Where Are You Headed?"
          tclass="md:mt-6 font-josefin !text-2xl"
          description="Start your eco-friendly journey by entering your pickup location and drop-off destination."
          dclass="text-base md:text-eiteen text-neutral"
        />
      </div>

      <ModalForm />
    </motion.div>
  );
};

export default DetailsModal;

import React from "react";
import Avatars from "./Avatars";
import { motion } from "framer-motion";
import Btn from "../shared/Btn";
import { useNavigate } from "react-router-dom";
import Heading from "../shared/Heading";
import { modalParent } from "../../constants/variants";
import dispatchables from "../../utils/dispatchables";

const ChooseModal = ({ modalContent, handleClick }) => {
  const { flipModal } = dispatchables();
  const navigate = useNavigate();
  return (
    <motion.div
      variants={modalParent}
      exit="leave"
      className="modal choose-modal"
    >
      <motion.div className="h-20 border">
        <Avatars modalContent={modalContent} />
      </motion.div>

      <Heading
        className="text-center"
        title={
          modalContent === "ride"
            ? "Ready to Go?"
            : "Instant or Sheduled- You Decide!"
        }
        tclass="mt-6 font-josefin"
        description={`Choose how you want to ${
          modalContent === "ride" ? "ride" : "send"
        } with EcoRide`}
        dclass="text-eiteen text-neutral"
      />

      <div className="flex-center gap-2 mt-12">
        <Btn
          text={modalContent === "ride" ? "Instant Ride" : "Instant Delivery"}
          handleClick={handleClick}
        />
        <Btn
          text={
            modalContent === "ride" ? "Schedule Ride" : "Schedule a Delivery"
          }
          type="secondary"
          handleClick={() => {
            flipModal(false);
            navigate("/schedule-ride");
          }}
        />
      </div>
    </motion.div>
  );
};

export default ChooseModal;

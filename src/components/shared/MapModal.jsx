import React from "react";
import Heading from "../shared/Heading";
import Map from "../shared/Map";
import { modalParent } from "../../constants/variants";
import { motion } from "framer-motion";
import ModalForm from "../booking/ModalForm";
import RideDetails from "../driver/RideDetails";
import ModalActionBoard from "./ModalActionBoard";

const MapModal = ({ modalContent }) => {
  console.log(modalContent);

  return (
    <motion.div
      variants={modalParent}
      exit="leave"
      className="detail-modal modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="location-container">
        <div className="location-map">
          <Map className="w-full h-full rounded-[27px]" />
        </div>

        <Heading
          className="text-center border-2 max-w-[520px] mx-auto"
          title={
            modalContent === "details"
              ? "Where Are You Headed?"
              : "New Ride Request"
          }
          tclass="md:mt-6 font-josefin !text-2xl"
          description={
            modalContent === "details"
              ? "Start your eco-friendly journey by entering your pickup location and drop-off destination."
              : "You just received a new ride request"
          }
          dclass="text-base md:text-eiteen text-neutral"
        />
      </div>

      {modalContent === "details" ? <ModalForm /> : <RideDetails />}
      {modalContent === "request-ride" && (
        <ModalActionBoard modalContent={modalContent} />
      )}
    </motion.div>
  );
};

export default MapModal;

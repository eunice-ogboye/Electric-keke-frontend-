import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import closeModalOnBodyClick from "../../utils/closeModalOnBodyClick";
import RateModal from "../booking/RateModal";
import ChooseModal from "../booking/ChooseModal";
import DetailsModal from "../booking/DetailsModal";
import { modalContainer } from "../../constants/variants";
import dispatchables from "../../utils/dispatchables";

const Modal = () => {
  // const dispatch = useDispatch();
  const { flipModal } = dispatchables();

  const {
    bookData,
    global: { modal, modalContent },
  } = useSelector((state) => state);
  //
  const navigate = useNavigate();
  //states
  const [content, setContent] = useState("choose-how-to-ride");
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState(false);

  const handleClick = (item) => {
    if (modalContent === "rate") {
      setRate(item);
      setComment(true);
      return;
    }
    setContent("details-of-ride");
  };

  return (
    <motion.section
      initial="hide"
      animate={modal ? "show" : "hide"}
      variants={modalContainer}
      exit="leave"
      className="modal-container"
      onClick={(e) => closeModalOnBodyClick(e, flipModal)}
      style={{ pointerEvents: modal ? "auto" : "none" }}
    >
      {modalContent === "rate" && (
        <RateModal
          comment={comment}
          rateValue={rate}
          rateTheDriver={handleClick}
          ref={modalContainer}
        />
      )}

      {content === "choose-how-to-ride" && (
        <ChooseModal
          modalContent={modalContent}
          handleClick={handleClick}
          ref={modalContainer}
        />
      )}

      {content === "details-of-ride" && <DetailsModal />}
    </motion.section>
  );
};

export default Modal;

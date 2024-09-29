import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import RateModal from "../booking/RateModal";
import ChooseModal from "../booking/ChooseModal";
import { modalContainer } from "../../constants/variants";
import dispatchables from "../../utils/dispatchables";
import PaymentModal from "../profile/PaymentModal";
import Dialog from "../profile/Dialog";
import TransactionModal from "../transaction/TransactionModal";
import MapModal from "./MapModal";
import ProfileContactModal from "./ProfileContactModal";
import SaveModal from "../profile/SaveModal";
import CustomizedBtn from "./CustomizedBtn";
import { XIcon } from "lucide-react";

const Modal = () => {
  // const dispatch = useDispatch();
  const { flipModal, openModalWithContent } = dispatchables();

  // const bookData = useSelector(state => state.bookData)
  const { modal, modalContent } = useSelector((state) => state.global);
  //
  //states
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState(false);

  const handleClick = (item) => {
    console.log(item);
    if (modalContent === "rate") {
      setRate(item);
      setComment(true);
      return;
    }
    openModalWithContent("details");
  };

  return (
    <motion.section
      initial="hide"
      animate={modal ? "show" : "hide"}
      variants={modalContainer}
      exit="leave"
      className="modal-container"
      onClick={() => flipModal(false)}
      style={{ pointerEvents: modal ? "auto" : "none" }}
    >
      <div
        className="w-full max-w-[600px] relative mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <CustomizedBtn
          icon={<XIcon />}
          className="absolute top-2 tablet:top-5 right-2 tablet:right-5 rounded-full size-8 p-0 bg-eco-neutral-prime"
        />
        
        {modalContent === "rate" && (
          <RateModal
            comment={comment}
            rateValue={rate}
            rateTheDriver={handleClick}
          />
        )}

        {(modalContent === "ride" || modalContent === "delivery") && (
          <ChooseModal modalContent={modalContent} handleClick={handleClick} />
        )}

        {(modalContent === "details" || modalContent === "request-ride") && (
          <MapModal modalContent={modalContent} />
        )}

        {(modalContent === "Profile Management" ||
          modalContent === "contact passenger") && (
          <ProfileContactModal modalContent={modalContent} />
        )}

        {modalContent === "Payment Method" && <PaymentModal />}

        {(modalContent === "Delete Account" ||
          modalContent === "Logout of your account") && (
          <Dialog title={modalContent} />
        )}

        {modalContent === "Pay for ride" && <TransactionModal />}

        {modalContent === "update-profile" && <SaveModal />}
      </div>
    </motion.section>
  );
};

export default Modal;

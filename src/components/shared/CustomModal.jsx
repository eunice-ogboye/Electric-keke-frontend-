import { useEffect, useState } from "react";
import { Modal, ModalSheet, ModalTrigger } from "./_custom-ui/Modal";
import { LockScroll, UnlockScroll } from "@/utils/ScrollLock";

const CustomModal = ({
  children,
  trigger: Trigger,
  triggerProps,
  modalStylling,
  isModalOpen,
  openModal,
  closeModal,
}) => {

  useEffect(() => {
    console.log("lakdladkaldkakjdlkadlkjakljl")
    console.log(isModalOpen)
    if (isModalOpen) {
      LockScroll();
      console.log('locked')
    } else {
      UnlockScroll();
      console.log('unlocked')
    }
  }, [isModalOpen]);

  return (
    <>
      <ModalTrigger>
        {Trigger && (
          <Trigger
            onClick={() => {
              // if (otherclickfunc) {
              //   otherclickfunc();
              // }
              openModal();
            }}
            {...triggerProps}
          />
        )}
      </ModalTrigger>

      {isModalOpen && (
        <Modal
          styling="modal-container"
          onClick={() => {
            closeModal();
            // customCloseFunc ? customCloseFunc() : closeModal();
          }}
        >
          <ModalSheet styling={`modal ${modalStylling}`}>{children}</ModalSheet>
        </Modal>
      )}
    </>
  );
};

export default CustomModal;

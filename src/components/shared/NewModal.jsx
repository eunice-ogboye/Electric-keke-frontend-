import { useState } from "react";
import { Modal, ModalSheet, ModalTrigger } from "./_custom-ui/Modal";
import { LockScroll, UnlockScroll } from "@/utils/ScrollLock";

const NewModal = ({
  children,
  trigger: Trigger,
  triggerProps,
  modalStylling,
  closeCallBack,
  openCallBack,
}) => {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
    UnlockScroll();
    closeCallBack && closeCallBack();
  };

  const openModal = () => {
    setShow(true);
    LockScroll();
    openCallBack && openCallBack();
  };

  return (
    <>
      <ModalTrigger>
        {Trigger && <Trigger onClick={openModal} {...triggerProps} />}
      </ModalTrigger>

      {show && (
        <Modal styling="modal-container" onClick={closeModal}>
          <ModalSheet styling={`modal ${modalStylling}`}>{children}</ModalSheet>
        </Modal>
      )}
    </>
  );
};

export default NewModal;

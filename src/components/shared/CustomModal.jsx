import { useState } from "react";
import { Modal, ModalSheet, ModalTrigger } from "./_custom-ui/Modal";
import { LockScroll, UnlockScroll } from "@/utils/ScrollLock";

const CustomModal = ({
  children,
  trigger: Trigger,
  triggerProps,
  modalStylling,
  closeCallBack,
  openCallBack,
  definedState,
  customCloseFunc,
  otherclickfunc
}) => {
  const [show, setShow] = useState(definedState || false);

  /** sieving the props since the props otherclikfunc is not needed on the button */

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
        {Trigger && (
          <Trigger
            onClick={() => {
              if (otherclickfunc) {
                otherclickfunc();
              }
              openModal();
            }}
            {...triggerProps}
          />
        )}
      </ModalTrigger>

      {show && (
        <Modal
          styling="modal-container"
          onClick={() => {
            customCloseFunc ? customCloseFunc() : closeModal();
          }}
        >
          <ModalSheet styling={`modal ${modalStylling}`}>{children}</ModalSheet>
        </Modal>
      )}
    </>
  );
};

export default CustomModal;

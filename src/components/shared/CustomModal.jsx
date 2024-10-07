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
}) => {
  const [show, setShow] = useState(definedState || false);

  let sieve;
  /** sieving the props since the props otherclikfunc is not needed on the button */
  if (triggerProps?.otherclickfunc) {
    const { otherclickfunc, ...restProps } = triggerProps;
    sieve = { otherclickfunc, ...restProps };
  }

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
              if (sieve?.otherclickfunc) {
                console.log('sieving')
                sieve.otherclickfunc();
              }
              openModal();
            }}
            {...sieve.restProps}
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

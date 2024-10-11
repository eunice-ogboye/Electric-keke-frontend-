import { XIcon } from "lucide-react";
import { Modal, ModalSheet, ModalTrigger } from "./_custom-ui/Modal";
import Btn from "./btn/Btn";

const CustomModal = ({
  children,
  trigger: Trigger,
  triggerProps,
  modalStyling,
  isModalOpen,
  openModal,
  closeModal,
  showCloseBtn = true,
}) => {
  return (
    <>
      <ModalTrigger>
        {Trigger && <Trigger onClick={() => openModal()} {...triggerProps} />}
      </ModalTrigger>

      {isModalOpen && (
        <Modal styling="modal-container" onClick={() => closeModal()}>
          <ModalSheet styling={modalStyling + " " + "modal"}>
            {showCloseBtn && (
              <Btn
                icon={<XIcon />}
                styling="modal-close-btn"
                onClick={closeModal}
              />
            )}

            {children}
          </ModalSheet>
        </Modal>
      )}
    </>
  );
};

export default CustomModal;

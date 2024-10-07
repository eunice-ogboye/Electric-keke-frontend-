import React from "react";
import NewModal from "../CustomModal";
import ManageProfileModal from "./ManageProfileModal";
import PaymentMethodModal from "./PaymentMethodModal";
import LogoutDialog from "./LogoutDialog";
import DeleteDialog from "./DeleteDialog";
import Welldone from "./Welldone";

const GroupedModals = ({ type, customClose }) => {
  return (
    <NewModal
      definedState={true}
      modalStylling="modal__contact"
      customCloseFunc={customClose}
    >
      {type === "Profile Management" && <ManageProfileModal />}
      {type === "Payment Method" && <PaymentMethodModal />}
      {type === "Logout" && <LogoutDialog />}
      {type === "Delete Account" && <DeleteDialog />}
      {type === "edit-profile" && <Welldone closeModal={customClose} />}
    </NewModal>
  );
};

export default GroupedModals;

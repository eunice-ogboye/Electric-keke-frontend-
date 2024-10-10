import React from "react";
import NewModal from "../CustomModal";
import ManageProfileModal from "./ManageProfileModal";
import PaymentMethodModal from "./PaymentMethodModal";
import LogoutDialog from "./LogoutDialog";
import DeleteDialog from "./DeleteDialog";
import Welldone from "./Welldone";
import { UnlockScroll } from "@/utils/ScrollLock";

const groupModalStyling = (type) => {
  const modalStyles = {
    "Profile Management": "modal__profile",
    "Payment Method": "modal__paymethod",
    Logout: "modal__dialog",
    "Delete Account": "modal__dialog",
    "edit-profile": "edit-profile__modal",
  };
  return modalStyles[type]
};

const GroupedModals = ({ type, customClose }) => {
  return (
    <NewModal
      definedState={true}
      modalStylling={groupModalStyling(type)}
      customCloseFunc={() => {
        customClose();
        UnlockScroll();
      }}
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

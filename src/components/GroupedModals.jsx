import CustomModal from "./CustomModal";
import ManageProfileModal from "./modals/ManageProfileModal";
import PaymentMethodModal from "./modals/PaymentMethodModal";
import LogoutDialog from "./modals/LogoutDialog";
import DeleteDialog from "./modals/DeleteDialog";
import Welldone from "./modals/Welldone";

const groupModalStyling = (type) => {
  const modalStyles = {
    "Profile Management": "modal__profile",
    "Payment Method": "modal__paymethod",
    Logout: "modal__dialog",
    "Delete Account": "modal__dialog",
    "edit-profile": "edit-profile__modal",
  };
  return modalStyles[type];
};

const GroupedModals = ({ type, isModalOpen, closeModal }) => {
  return (
    <CustomModal
      isModalOpen={isModalOpen}
      modalStyling={groupModalStyling(type)}
      closeModal={closeModal}
    >
      {type === "Profile Management" && <ManageProfileModal />}
      {type === "Payment Method" && <PaymentMethodModal />}
      {type === "Logout" && <LogoutDialog />}
      {type === "Delete Account" && <DeleteDialog />}
      {type === "edit-profile" && <Welldone closeModal={customClose} />}
    </CustomModal>
  );
};

export default GroupedModals;

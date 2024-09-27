import React, { useEffect, useState } from "react";
import FormRow from "../shared/FormRow";
import Btn from "../shared/Btn";
import Heading from "./Heading";
import CustomizedBtn from "./CustomizedBtn";
import Call from "../../assets/svg/Call";
import dispatchables from "../../utils/dispatchables";
import ModalTemplate from "./ModalTemplate";
import ProfileModalTop from "../profile/ProfileModalTop";

const ProfileContactModal = ({ modalContent }) => {
  const { flipModal, showAlert } = dispatchables();

  const [title, setTitle] = useState("Profile Management");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    "old-password": "",
    "new-password": "",
    "confirm-password": "",
  });

  useEffect(() => {
    console.log(modalContent);
    if (modalContent === "contact passenger") {
      setTitle("Choose Your Preferred Call Option");
    }
    console.log(title);
  }, []);

  const handleInAppCall = async () => {
    showAlert("In app call");
    // logic to call in app

    flipModal(false);
  };

  const handleCallPhone = async () => {
    showAlert("calling number");
    // logic to call the line outside the app
    flipModal(false);
  };

  return (
    <>
      <ModalTemplate
        top={
          <ProfileModalTop
            title={title}
            modalContent={modalContent}
            setTitle={setTitle}
            handleCallPhone={handleCallPhone}
            handleInAppCall={handleInAppCall}
          />
        }
        bottom={
          title === "Profile Management" ||
          title === "Choose Your Preferred Call Option" ? null : (
            <Btn text="Confirm" size="full" disabled={isLoading} />
          )
        }
      />
    </>
  );
};

export default ProfileContactModal;

import React, { useEffect, useState } from "react";
import FormRow from "../shared/FormRow";
import Btn from "../shared/Btn";
import Heading from "./Heading";
import CustomizedBtn from "./CustomizedBtn";
import Call from "../../assets/svg/Call";
import dispatchables from "../../utils/dispatchables";
import { useNavigate } from "react-router-dom";

const ProfileContactModal = ({ modalContent }) => {
  const { flipModal } = dispatchables();
  const navigate = useNavigate();

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
    if (modalContent === "contact passenger") {
      setTitle("Choose Your Preferred Call Option");
    }
  });

  const handleInAppCall = async () => {
    console.log("calling from the app");
    // logic to call in app
    navigate("/chat");
    flipModal(false);
  };

  const handleCallPhone = async () => {
    console.log("calling phone");
    // logic to call the line outside the app
    navigate("/chat");
    flipModal(false);
  };

  return (
    <div className="profile-modal">
      <div className="mx-auto w-[410px] mt-12">
        <Heading
          title={title}
          tclass="text-center font-bold font-josefin"
          description={
            modalContent === "contact passenger" &&
            "You can contact the passenger directly through the app or call their phone number."
          }
          dclass="text-center"
        />

        {title === "Profile Management" && (
          <div className="profile-opt-box">
            <div
              className="profile-options"
              onClick={() => setTitle("Personal Information")}
            >
              <p>Personal Information</p>
              <div>
                <img src="/setting-arr.svg" alt="arrow" />
              </div>
            </div>

            <div
              className="profile-options"
              onClick={() => setTitle("Change Password")}
            >
              <p>Change Password</p>
              <div>
                <img src="/setting-arr.svg" alt="arrow" />
              </div>
            </div>
          </div>
        )}

        {title === "Change Password" && (
          <form className="profile-opt-box pb-2">
            <FormRow
              type={title === "Personal Information" ? "text" : "password"}
              name={title === "Personal Information" ? "name" : "old-password"}
              placeholder={
                title === "Personal Information" ? "name" : "old-password"
              }
              inputclass="profile-modal-inputs"
            />

            <FormRow
              type={title === "Personal Information" ? "email" : "password"}
              name={title === "Personal Information" ? "email" : "new-password"}
              placeholder={
                title === "Personal Information" ? "Email" : "New password"
              }
              inputclass="profile-modal-inputs"
            />

            {title === "Change Password" && (
              <FormRow
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                inputclass="profile-modal-inputs"
              />
            )}

            <div className="px-7">
              <Btn text="Confirm" size="full" disabled={isLoading} />
            </div>
          </form>
        )}

        {modalContent === "contact passenger" && (
          <div className="mt-6 space-y-6">
            <CustomizedBtn
              className="profile-modal-inputs bg-transparent gap-x-2 text-black justify-start"
              text="In App Call"
              icon={<Call type="passenger" />}
              handleClick={handleInAppCall}
            />
            <CustomizedBtn
              className="profile-modal-inputs bg-transparent gap-2 text-black justify-start "
              text="Call Phone Number"
              icon={<Call type="passenger" />}
              handleClick={handleCallPhone}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileContactModal;

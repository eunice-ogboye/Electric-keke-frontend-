import React from "react";
import FormRow from "../shared/FormRow";
import Heading from "../shared/Heading";
import CustomizedBtn from "../shared/CustomizedBtn";
import Call from "../../assets/svg/Call";

const ProfileModalTop = ({
  title,
  modalContent,
  setTitle,
  handleCallPhone,
  handleInAppCall,
}) => {
  return (
    <>
      <Heading
        title={title}
        tclass="text-center font-bold font-josefin"
        description={
          modalContent === "contact passenger" &&
          "You can contact the passenger directly through the app or call their phone number."
        }
        dclass="text-center"
      />
      {title === "Profile Management" ? (
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
      ) : title === "Choose Your Preferred Call Option" ? (
        <>
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
        </>
      ) : (
        <div className="profile-opt-box pb-2">
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
        </div>
      )}
    </>
  );
};

export default ProfileModalTop;

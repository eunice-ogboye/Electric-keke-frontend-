import React, { useState } from "react";
import Heading from "../Heading";
import RegularList from "../_design-patterns/RegularList";
import Btn from "../btn/Btn";
import dispatchables from "@/utils/dispatchables";
import FormRow from "../forms/FormRow";

const ProfileOption = ({ title, handleClick }) => {
  return (
    <div className="profile-options" onClick={() => handleClick(title)}>
      <p>{title}</p>
      <div>
        <img src="/setting-arr.svg" alt="arrow" />
      </div>
    </div>
  );
};

const ManageProfileModal = () => {
  const [title, setTitle] = useState("Profile Management");
  const { showAlert } = dispatchables();

  const updateProfile = () => {
    showAlert("updated profile sucessfully");
  };

  const changePassword = () => showAlert("password updated");

  return (
    <>
      <Heading
        className="text-center"
        title={title}
        tclass="text-eiteen"
        dclass="text-sm"
      />

      {title === "Profile Management" ? (
        <div className="profile-opt-box">
          <RegularList
            list={[
              { title: "Personal Information" },
              { title: "Change Password" },
            ]}
            component={ProfileOption}
            handleClick={(title) => {
              setTitle(title);
            }}
          />
        </div>
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

      {title === "Profile Management" ? (
        <div className="h-[88px]"></div>
      ) : (
        <div className="mt-8">
          <Btn
            text="Confirm"
            styling="btn btn--hero btn--primary w-full max-w-[343px] mx-auto"
            onClick={() =>
              title === "Personal Information" ? updateProfile() : changePassword()
            }
          />
        </div>
      )}
    </>
  );
};

export default ManageProfileModal;

import React, { useState } from "react";
import FormRow from "../shared/FormRow";
import Btn from "../shared/Btn";
import { Label } from "recharts";

const ProfileModal = () => {
  const [title, setTitle] = useState("Profile Management");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    "old-password": "",
    "new-password": "",
    "confirm-password": "",
  });

  return (
    <div className="profile-modal">
      <div className="mx-auto w-[410px] mt-12">
        <h2 className="text-center font-bold font-josefin">{title}</h2>

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

        {title !== "Profile Management" && (
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
      </div>
    </div>
  );
};

export default ProfileModal;

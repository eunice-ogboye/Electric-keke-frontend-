import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import FormRow from "../../../components/forms/FormRow";
import DatePicker from "../../../components/DatePicker";
import SelectInput from "../../../components/SelectInput";
import { states } from "../../../constants";
import CustomSelectItem from "../../../components/CustomSelectItem";
import Choose from "../../../components/Choose";

const ProfileManagementForm = ({ cancelEdit, saveData }) => {
  const { user } = useOutletContext;

  const [profileFormData, setProfileFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    email: user?.email,
    phone: user?.phone_number,
    DOB: "",
    lga: "",
    address: user?.address,
    password: "",
  });

  return (
    <form className="mt-14" onSubmit={(e) => e.preventDefault()}>
      <div className="prof-form-body">
        <FormRow
          name="firstname"
          label="First Name"
          value={profileFormData.firstname}
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="middlename"
          label="Middle Name"
          value={profileFormData.middlename}
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="lastname"
          label="Last Name"
          value={profileFormData.lastname}
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="email"
          label="Email Address"
          type="email"
          value={profileFormData.email}
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="phone"
          label="Phone Number"
          value={profileFormData.phone}
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          label="Date Of Birth"
          children={<DatePicker />}
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          label="State"
          children={
            <SelectInput
              children={<CustomSelectItem items={states} />}
              handleFunc={(value) => console.log(value)}
            />
          }
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="lga"
          label="L.G.A"
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />
        <FormRow
          name="address"
          label="Address"
          value={profileFormData.address}
          formRowContainer="font-inter"
          inputclass="profile-management-input"
        />

        <div className="flex items-end gap-4 mt-[51px] border">
          <Choose
            choice1txt="Save"
            choice2txt="Cancel"
            btnClass="btn btn--lg w-1/2 max-w-[181px]"
            addedClass1="btn--primary"
            addedClass2="btn--secondary"
            handleChoice1={saveData}
            handleChoice2={cancelEdit}
          />
        </div>
      </div>
    </form>
  );
};

export default ProfileManagementForm;

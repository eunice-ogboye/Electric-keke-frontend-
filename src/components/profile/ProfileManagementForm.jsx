import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import dispatchables from "../../utils/dispatchables";
import FormRow from "../shared/FormRow";
import DatePicker from '../shared/DatePicker'
import SelectInput from '../shared/SelectInput'
import Btn from '../shared/Btn'

const ProfileManagementForm = () => {
  const { user } = useOutletContext;

  const { showAlert } = dispatchables();

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
    <form className="mt-14 " onSubmit={(e) => e.preventDefault()}>
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
          children={<SelectInput />}
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
      </div>

      <div className="flex items-end gap-4 mt-[51px]">
        <Btn text="Save" />
        <Btn text="Cancel" type="secondary" />
      </div>
    </form>
  );
};

export default ProfileManagementForm;

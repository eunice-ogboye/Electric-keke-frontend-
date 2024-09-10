import { DatePicker } from "../components/DatePicker";
import { Section } from "../shared-layout";
import { SelectInput } from "../components/SelectInput";
import React from "react";
import Btn from "../components/Btn";
import FormRow from "../components/FormRow";

const Profile = () => {
  return (
    <Section darkLogo={true}>
      <div className="home-pad pt-5 md:pt-[122px] pb-20 relative overflow-hidden ">
        <div className="size-[300px] lg:size-[609px] bg-eco-green/10  absolute -top-10 md:-top-32 -left-5 md:left-[7.5rem] rounded-full border -z-20" />
        <div className="border-b border-b-neutral">
          <h2 className="font-bold font-nunito">Personal Information</h2>
        </div>

        <div className="size-[162px] rounded-full border overflow-hidden mt-5 mb-12">
          <img
            src="/persons/profile.jpeg"
            alt="profile"
            className="size-full object-cover object-center"
          />
        </div>

        <form className="mt-14 " onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-[50px]">
            <FormRow
              name="first-name"
              label="First Name"
              formRowContainer="font-inter"
            />
            <FormRow
              name="middle-name"
              label="Middle Name"
              formRowContainer="font-inter"
            />
            <FormRow
              name="last-name"
              label="Last Name"
              formRowContainer="font-inter"
            />
            <FormRow
              name="email"
              label="Email Address"
              type="email"
              formRowContainer="font-inter"
            />
            <FormRow
              name="phone"
              label="Phone Number"
              formRowContainer="font-inter"
            />
            <FormRow
              label="Date Of Birth"
              children={<DatePicker />}
              formRowContainer="font-inter"
            />
            <FormRow
              label="State"
              children={<SelectInput />}
              formRowContainer="font-inter"
            />
            <FormRow name="lga" label="L.G.A" formRowContainer="font-inter" />
            <FormRow
              name="address"
              label="Address"
              formRowContainer="font-inter"
            />
            <FormRow
              name="password"
              label="Password"
              type="password"
              formRowContainer="font-inter"
            />
          </div>
          <div className="flex items-end gap-4 mt-[51px]">
            <Btn text="Save" />
            <Btn text="Cancel" type="secondary" />
          </div>
        </form>
        <div className="absolute right-0 -bottom-36 md:-bottom-64 -z-20">
          <img src="/profile-tree.png" alt="profile-tree" />
        </div>
      </div>
    </Section>
  );
};

export default Profile;

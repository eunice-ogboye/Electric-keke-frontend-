import { DatePicker } from "../components/DatePicker";
import { Section } from "../shared-layout";
import { SelectInput } from "../components/SelectInput";
import React from "react";
import { ToggleStats } from "../components";
import Btn from "../components/Btn";

const ProfileFormRow = ({ name, label, type = "text", children }) => {
  return (
    <div>
      <label htmlFor={name} className="text-base block">
        {label}
      </label>
      {children ? (
        children
      ) : (
        <input
          type={type}
          name={name}
          className="border border-pgreen rounded-[6px] h-[64px] w-full max-w-96"
        />
      )}
    </div>
  );
};

const Profile = () => {
  return (
    <Section darkLogo={true}>
      <div className="home-pad pt-5 md:pt-[122px] pb-20 relative overflow-hidden ">
        <div className="size-[300px] lg:size-[609px] bg-pgreen/10  absolute -top-10 md:-top-32 -left-5 md:left-[7.5rem] rounded-full border -z-20" />
        <div className="border-b border-b-neutral">
          <h2 className="font-bold">Personal Information</h2>
        </div>

        <div className="size-[162px] rounded-full border overflow-hidden mt-5 mb-12">
          <img
            src="/persons/profile.jpeg"
            alt="profile"
            className="size-full object-cover object-center"
          />
        </div>

        <form
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-[50px]"
          onSubmit={(e) => e.preventDefault()}
        >
          <ProfileFormRow name="first-name" label="First Name" />
          <ProfileFormRow name="middle-name" label="Middle Name" />
          <ProfileFormRow name="last-name" label="Last Name" />
          <ProfileFormRow name="email" label="Email Address" type="email" />
          <ProfileFormRow name="phone" label="Phone Number" />
          <ProfileFormRow label="Date Of Birth" children={<DatePicker />} />
          <ProfileFormRow label="State" children={<SelectInput />} />
          <ProfileFormRow name="lga" label="L.G.A" />
          <ProfileFormRow name="address" label="Address" />
          <ProfileFormRow name="password" label="Password" type="password" />
          <div className="flex items-end justify-between gap-4 border">
            <Btn text="Save" />
            <Btn text="Cancel" type="secondary" />
          </div>
        </form>
      <div className="absolute right-0 -bottom-36 md:-bottom-64">
        <img src="/profile-tree.png" alt="profile-tree" />
      </div>
      </div>
    </Section>
  );
};

export default Profile;

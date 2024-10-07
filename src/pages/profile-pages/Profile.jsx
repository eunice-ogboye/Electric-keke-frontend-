import React, { useState } from "react";
import Section from "../../sharedLayouts/Section";
import Edit from "../../assets/svg/Edit";
import SettingIcon from "../../assets/svg/SettingIcon";
import MyProfile from "../../components/profile/MyProfile";
import ProfileManagementForm from "../../components/profile/ProfileManagementForm";
import Spear from "../../assets/svg/Spear";
import GroupedModals from "@/components/shared/modals/GroupedModals";
import Btn from "@/components/shared/btn/Btn";
import Choose from "@/components/shared/Choose";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      {success && (
        <GroupedModals
          type="edit-profile"
          customClose={() => setSuccess(false)}
        />
      )}

      <Section darkLogo={true}>
        <div className="profile-section">
          <div className="profile-glow" />

          <div className="profile-sub-header">
            <div className="flex items-center gap-x-2">
              {/* {editProfile && (
                <Btn
                  icon={<Spear color="black" />}
                  styling="bg-transparent"
                  onClick={() => setEditProfile(false)}
                />
              )} */}

              <h2 className="font-bold font-josefin text-xl md:text-[2rem]">
                Personal Information
              </h2>
            </div>

            <div className="flex-center gap-2">
              <Choose btnClass="bg-transparent size-5 p-0 md:size-10" />
              {/* <Btn
                icon={<Edit />}
                styling="bg-transparent size-5 p-0 md:size-10"
                onClick={() => setEditProfile(true)}
              />
              <Btn
                icon={<SettingIcon />}
                styling="bg-transparent size-5 p-0 md:size-10 flex-center"
                href="/settings"
              /> */}
            </div>
          </div>

          <div className="prof-photo">
            <img
              src="/persons/profile.jpeg"
              alt="profile"
              className="prof-photo-main"
            />
          </div>

          {editProfile ? (
            <ProfileManagementForm
              cancelEdit={() => {
                setEditProfile(false);
              }}
              saveData={() => setSuccess(true)}
            />
          ) : (
            <MyProfile />
          )}
          <div className="absolute right-0 -bottom-36 md:-bottom-64 -z-20">
            <img src="/profile-tree.png" alt="profile-tree" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Profile;

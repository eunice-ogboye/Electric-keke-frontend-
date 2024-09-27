import React, { useState } from "react";
import Section from "../../shared-pages/Section";
import CustomizedBtn from "../../components/shared/CustomizedBtn";
import Edit from "../../assets/svg/Edit";
import SettingIcon from "../../assets/svg/SettingIcon";
import MyProfile from "../../components/profile/MyProfile";
import ProfileManagementForm from "../../components/profile/ProfileManagementForm";
import Spear from "../../assets/svg/Spear";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);

  return (
    <Section darkLogo={true}>
      <div className="profile-section">
        <div className="profile-glow" />

        <div className="profile-sub-header">
          <div className="flex items-center gap-x-2">
            {editProfile && (
              <CustomizedBtn
                icon={<Spear color="black" />}
                className="bg-transparent"
                handleClick={() => setEditProfile(false)}
              />
            )}

            <h2 className="font-bold font-josefin text-xl">Personal Information</h2>
          </div>
          <div>
            <CustomizedBtn
              icon={<Edit />}
              className="bg-transparent"
              handleClick={() => setEditProfile(true)}
            />
            <CustomizedBtn
              icon={<SettingIcon />}
              className="bg-transparent"
              href="/settings"
            />
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
          />
        ) : (
          <MyProfile />
        )}
        <div className="absolute right-0 -bottom-36 md:-bottom-64 -z-20">
          <img src="/profile-tree.png" alt="profile-tree" />
        </div>
      </div>
    </Section>
  );
};

export default Profile;

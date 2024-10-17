import React, { useState } from "react";
import Section from "../layouts/Section";
import Edit from "../assets/svg/Edit";
import SettingIcon from "../assets/svg/SettingIcon";
import MyProfile from "../features/profile/components/MyProfile";
import ProfileManagementForm from "../features/profile/components/ProfileManagementForm";
import Spear from "../assets/svg/Spear";
import GroupedModals from "@/components/GroupedModals";
import Btn from "@/components/btn/Btn";
import Choose from "@/components/Choose";
import { useNavigate } from "react-router-dom";
import { LockScroll, UnlockScroll } from "@/utils/ScrollLock";

const Profile = () => {
  const [editProfile, setEditProfile] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

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
              {editProfile && (
                <Btn
                  icon={<Spear color="black" />}
                  styling="bg-transparent"
                  onClick={() => setEditProfile(false)}
                />
              )}

              <h2 className="font-bold font-josefin text-xl md:text-[2rem]">
                Personal Information
              </h2>
            </div>

            <Choose
              containerClass="flex-center gap-2"
              btnClass="bg-transparent size-5 p-0 md:size-10"
              icon1={<Edit />}
              icon2={<SettingIcon />}
              handleChoice1={() => setEditProfile(true)}
              handleChoice2={() => navigate("/settings")}
            />
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
                UnlockScroll();
                setEditProfile(false);
              }}
              saveData={() => {
                LockScroll();
                setSuccess(true);
              }}
            />
          ) : (
            <MyProfile />
          )}

          <div className="absolute right-0 -bottom-36 md:top-[846px] h-[456px] -z-20">
            <img src="/profile-tree.png" alt="profile-tree" />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Profile;

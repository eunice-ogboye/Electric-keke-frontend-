import GroupedModals from "@/components/shared/modals/GroupedModals";
import SettingHeader from "../../components/profile/SettingHeader";
import SettingNav from "../../components/profile/SettingNav";
import React, { useState } from "react";
import Section from "@/sharedLayouts/Section";
import { useModal } from "@/hooks/useModal";

const Settings = () => {
  const [typeOfModal, setTypeOfModal] = useState("delete");
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <GroupedModals
        type={typeOfModal}
        openModal={openModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />

      <Section withDesktopHeader={false}>
        <div className="setting">
          <SettingHeader />
          <div className="setting-container">
            <SettingNav openModal={openModal} setTypeOfModal={setTypeOfModal} />

            <div className="safe">
              <img src="/safe.png" alt="safe" className="size-full" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Settings;

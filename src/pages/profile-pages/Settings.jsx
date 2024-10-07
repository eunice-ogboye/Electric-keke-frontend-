import GroupedModals from "@/components/shared/modals/GroupedModals";
import SettingHeader from "../../components/profile/SettingHeader";
import SettingNav from "../../components/profile/SettingNav";
import React, { useState } from "react";
import Section from "@/sharedLayouts/Section";

const Settings = () => {
  const [typeOfModal, setTypeOfModal] = useState("delete");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {isModalOpen && (
        <GroupedModals
          type={typeOfModal}
          customClose={() => setIsModalOpen(false)}
        />
      )}

      <Section withDesktopHeader={false}>
        <div className="setting">
          <SettingHeader />
          <div className="setting-container">
            <SettingNav
              setIsModalOpen={setIsModalOpen}
              setTypeOfModal={setTypeOfModal}
            />

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

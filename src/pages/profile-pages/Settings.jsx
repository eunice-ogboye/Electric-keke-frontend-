import SettingNav from "../../components/profile/SettingNav";
import React from "react";

const Settings = () => {
  return (
    <section className="setting">
      <h2 className="setting-title">Settings</h2>

      <div className="setting-container">
        <SettingNav />

        <div className="safe">
          <img src="/safe.png" alt="safe" className="size-full" />
        </div>
      </div>
    </section>
  );
};

export default Settings;

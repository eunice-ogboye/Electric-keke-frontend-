import React from "react";
import { SmallInfo } from "@/components/SmallInfo";
import Spear from "@/assets/svg/Spear";

const SettingHeader = () => {
  return (
    <header className="setting-header">
      <div className="flex items-center gap-6">
        <div className="cursor-pointer" onClick={() => history.back()}>
          <Spear color="red" />
        </div>
        <SmallInfo />
      </div>
    </header>
  );
};

export default SettingHeader;

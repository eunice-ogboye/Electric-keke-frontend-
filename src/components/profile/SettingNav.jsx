import dispatchables from "../../utils/dispatchables";
import { settings } from "../../constants";
import React from "react";
import { Link } from "react-router-dom";
import RegularList from "../shared/RegularList";
import SettingListItem from "./SettingListItem";

const SettingNav = () => {
  const { openModalWithContent } = dispatchables();
  return (
    <nav className="w-full tablet:w-[41%]">
      <h2 className="setting-title">Settings</h2>
      <ul className="space-y-4 tablet:space-y-16 mt-4 tablet:mt-10">
        <RegularList
          itemsToDisplay={settings}
          resourceName="settingLink"
          itemComponent={SettingListItem}
        />
        <li
          className="setting-opts text-error !font-semibold"
          onClick={() => openModalWithContent("Logout of your account")}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default SettingNav;

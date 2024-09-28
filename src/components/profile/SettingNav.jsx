import dispatchables from "../../utils/dispatchables";
import { settings } from "../../constants";
import React from "react";
import { Link } from "react-router-dom";
import RegularList from "../shared/RegularList";
import SettingListItem from "./SettingListItem";

const SettingNav = () => {
  const { openModalWithContent } = dispatchables();
  return (
    <nav>
      <h2 className="setting-title">Settings</h2>
      <ul className="space-y-16 mt-10">
        {/* {settings.map((item) => {
          return item.href ? (
            <Link to={item.href} key={item.title} className="setting-opts">
              {item.title}
            </Link>
          ) : (
            <li
              className="setting-opts"
              key={item}
              onClick={() => openModalWithContent(item.title)}
            >
              {item.title}
              <div>
                <img src="/setting-arr.svg" alt="arrow" />
              </div>
            </li>
          );
        })} */}
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

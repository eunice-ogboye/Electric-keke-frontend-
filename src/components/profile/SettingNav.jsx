import dispatchables from "../../utils/dispatchables";
import { settings } from "../../constants";
import React from "react";

const SettingNav = () => {
  const { openModalWithContent } = dispatchables();
  return (
    <nav>
      <h2 className="setting-title">Settings</h2>
      <ul className="space-y-16 mt-10">
        {settings.map((item) => {
          return (
            <li
              className="setting-opts"
              key={item}
              onClick={() => openModalWithContent(item)}
            >
              {item}
              <div>
                <img src="/setting-arr.svg" alt="arrow" />
              </div>
            </li>
          );
        })}
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

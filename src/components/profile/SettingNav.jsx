import dispatchables from "../../utils/dispatchables";
import { settings } from "../../constants";
import React from "react";

const SettingNav = () => {
  const { openModalWithContent } = dispatchables();
  return (
    <nav>
      <ul className="space-y-16">
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
      </ul>
    </nav>
  );
};

export default SettingNav;

import { ArrowRight } from "lucide-react";
import dispatchables from "../../utils/dispatchables";
import React from "react";
import { Link } from "react-router-dom";

const SettingListItem = ({ settingLink }) => {
  const { openModalWithContent } = dispatchables();
  const { href, title } = settingLink;

  const SettingAsLink = () => {
    return (
      <Link to={href} className="setting-opts">
        {title}
        <ArrowRight />
      </Link>
    );
  };

  const SettingMain = () => {
    return (
      <li className="setting-opts" onClick={() => openModalWithContent(title)}>
        {title}
        <ArrowRight />
      </li>
    );
  };

  return href ? SettingAsLink() : SettingMain();
};

export default SettingListItem;

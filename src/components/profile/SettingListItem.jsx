import { ArrowRight } from "lucide-react";
import dispatchables from "../../utils/dispatchables";
import React from "react";
import { Link } from "react-router-dom";

const SettingListItem = ({ href, title, handleClick }) => {
  const SettingAsLink = () => {
    return (
      <Link to={href} className="setting-opts">
        {title}
        <div className="hidden md:block">
          <ArrowRight />
        </div>
      </Link>
    );
  };

  const SettingMain = () => {
    return (
      <li className="setting-opts" onClick={() => handleClick(title)}>
        {title}
        <div className="hidden md:block">
          <ArrowRight />
        </div>
      </li>
    );
  };

  return href ? SettingAsLink() : SettingMain();
};

export default SettingListItem;

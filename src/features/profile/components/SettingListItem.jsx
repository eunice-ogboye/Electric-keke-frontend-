import { ArrowRight } from "lucide-react";
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
      <li
        className="setting-opts"
        onClick={(event) => handleClick(event, title)}
      >
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

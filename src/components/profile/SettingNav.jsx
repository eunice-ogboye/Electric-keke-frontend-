import { settings } from "../../constants";
import SettingListItem from "./SettingListItem";
import RegularList from "../shared/_design-pattern/RegularList";
import { LockScroll } from "@/utils/ScrollLock";

const SettingNav = ({ setIsModalOpen, setTypeOfModal }) => {
  const openGroupModal = (title) => {
    LockScroll();
    setIsModalOpen(true);
    setTypeOfModal(title);
  };
  return (
    <nav className="w-full tablet:w-[41%]">
      <h2 className="setting-title">Settings</h2>
      <ul className="space-y-[4.0625rem] mt-10">
        <RegularList
          list={settings}
          component={SettingListItem}
          handleClick={($event, title) => openGroupModal(title)}
        />

        <li
          className="setting-opts text-error !font-semibold"
          onClick={() => openGroupModal("Logout")}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default SettingNav;

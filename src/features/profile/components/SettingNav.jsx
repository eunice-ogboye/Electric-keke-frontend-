import { settings } from "../../../constants";
import SettingListItem from "./SettingListItem";
import RegularList from "@/components/_design-patterns/RegularList";

const SettingNav = ({  openModal, setTypeOfModal }) => {
  const openGroupModal = (title) => {
    openModal();
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

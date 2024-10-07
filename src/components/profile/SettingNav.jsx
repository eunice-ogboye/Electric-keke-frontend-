import dispatchables from "../../utils/dispatchables";
import { settings } from "../../constants";
import SettingListItem from "./SettingListItem";
import RegularList from "../shared/_design-pattern/RegularList";

const SettingNav = ({ setIsModalOpen, setTypeOfModal }) => {
  return (
    <nav className="w-full tablet:w-[41%]">
      <h2 className="setting-title">Settings</h2>
      <ul className="space-y-[4.0625rem] mt-10">
        <RegularList
          list={settings}
          component={SettingListItem}
          handleClick={(title) => {
            setIsModalOpen(true);
            setTypeOfModal(title);
          }}
        />

        <li
          className="setting-opts text-error !font-semibold"
          onClick={() => {
            setIsModalOpen(true);
            setTypeOfModal("Logout");
          }}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default SettingNav;

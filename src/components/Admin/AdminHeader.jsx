import SearchIcon from "../../assets/svg/SearchIcon";
import Bell from "../../assets/svg/Bell";
import { LogoPlain } from "@/assets/svg/Logo";
import { SmallInfo } from "../SmallInfo";

const AdminHeader = () => {
  
  return (
    <header className="admin-header">
      <LogoPlain styling="w-[84px] h-[56px]" />

      <div className="flex items-center justify-between gap-x-9">
        <div className="admin-icon">
          <SearchIcon />
        </div>
        <div className="admin-icon">
          <Bell />
        </div>

        <SmallInfo admin />
      </div>
    </header>
  );
};

export default AdminHeader;

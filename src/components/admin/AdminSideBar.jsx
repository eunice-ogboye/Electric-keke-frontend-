import React from "react";
import AdminNav from "./AdminNav";
import { Link, useNavigate } from "react-router-dom";
import SettingAdmin from "@/assets/svg/SettingAdmin";
import { Logout  } from "@/services/auth";
import dispatchables from "@/utils/dispatchables";
import LogoutIcon from "@/assets/svg/logout-icon";
import Btn from "../shared/btn/Btn";

const AdminSideBar = ({ setCurrentAdminPage }) => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const LogoutUser = () => {
    Logout();
    showAlert("Logged Out");
    navigate("/");
  };

  return (
    <div className="admin-sidebar">
      <div className="min-h-full">
        <AdminNav setCurrentAdminPage={setCurrentAdminPage} />

        <div className="admin-footer">
          <Link className="admin-footer-item">
            <div>
              <SettingAdmin color="black" />
            </div>
            <p className="">Help Center</p>
          </Link>

          <Btn icon={<LogoutIcon />} text="Logout" onClick={LogoutUser} styling="admin-footer-item" />
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;

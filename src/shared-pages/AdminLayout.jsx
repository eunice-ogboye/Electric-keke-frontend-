// import AdminSideBar from "../components/admin/AdminSideBar";
import Bell from "../assets/svg/Bell";
import SearchIcon from "../assets/svg/SearchIcon";
import Logo from "../components/Logo";
import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BoardManagement from "../components/admin/BoardManagement";
import Filter from "../components/Filter";
import Analytics from "../components/admin/Analytics";
import { getItemFromLs } from "../lib/ls";
import AdminNav from "../components/admin/AdminNav";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import OverviewInfo from "../components/admin/OverviewInfo";
import dispatchables from "../utils/dispatchables";
import logoutUser from "../lib/requests/auth/logout";

const AdminLayout = () => {
  const { showAlert } = dispatchables();

  const [currentAdminPage, setCurrentAdminPage] = useState("Overview");
  const [contentsToDisplay, setContentsToDisplay] = useState("All");
  const [user] = useState(getItemFromLs("user"));

  const { pathname } = useLocation();
  const activeLink = pathname.slice(7);

  const displayContent = (content) => {
    setContentsToDisplay((prev) => (prev === content ? "All" : content));
  };

  return (
    <section>
      <header className="admin-header">
        <Logo className="w-[84px] h-[56px]" />

        <div className="flex items-center justify-between gap-x-9">
          <div className="admin-icon">
            <SearchIcon />
          </div>
          <div className="admin-icon">
            <Bell />
          </div>

          <div className="admin-info">
            <div className="flex items-center gap-1">
              <div className="size-9 rounded-full">
                <img
                  src="/persons/rider1.png"
                  alt="rider"
                  className="size-full rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-sm">{user.fullname}</p>
                <p className="text-sm">Admin</p>
              </div>
            </div>

            <div>
              <img src="/admin-down.svg" alt="down" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex items-start gap-x-10">
        <div className="admin-sidebar">
          <div className="min-h-full">
            <AdminNav
              setCurrentAdminPage={setCurrentAdminPage}
              activeLink={activeLink}
            />

            <div className="admin-footer">
              <Link className="admin-footer-item">
                <div>
                  <img src="/users/setting.svg" alt="setting" />
                </div>
                <p className="">Help Center</p>
              </Link>

              <Button
                className="admin-footer-item"
                variant="ghost"
                onClick={async () => {
                  try {
                    await logoutUser(showAlert);
                    navigate("/");
                  } catch (error) {
                    showAlert(error.message);
                  }
                }}
              >
                <div>
                  <img src="/logout.svg" alt="logout" />
                </div>
                <p className="text-error">Logout</p>
              </Button>
            </div>
          </div>
        </div>

        <div className="overview">
          {currentAdminPage !== "Financial Management" && <BoardManagement />}

          <OverviewInfo
            currentPage={currentAdminPage}
            displayContent={displayContent}
          />

          {(currentAdminPage === "Overview" ||
            currentAdminPage === "Financial Management") && <Analytics />}

          <Outlet context={{ contentsToDisplay }} />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;

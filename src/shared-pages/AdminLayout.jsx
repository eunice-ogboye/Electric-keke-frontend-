import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BoardManagement from "../components/admin/BoardManagement";
import Analytics from "../components/admin/Analytics";
import AdminNav from "../components/admin/AdminNav";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import OverviewInfo from "../components/admin/OverviewInfo";
import dispatchables from "../utils/dispatchables";
import logoutUser from "../lib/requests/auth/logout";
import AdminHeader from "../components/admin/AdminHeader";

const AdminLayout = () => {
  const { showAlert } = dispatchables();

  const [currentAdminPage, setCurrentAdminPage] = useState("Overview");
  const [contentsToDisplay, setContentsToDisplay] = useState("All");
  

  const { pathname } = useLocation();
  const activeLink = pathname.slice(7);

  const displayContent = (content) => {
    setContentsToDisplay((prev) => (prev === content ? "All" : content));
  };

  return (
    <section>
      <AdminHeader />

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

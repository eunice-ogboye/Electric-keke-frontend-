import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BoardManagement from "../components/admin/BoardManagement";
import Analytics from "../components/admin/Analytics";
import OverviewInfo from "../components/admin/OverviewInfo";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSideBar from "@/components/admin/AdminSideBar";

const AdminLayout = () => {
  const [currentAdminPage, setCurrentAdminPage] = useState("Overview");
  const [contentsToDisplay, setContentsToDisplay] = useState("All");

  const changeContentToDisplay = (content) => {
    const display =
      content === "Active Users"
        ? "active"
        : content === "Inactive Users"
        ? "inactive"
        : content;
    setContentsToDisplay((prev) => (prev === display ? "All" : display));
  };

  return (
    <section>
      <AdminHeader />

      <div className="flex items-start gap-x-10">
        <AdminSideBar setCurrentAdminPage={setCurrentAdminPage} />

        <div className="overview">
          {currentAdminPage !== "Financial Management" && <BoardManagement />}

          <OverviewInfo
            currentPage={currentAdminPage}
            changeContentToDisplay={changeContentToDisplay}
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

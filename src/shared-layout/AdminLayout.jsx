import AdminSideBar from "../components/AdminSideBar";
import Bell from "../assets/svg/Bell";
import SearchIcon from "../assets/svg/SearchIcon";
import Logo from "../components/Logo";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import BoardManagement from "../components/Admin/BoardManagement";
import Filter from "../components/Filter";
import Analytics from "../components/Admin/Analytics";
import { getItemFromLs } from "../lib/ls";

const AdminLayout = ({children}) => {
  const [currentAdminPage, setCurrentAdminPage] = useState("Overview");
  const [usersToShow, setUsersToShow] = useState("All");
  const [user] = useState(getItemFromLs('user'))

  const showUsers = (whoAre) => {
    setUsersToShow((prev) => (prev === whoAre ? "All" : whoAre));
  };

  const changeAdminPage = (to) => {
    setCurrentAdminPage(to);
  };

  return (
    <section>
      <header className="flex items-center justify-between h-[104px] pl-8 pr-[7.75rem]">
        <Logo className="w-[84px] h-[56px]" />

        <div className="flex items-center justify-between gap-x-9">
          <div className="size-9 flex-center">
            <SearchIcon />
          </div>
          <div className="size-9 flex-center">
            <Bell />
          </div>

          <div className="w-[150px] p-1 border rounded-full flex items-center justify-between">
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
        <AdminSideBar
          currentAdminPage={currentAdminPage}
          changeAdminPage={changeAdminPage}
        />

        <div className="w-[calc(100vw-297px)] pr-[7.75rem]">
          {currentAdminPage !== "Financial Management" && <BoardManagement />}
          <div className="flex items-center justify-between mt-8">
            <div className="border">
              <h3 className="text-4xl font-extrabold text-silver">
                {currentAdminPage === "Overview"
                  ? "Dashboard Overview"
                  : currentAdminPage === "User Management"
                  ? "Manage Users"
                  : "Financial Management"}
              </h3>

              <p className="text-base">
                {currentAdminPage === "Overview"
                  ? "Manage users and track activities"
                  : currentAdminPage === "User Management"
                  ? "Manage Users"
                  : "Keep Track with finance"}
              </p>
            </div>

            <div className="flex items-center gap-x-3">
              <div className="flex-center border rounded-[12px] py-2 px-3 gap-x-2">
                <p className="font-inter text-base text-eco-neutral-thick">
                  Export
                </p>

                <div>
                  <img src="/admin-down.svg" alt="down" />
                </div>
              </div>

              <Filter
                className="w-[177px] p-3 rounded-[6px]"
                filterate={showUsers}
                handleClick={showUsers}
              />
            </div>
          </div>

          {(currentAdminPage === "Overview" ||
            currentAdminPage === "Financial Management") && <Analytics />}

          <Outlet context={{ usersToShow }} />
        </div>
      </div>
    </section>
  );
};

export default AdminLayout;

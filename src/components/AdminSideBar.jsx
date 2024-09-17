import { MenuIcon, UsersIcon } from "lucide-react";
import { admin_pages } from "../constants";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdminSideBar = ({ currentAdminPage, changeAdminPage }) => {
  return (
    <aside className="w-[297px] border mt-[77px]">
      <div className="mt-8 px-8 flex flex-col gap-2">
        {admin_pages.map((item) => {
          return (
            <Link
              to={item.href}
              onClick={() => changeAdminPage(item.title)}
              key={item.title}
            >
              <div
                className={`flex items-center gap-2 w-full max-w-[233px] py-3 px-5 rounded-[14px] border ${
                  item.title === currentAdminPage && "bg-eco-green"
                }`}
              >
                {/* <UsersIcon color={item.title === currentAdminPage ? "white" : "black"} /> */}
                <div>
                  <img src={item.icon} alt={item.title} />
                </div>
                <p
                  className={`${
                    item.title === currentAdminPage && "text-white"
                  } text-sm font-axiforma`}
                >
                  {item.title}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default AdminSideBar;

import { Link, useLocation } from "react-router-dom";
import { admin_nav_links } from "../../constants";
import React from "react";

const AdminNav = ({ setCurrentAdminPage }) => {
  const { pathname } = useLocation();
  const activeLink = pathname.slice(7);

  return (
    <div className="admin_nav">
      {admin_nav_links.map((item, index) => {
        const isActive =
          activeLink === item.href || (!activeLink && item.href === "/admin");

        return (
          <Link
            to={item.href}
            onClick={() => setCurrentAdminPage(item.title)}
            key={item.title}
          >
            <div className={` admin_nav_link ${isActive && "bg-basic"} `}>
              <div>
                <item.icon color={isActive ? "white" : "black"} />
              </div>
              <p
                className={`${isActive && "text-white"} text-sm font-axiforma`}
              >
                {item.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AdminNav;

import { Link } from "react-router-dom";
import { admin_nav_links } from "../../constants";
import React from "react";

const AdminNav = ({ setCurrentAdminPage, activeLink }) => {
  return (
    <div className="admin_nav">
      {admin_nav_links.map((item, index) => {
        const isActive = activeLink === item.href;

        return (
          <Link
            to={item.href}
            onClick={() => setCurrentAdminPage(item.title)}
            key={item.title}
          >
            <div className={` admin_nav_link ${isActive && "bg-eco-green"} `}>
              <div>
                <img src={item.icon} alt={item.title} />
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

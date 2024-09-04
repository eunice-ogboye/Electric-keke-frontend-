import { Link, useLocation } from "react-router-dom";
import { nav_links } from "../constants";
import React from "react";
import { cn } from "../lib/utils";

const NavBar = ({ dark }) => {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center gap-2 md:gap-3 lg:gap-8 list-none">
      {nav_links.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link to={item.href} key={item.title}>
            <li
              className={cn(
                `${dark ? "text-eco-neutral-prime" : "text-eco-white"} text-eiteen font-montserrat`,
                {
                  "text-eco-green font-bold": isActive,
                }
              )}
            >
              {item.title}
            </li>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;

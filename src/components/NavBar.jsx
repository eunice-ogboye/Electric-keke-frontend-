import { Link, useLocation } from "react-router-dom";
import { nav_links } from "../constants";
import React from "react";
import { cn } from "../lib/utils";

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-center gap-8 list-none">
      {nav_links.map((item) => {
        return item.href.startsWith("#") ? (
          <li
            key={item.title}
            className={cn("text-base-white text-[18px]", {
              "text-pgreen": pathname === item.href,
            })}
          >
            <a href={item.href}>{item.title}</a>
          </li>
        ) : (
          <Link to={item.href} key={item.title}>
            <li
              className={cn("text-base-white text-[18px]", {
                "text-pgreen": pathname === item.href,
              })}
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

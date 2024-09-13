import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { nav_links } from "../constants";
import React from "react";
import { cn } from "../lib/utils";

const NavBar = ({ dark }) => {
  const { pathname, hash } = useLocation();
  // console.log(pathname + hash);
  const joinedPath = pathname + hash;

  return (
    <nav className="flex items-center gap-2 md:gap-3 lg:gap-8 list-none">
      {nav_links.map((item) => {
        const isActive = item.href.startsWith("#")
          ? joinedPath === pathname + item.href
          : joinedPath === item.href;
        return (
          <Link to={item.href} key={item.title}>
            <li
              // className={`${dark ? 'text-eco-neutral-prime' : 'text-eco-white'} ${isActive && '!text-eco-green font-bold'}`}
              className={cn(
                `text-eiteen font-montserrat ${
                  dark ? "text-eco-neutral-prime" : "text-eco-white"
                } `,
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

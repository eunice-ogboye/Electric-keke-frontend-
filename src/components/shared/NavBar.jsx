import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { nav_links } from "../../constants";
import { cn } from "../../lib/utils";

const NavBar = ({ dark }) => {
  const { pathname } = useLocation();
  const regex = /driver/i;
  /**w
   * we want to take out the earn nav from the
   * header, is driver present in the url
   */
  const isDriverinTheUrl = regex.test(pathname);
  
  return (
    <nav className="flex items-center gap-2 md:gap-3 lg:gap-8 list-none">
      {nav_links.map((item) => {
        const isActive = item.href === pathname;
        const iAmEarn = item.href === "/earn-with-us" && isDriverinTheUrl;
        return iAmEarn ? null : (
          <Link to={item.href} key={item.title}>
            <li
              className={`text-eiteen ${
                dark ? "text-eco-neutral-prime" : "text-eco-white"
              } ${isActive && "!text-eco-green font-bold"}`}
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

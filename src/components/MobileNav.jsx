import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { nav_links } from "../constants";
import { cn } from "../lib/utils";

const MobileNav = () => {
  const { pathname } = useLocation();
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <img src="/menu.svg" alt="menu" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link to="/" className="cursor-pointer">
            <h1 className="font-bold">
              EcoRide
            </h1>
          </Link>

          <div className="mobile-nav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {nav_links.map((item) => {
                  return (
                    <SheetClose key={item.href} asChild>
                      <Link
                        to={item.href}
                        key={item.title}
                        className={cn("mobilenav-sheet_close w-full")}
                      >
                        <p className={cn("text-16 font-bold text-black-2 text-pgreen")}>
                          {item.title}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

import { Link, useLocation } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import { nav_links } from "../../constants";
import { cn } from "../../lib/utils";
import Menu from "../../assets/svg/Menu";
import { useDispatch } from "react-redux";
import { changeAuthPage } from "../../store/slices/global-slice";

const MobileNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const regex = /driver/i;
  /**w
   * we want to take out the earn nav from the
   * header, is driver present in the url
   */
  const isDriverinTheUrl = regex.test(pathname);

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Menu isDriverinTheUrl={isDriverinTheUrl} />
          {/* <img src="/menu.svg" alt="menu" /> */}
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link to="/" className="cursor-pointer">
            <h1 className="font-bold">EcoRide</h1>
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
                        <p
                          className={cn(
                            "text-16 font-bold text-black-2 text-eco-green"
                          )}
                        >
                          {item.title}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                <SheetClose asChild>
                  <Link
                    to="/authentication/login"
                    className={cn("mobilenav-sheet_close w-full")}
                    onClick={() => dispatch(changeAuthPage("login"))}
                  >
                    <p
                      className={cn(
                        "text-16 font-bold text-black-2 text-eco-green"
                      )}
                    >
                      Login
                    </p>
                  </Link>
                </SheetClose>
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;

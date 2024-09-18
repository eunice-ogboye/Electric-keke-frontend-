import { admin_nav_links } from "../constants";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoutUser from "../lib/requests/auth/logout";
import { Button } from "./ui/button";
import { useDispatch } from "react-redux";
import { alertUser, hideAlert } from "../store/slices/global-slice";

const AdminSideBar = ({ changeAdminPage }) => {
  const { pathname } = useLocation();
  const activeLink = pathname.slice(7);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showAlert = (msg) => {
    dispatch(alertUser(msg));
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);
  };

  return (
    <aside className="w-[297px] mt-[77px] min-h-screen pb-20 flex flex-col items-center">
      <div className="min-h-full">
        <div className="mt-8 flex flex-col gap-2 min-h-[calc(100vh-96px)]">
          {admin_nav_links.map((item, index) => {
            const isActive = activeLink === item.href;

            return (
              <Link
                to={item.href}
                onClick={() => changeAdminPage(item.title)}
                key={item.title}
              >
                <div
                  className={`flex items-center gap-2 w-full max-w-[233px] py-3 pl-5 rounded-[14px] border ${
                    isActive && "bg-eco-green"
                  } `}
                >
                  <div>
                    <img src={item.icon} alt={item.title} />
                  </div>
                  <p
                    className={`${
                      isActive && "text-white"
                    } text-sm font-axiforma`}
                  >
                    {item.title}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-2 min-h-[96px] border border-r-indigo-500">
          <Link className="flex items-center gap-2 w-full max-w-[233px] py-3 pl-5 rounded-[14px] border">
            <div>
              <img src="/users/setting.svg" alt="setting" />
            </div>
            <p className="">Help Center</p>
          </Link>

          <Button
            className="flex items-center gap-2 w-full max-w-[233px] py-3 pl-5 rounded-[14px] border"
            variant="ghost"
            onClick={async () => {
              try {
                await logoutUser(showAlert);
                navigate('/')
              } catch (error) {
                showAlert(error.message);
              }
            }}
          >
            <div>
              <img src="/logout.svg" alt="logout" />
            </div>
            <p className="text-error">Logout</p>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSideBar;

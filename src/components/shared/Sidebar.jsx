import React from "react";
import { RiAdminFill } from "react-icons/ri";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/Navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const { pathname } = useLocation();
  const linkClasses =
    " hover:no-underline flex gap-x-2 px-2 py-3 hover:bg-neutral-600 active:bg-neutral-700 items-center text-md";
  return (
    <div className="w-60 bg-neutral-900 flex flex-col text-white py-5 ">
      <div className="flex items-center gap-x-2 px-2 py-5">
        <RiAdminFill fontSize={22} />
        <span className="text-lg">ShreyaAdmin</span>
      </div>
      <div className="flex-1 flex-col justify-center px-1 py-3">
        {DASHBOARD_SIDEBAR_LINKS.map(({ key, label, path, icon }) => (
          <Link
            key={key}
            to={path}
            className={classNames(
              linkClasses,
              pathname === path
                ? "text-white bg-neutral-700"
                : "text-neutral-400"
            )}
          >
            {icon}
            {label}
          </Link>
        ))}
      </div>
      <div>
        <div className="h-[2px] mx-2 bg-neutral-700 shadow-md"></div>
        <div className="flex justify-center flex-col mt-5">
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map(({ key, label, path, icon }) => (
            <Link
              key={key}
              to={path}
              className={classNames(
                linkClasses,
                pathname === path
                  ? "text-white bg-neutral-700"
                  : "text-neutral-400"
              )}
            >
              {icon}
              {label}
            </Link>
          ))}
          <Link
            key="logout"
            className={classNames("text-red-500", linkClasses)}
            // path="/home"
            // onClick={logoutHandler}
          >
            <HiOutlineLogout fontSize={22} />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
const Layout = () => {
  return (
    <div className="flex flex-row bg-neutral-300 min-h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="py-2">{<Outlet />}</div>
        {/* <<div>Footer</div>> */}
      </div>
    </div>
  );
};

export default Layout;

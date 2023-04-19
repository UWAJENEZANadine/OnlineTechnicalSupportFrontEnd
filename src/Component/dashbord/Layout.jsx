import React from "react";
import DashSideBar from "./dashSidebar";
import DashHeader from "./dashHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-row h-screen w-screen overflow-hidden">
        <DashSideBar />
        <div className="">
          <DashHeader />
          <div>{<Outlet />}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;

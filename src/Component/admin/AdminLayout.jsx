import React from "react";
import DashHeader from "./dashHeader";
import { Outlet } from "react-router-dom";
import AdminDashSideBar from "./AdmindashSidebar";

const AdminLayout = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-row h-screen w-screen overflow-hidden">
        < AdminDashSideBar />
        <div className="">
          <DashHeader />
          <div>{<Outlet />}</div>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;

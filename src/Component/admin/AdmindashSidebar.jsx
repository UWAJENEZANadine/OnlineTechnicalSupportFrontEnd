import React from "react";
import { FcBullish } from "react-icons/fc";
import { SUPPORT_SIDEBAR_LINKS } from "./constants/navigation";
import { Link } from "react-router-dom";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-4 hover:bg-blue-800 hover:no-underline active:bg-blue-500 rounded-sm text-base";
export default function AdminDashSideBar() {
  return (
    <div className="flex flex-col bg-gray-900 w-60 p-3 text-white">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish fontSize={24} />
        <span className="text-blue-400">Profile</span>
      </div>
      <div className="flex-1">
        {SUPPORT_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
}
function SidebarLink({ item }) {
  return (
    <Link to={item.path} className={linkClass}>
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

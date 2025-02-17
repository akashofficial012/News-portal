import React from "react";
import { FiHome, FiUser, FiFileText } from "react-icons/fi";
import { FaRegPlusSquare } from "react-icons/fa";
import Link from "next/link";

const NavItem = ({ icon: Icon, label, href }) => {
  if (!href) {
    console.error(`Invalid href for NavItem: ${label}`);
    return null;
  }

  return (
    <Link
      className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md hover:bg-gray-100 hover:text-gray-700"
      href={href}
    >
      <Icon className="w-5 h-5" />
      <span className="mx-4 font-medium">{label}</span>
    </Link>
  );
};

export default function LeftSidebar() {
  return (
    <div>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r">
        <Link href="/">
          <img
            className="w-auto h-6 sm:h-7"
            src="https://merakiui.com/images/logo.svg"
            alt="Logo"
          />
        </Link>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <NavItem icon={FiHome} label="Dashboard" href="/dashboard" />
            <NavItem icon={FaRegPlusSquare} label="News" href="/dashboard/add-news" />
            <NavItem icon={FiUser} label="Accounts" href="/accounts" />
            <NavItem icon={FiUser} label="Profile" href="/profile" />
          </nav>
        </div>
      </aside>
    </div>
  );
}

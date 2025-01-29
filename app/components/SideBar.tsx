import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router";

const navLinks = [
  {
    id: 1,
    title: "Dashboard",
    url: "/",
  },
  {
    id: 2,
    title: "Users",
    url: "/users",
  },
  {
    id: 3,
    title: "Products",
    url: "/products",
  },
  {
    id: 6,
    title: "Settings",
    url: "/settings",
  },
];
const SideBar = () => {
  const location = useLocation();
  const active = location.pathname;
  return (
    <aside className="w-[200px] bg-blue-600 min-h-screen flex flex-col fixed left-0 to-0">
      <div className="p-4 w-full text-center">LOGO</div>
      <ul className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <li
            key={link.id}
            
          >
            <Link to={link.url} className={`flex items-center gap-2 p-4 hover:bg-blue-500 hover:text-white hover:cursor-pointer ${
              active === link.url ? "bg-blue-300 text-blue-500" : ""
            }`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;

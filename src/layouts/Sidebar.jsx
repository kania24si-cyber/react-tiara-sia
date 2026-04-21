import {
  MdDashboard,
  MdAdd,
  MdShoppingCart,
  MdPeople,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Sidebar({ dark, open }) {
      const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`;
  return (
    <div
      id="sidebar"
      className={`flex min-h-screen flex-col p-6 shadow-lg transition-all duration-300 ${
        open ? "w-[320px]" : "w-24"
      } ${dark ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      {/* LOGO */}
      <div className="flex flex-col">
        <span className="font-bold text-4xl">
          Sedap<b className="text-green-500">.</b>
        </span>

        {open && (
          <span className="text-gray-400 text-sm font-semibold">
            Modern Admin Dashboard
          </span>
        )}
      </div>

      {/* MENU */}
      <div id="sidebar-menu" className="mt-10">
        <ul className="space-y-3">
          {/* DASHBOARD */}
          <li>
            <NavLink
              to="/"
              className={menuClass}
            >
              <MdDashboard className="text-2xl min-w-[24px]" />
              {open && <span>Dashboard</span>}
            </NavLink>
          </li>

          {/* ORDERS */}
          <li>
            <NavLink
              to="/Orders"
              className={menuClass}
            >
              <MdShoppingCart className="text-2xl min-w-[24px]" />
              {open && <span>Orders</span>}
            </NavLink>
          </li>

          {/* CUSTOMERS */}
          <li>
            <NavLink
              to="/Customers"
              className={menuClass}
            >
              <MdPeople className="text-2xl min-w-[24px]" />
              {open && <span>Customers</span>}
            </NavLink>
          </li>
        </ul>
      </div>

      {/* FOOTER */}
      <div className="mt-auto">
        <div className="bg-green-500 rounded-xl p-4 shadow-lg mb-6">
          <div className="text-white text-sm">
            {open && (
              <>
                <p>Please organize your menus through button below!</p>

                <div className="flex items-center justify-center bg-white text-gray-700 rounded-lg p-2 mt-3 gap-2">
                  <MdAdd className="text-xl" />
                  <span>Add Menus</span>
                </div>
              </>
            )}

            {!open && (
              <div className="flex justify-center">
                <MdAdd className="text-2xl text-white" />
              </div>
            )}
          </div>
        </div>

        {open && (
          <>
            <span className="font-bold text-gray-400 text-sm">
              Sedap Restaurant Admin Dashboard
            </span>

            <p className="text-gray-400 text-xs mt-1">
              &copy; 2025 All Right Reserved
            </p>
          </>
        )}
      </div>
    </div>
  );
}
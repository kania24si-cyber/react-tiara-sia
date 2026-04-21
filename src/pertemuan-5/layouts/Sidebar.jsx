import {
  MdDashboard,
  MdAdd,
  MdShoppingCart,
  MdPeople,
} from "react-icons/md";

export default function Sidebar({ dark, open }) {
  return (
    <div
      id="sidebar"
      className={`flex min-h-screen flex-col p-10 shadow-lg transition-all duration-300 ${
        open ? "w-[360px]" : "w-20"
      } ${dark ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      {/* Logo */}
      <div className="flex flex-col">
        <span className="font-poppins font-[1000] text-[48px]">
          Sedap<b className="text-green-500">.</b>
        </span>

        {open && (
          <span className="text-gray-400 font-semibold font-barlow">
            Modern Admin Dashboard
          </span>
        )}
      </div>

      {/* List Menu */}
      <div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          {/* Dashboard */}
          <li>
            <div
              id="menu-1"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              <MdDashboard className="text-2xl min-w-[24px]" />
              <span className={open ? "ml-4" : "hidden"}>
                Dashboard
              </span>
            </div>
          </li>

          {/* Orders */}
          <li>
            <div
              id="menu-2"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              <MdShoppingCart className="text-2xl min-w-[24px]" />
              <span className={open ? "ml-4" : "hidden"}>
                Orders
              </span>
            </div>
          </li>

          {/* Customers */}
          <li>
            <div
              id="menu-3"
              className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold"
            >
              <MdPeople className="text-2xl min-w-[24px]" />
              <span className={open ? "ml-4" : "hidden"}>
                Customers
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Footer */}
      <div id="sidebar-footer" className="mt-auto">
        <div
          id="footer-card"
          className="bg-hijau px-4 py-2 rounded-md shadow-lg mb-10 flex items-center"
        >
          <div id="footer-text" className="text-white text-sm">
            {open && (
              <>
                <span>
                  Please organize your menus through button below!
                </span>

                <div
                  id="add-menu-button"
                  className="flex justify-center items-center p-2 mt-3 bg-white rounded-md space-x-2"
                >
                  <div className="text-gray-600 flex items-center">
                    <MdAdd className="mr-2 text-xl" />
                    <span>Add Menus</span>
                  </div>
                </div>
              </>
            )}

            {!open && (
              <div className="flex justify-center">
                <MdAdd className="text-2xl" />
              </div>
            )}
          </div>

          {open && (
            <img
              id="footer-avatar"
              src="https://avatar.iran.liara.run/public/28"
              className="w-20 rounded-full"
            />
          )}
        </div>

        {open && (
          <>
            <span
              id="footer-brand"
              className="font-bold text-gray-400"
            >
              Sedap Restaurant Admin Dashboard
            </span>

            <p
              id="footer-copyright"
              className="font-light text-gray-400"
            >
              &copy; 2025 All Right Reserved
            </p>
          </>
        )}
      </div>
    </div>
  );
}
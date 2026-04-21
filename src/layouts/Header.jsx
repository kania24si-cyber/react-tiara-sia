import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header({
  dark,
  setDark,
  open,
  setOpen,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4 gap-4"
    >
      {/* SEARCH */}
      <div id="search-bar" className="relative w-full max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          onClick={() => setShowModal(true)}
          className={`w-full p-3 pr-10 rounded-xl border outline-none ${
            dark
              ? "bg-gray-800 border-gray-700 text-white"
              : "bg-white border-gray-200 text-gray-700"
          }`}
        />

        <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-xl w-96 shadow-xl ${
              dark
                ? "bg-gray-800 text-white"
                : "bg-white text-gray-800"
            }`}
          >
            <h2 className="text-xl font-bold mb-4">Search</h2>

            <input
              type="text"
              placeholder="Type something..."
              className="w-full border p-3 rounded-lg mb-4 text-black"
            />

            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* RIGHT SIDE */}
      <div
        id="icons-container"
        className="flex items-center space-x-4"
      >
        {/* TOGGLE SIDEBAR */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-gray-200 rounded-lg"
        >
          ☰
        </button>

        {/* DARK MODE */}
        <button
          onClick={() => setDark(!dark)}
          className="p-2 bg-gray-200 rounded-lg"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* NOTIF */}
        <div className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer">
          <FaBell />

          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 text-xs">
            50
          </span>
        </div>

        {/* CHART */}
        <div className="p-3 bg-blue-100 rounded-2xl cursor-pointer">
          <FcAreaChart />
        </div>

        {/* SETTINGS */}
        <div className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer">
          <SlSettings />
        </div>

        {/* PROFILE */}
        <div className="flex items-center space-x-4 border-l pl-4 border-gray-300">
          <span className="hidden lg:block">
            Hello, <b>Tiara Kania Noer Riska</b>
          </span>

          <img
            src="img\image.png"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
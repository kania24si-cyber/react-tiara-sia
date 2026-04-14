import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";
import { useState } from "react";

export default function Header({ setDark, dark, setOpen, open }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative w-full max-w-lg">
        {/*
    <input
    id="search-input"
    type="text"
    placeholder="Search Here..."
    className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none"
/>

<FaSearch 
    id="search-icon" 
    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
/>
*/}

        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          onClick={() => setShowModal(true)}
          className={`border p-2 pr-10 w-full max-w-lg rounded-md outline-none ${
            dark
              ? "bg-gray-800 text-white border-gray-700"
              : "bg-white border-gray-100"
          }`}
        />
      </div>

      {/*Tambahan*/}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`p-6 rounded-lg w-96 ${dark ? "bg-gray-800 text-white" : "bg-white"}`}
          >
            <h2 className="text-xl font-bold mb-4">Search</h2>

            <input
              type="text"
              placeholder="Type something..."
              className="w-full border p-2 rounded-md mb-4"
            />

            <button
              onClick={() => setShowModal(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 bg-gray-200 rounded-lg"
        >
          ☰
        </button>
        <button
          onClick={() => setDark(!dark)}
          className="p-2 bg-gray-200 rounded-lg"
        >
          🌙
        </button>
        {/* Icons */}
        <div
          id="notification-icon"
          className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer"
        >
          <FaBell />
          <span
            id="notification-badge"
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-200 rounded-full px-2 py-1 text-xs"
          >
            50
          </span>
        </div>

        <div
          id="chart-icon"
          className="p-3 bg-blue-100 rounded-2xl cursor-pointer"
        >
          <FcAreaChart />
        </div>
        <div
          id="settings-icon"
          className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer"
        >
          <SlSettings />
        </div>

        {/* Profile Section */}
        <div
          id="profile-container"
          className="flex items-center space-x-4 border-l pl-4 border-gray-300"
        >
          <span id="profile-text">
            Hello, <b>Tiara Kania Noer Riska</b>
          </span>
          <img
            id="profile-avatar"
            src="https://avatar.iran.liara.run/public/28"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

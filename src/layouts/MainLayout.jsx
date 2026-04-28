import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
export default function MainLayout(){
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(true);
return (
    <div
      className={`flex min-h-screen ${
        dark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* SIDEBAR */}
      <Sidebar dark={dark} open={open} />

      {/* CONTENT */}
      <div className="flex-1 p-4">
        {/* HEADER */}
        <Header dark={dark} setDark={setDark} open={open} setOpen={setOpen} />

          {/* ROUTES */}
        <Outlet/>
      </div>
    </div>
  );
}

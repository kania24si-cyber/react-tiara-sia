import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";

import "./assets/tailwind.css";

function App() {
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
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/Orders" element={<Orders dark={dark} />} />
          <Route path="/Customers" element={<Customers dark={dark} />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;

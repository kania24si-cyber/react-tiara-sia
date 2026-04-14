import { createRoot } from "react-dom/client";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import './assets/tailwind.css';
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div className={dark ? "bg-black text-white min-h-screen flex" : "bg-gray-100 min-h-screen flex"}>
      <div className="flex flex-row flex-1">
        <Sidebar dark={dark} open={open}/>

        <div className="flex-1 p-4">
         <Header setDark={setDark} dark={dark} setOpen={setOpen} open={open} /> {/* kirim ke Header */}
          <Dashboard dark={dark} />
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
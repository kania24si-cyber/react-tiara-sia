import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import "./assets/tailwind.css";

import BadRequest from "./pages/BadRequest";
import Unauthorized from "./pages/Unauthorized";
import Forbidden from "./pages/Forbidden";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";

function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(true);

  return (

        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Dashboard dark={dark} />} />
          <Route path="/Orders" element={<Orders dark={dark} />} />
          <Route path="/Customers" element={<Customers dark={dark} />} />

          <Route path="/400" element={<BadRequest />} />
          <Route path="/401" element={<Unauthorized />} />
          <Route path="/403" element={<Forbidden />} />

          <Route path="*" element={<NotFound />} />
          </Route>

             <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
        </Routes>
  )
}

export default App;
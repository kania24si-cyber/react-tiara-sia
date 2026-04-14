import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard({ dark }) { 
  return (
    <div id="dashboard-container">
      <PageHeader />

      <div
        id="dashboard-grid"
        className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
      >

        {/* ORDERS */}
        <div
          className={`flex items-center gap-4 p-4 rounded-xl shadow ${
            dark ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <div className="bg-green-500 rounded-full p-4 text-3xl text-white">
            <FaShoppingCart />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">75</span>
            <span className={dark ? "text-gray-300" : "text-gray-400"}>
              Total Orders
            </span>
          </div>
        </div>

        {/* DELIVERED */}
        <div
          className={`flex items-center gap-4 p-4 rounded-xl shadow ${
            dark ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <div className="bg-blue-500 rounded-full p-4 text-3xl text-white">
            <FaTruck />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">175</span>
            <span className={dark ? "text-gray-300" : "text-gray-400"}>
              Total Delivered
            </span>
          </div>
        </div>

        {/* CANCELED */}
        <div
          className={`flex items-center gap-4 p-4 rounded-xl shadow ${
            dark ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <div className="bg-red-500 rounded-full p-4 text-3xl text-white">
            <FaBan />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">40</span>
            <span className={dark ? "text-gray-300" : "text-gray-400"}>
              Total Canceled
            </span>
          </div>
        </div>

        {/* REVENUE */}
        <div
          className={`flex items-center gap-4 p-4 rounded-xl shadow ${
            dark ? "bg-gray-800 text-white" : "bg-white"
          }`}
        >
          <div className="bg-yellow-500 rounded-full p-4 text-3xl text-white">
            <FaDollarSign />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Rp.128</span>
            <span className={dark ? "text-gray-300" : "text-gray-400"}>
              Total Revenue
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
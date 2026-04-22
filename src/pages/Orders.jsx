import orders from "../data/orders.json";
import PageHeader from "../components/PageHeader";
import { useState } from "react";

export default function Orders ({ dark }) {
const [showForm, setShowForm] = useState(false);
  return (
     <>
      <PageHeader
        title="Orders"
        breadcrumb={["Dashboard", "Orders"]}
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Orders
        </button>
      </PageHeader>

         {/* FORM */}
      {showForm && (
        <div className="bg-white p-5 rounded-lg shadow m-4">
          <h2 className="text-xl font-bold mb-4">
            Add Order
          </h2>

          <input
            type="text"
            placeholder="Order ID"
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="text"
            placeholder="Customer Name"
            className="border p-2 w-full mb-3 rounded"
          />

          <select className="border p-2 w-full mb-3 rounded">
            <option>Pending</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>

          <input
            type="number"
            placeholder="Total Price"
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="date"
            className="border p-2 w-full mb-3 rounded"
          />

          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Save
            </button>

            <button
              onClick={() => setShowForm(false)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="p-4">
        <table className="w-full bg-white rounded-lg shadow">
          <thead className="bg-green-500 text-white">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((item) => (
              <tr
                key={item.id}
                className="border-b text-center"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.customer}</td>
                <td className="p-3">{item.status}</td>
                <td className="p-3">Rp {item.total}</td>
                <td className="p-3">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </> 
  );
}
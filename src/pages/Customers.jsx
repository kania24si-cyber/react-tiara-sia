import customers from "../data/customers.json";
import PageHeader from "../components/PageHeader";
import { useState } from "react";

export default function Customers ({ dark }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className={dark ? "bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}
    >
       <PageHeader
        title="Customers"
        breadcrumb={["Dashboard", "Customers"]}
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Customer
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-5 rounded-lg shadow m-4">
          <h2 className="text-xl font-bold mb-4">
            Add Customer
          </h2>

          <input
            type="text"
            placeholder="Customer ID"
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="text"
            placeholder="Customer Name"
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 w-full mb-3 rounded"
          />

          <input
            type="text"
            placeholder="Phone"
            className="border p-2 w-full mb-3 rounded"
          />

          <select className="border p-2 w-full mb-3 rounded">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>

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
              <th className="p-3">Customer ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Loyalty</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((item) => (
              <tr
                key={item.id}
                className="border-b text-center"
              >
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3">{item.loyalty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
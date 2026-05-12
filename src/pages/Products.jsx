import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import products from "../data/products.json";

export default function Products({ dark }) {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className={
        dark
          ? "bg-gray-900 min-h-screen text-white"
          : "bg-gray-100 min-h-screen text-black"
      }
    >
      <PageHeader
        title="Products"
        breadcrumb={["Dashboard", "Products"]}
      >
        <button
          onClick={() => setShowForm(true)}
          className="bg-hijau text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </button>
      </PageHeader>

      <div className="p-6">
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full border-collapse">
            <thead className="bg-hijau text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Category</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Stock</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-100"
                >
                  <td className="p-3">{product.id}</td>

                  <td className="p-3">
                    <Link
                      to={`/products/${product.id}`}
                      className="text-emerald-500 hover:text-emerald-700 font-medium"
                    >
                      {product.name}
                    </Link>
                  </td>

                  <td className="p-3">{product.category}</td>

                  <td className="p-3">
                    Rp {product.price.toLocaleString("id-ID")}
                  </td>

                  <td className="p-3">{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
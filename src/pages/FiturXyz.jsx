import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";


export default function FiturXYz({ dark }) {
  const [showForm, setShowForm] = useState(false);
  return (
    <div
      className={dark ? "bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}
    >
      <PageHeader title="Fitur Xyz" breadcrumb={["Dashboard", "Fitur Xyz"]}>
      </PageHeader>
      </div>
  );
}


import PageHeader from "../components/PageHeader";

export default function Customers ({ dark }) {
  return (
    <div className={dark ? "bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}>
      <PageHeader />
      <h1> halo ini adalah customer tiara</h1>

    </div>
  );
}
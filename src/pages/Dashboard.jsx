import {
  FaShoppingCart,
  FaTruck,
  FaBan,
  FaDollarSign,
} from "react-icons/fa";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import PageHeader from "../components/PageHeader";

export default function Dashboard({ dark }) {
  const lineData = [
    { day: "Sun", total: 20 },
    { day: "Mon", total: 45 },
    { day: "Tue", total: 30 },
    { day: "Wed", total: 65 },
    { day: "Thu", total: 35 },
    { day: "Fri", total: 55 },
    { day: "Sat", total: 70 },
  ];

  const revenueData = [
    { month: "Jan", income: 20, expense: 15 },
    { month: "Feb", income: 35, expense: 25 },
    { month: "Mar", income: 30, expense: 20 },
    { month: "Apr", income: 50, expense: 35 },
    { month: "May", income: 45, expense: 30 },
    { month: "Jun", income: 60, expense: 40 },
  ];

  const customerMap = [
    { day: "Sun", total: 60 },
    { day: "Mon", total: 80 },
    { day: "Tue", total: 40 },
    { day: "Wed", total: 70 },
    { day: "Thu", total: 60 },
    { day: "Fri", total: 25 },
    { day: "Sat", total: 60 },
  ];

  const cardStyle = dark
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-800";

  return (
    <div className={dark ? "bg-gray-900 min-h-screen" : "bg-gray-100 min-h-screen"}>
      <PageHeader />

      {/* SUMMARY */}
      <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card dark={dark} icon={<FaShoppingCart />} color="bg-green-500" total="75" title="Total Orders" />
        <Card dark={dark} icon={<FaTruck />} color="bg-blue-500" total="175" title="Delivered" />
        <Card dark={dark} icon={<FaBan />} color="bg-red-500" total="40" title="Canceled" />
        <Card dark={dark} icon={<FaDollarSign />} color="bg-yellow-500" total="Rp128 jt" title="Revenue" />
      </div>

      {/* TOP CHART */}
      <div className="px-5 grid lg:grid-cols-2 gap-4">
        {/* PIE CHART */}
        <div className={`p-5 rounded-2xl shadow ${cardStyle}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg">Pie Chart</h2>

            <div className="flex items-center gap-4 text-sm">
              <label className="flex items-center gap-1">
                <input type="checkbox" />
                Chart
              </label>

              <label className="flex items-center gap-1">
                <input type="checkbox" defaultChecked />
                Show Value
              </label>

              <span className="text-gray-400 text-lg">⋮</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            {/* ORDER */}
            <div>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={[{ value: 81 }, { value: 19 }]}
                    dataKey="value"
                    innerRadius={35}
                    outerRadius={50}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#ff5b5b" />
                    <Cell fill="#ffe3e3" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <h1 className="font-bold -mt-16 mb-10 text-lg">81%</h1>
              <p className="text-sm">Total Order</p>
            </div>

            {/* GROWTH */}
            <div>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={[{ value: 22 }, { value: 78 }]}
                    dataKey="value"
                    innerRadius={35}
                    outerRadius={50}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#10b981" />
                    <Cell fill="#dcfce7" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <h1 className="font-bold -mt-16 mb-10 text-lg">22%</h1>
              <p className="text-sm">Customer Growth</p>
            </div>

            {/* REVENUE */}
            <div>
              <ResponsiveContainer width="100%" height={120}>
                <PieChart>
                  <Pie
                    data={[{ value: 62 }, { value: 38 }]}
                    dataKey="value"
                    innerRadius={35}
                    outerRadius={50}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <Cell fill="#3b82f6" />
                    <Cell fill="#dbeafe" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>

              <h1 className="font-bold -mt-16 mb-10 text-lg">62%</h1>
              <p className="text-sm">Total Revenue</p>
            </div>
          </div>
        </div>

        {/* WEEKLY ORDER */}
        <div className={`p-5 rounded-2xl shadow ${cardStyle}`}>
          <h2 className="font-bold text-lg mb-4">Chart Order</h2>

          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#3b82f6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* BOTTOM CHART */}
      <div className="p-5 grid lg:grid-cols-3 gap-4">
        <div className={`lg:col-span-2 p-5 rounded-2xl shadow ${cardStyle}`}>
          <h2 className="font-bold text-lg mb-4">Total Revenue</h2>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="income" stroke="#3b82f6" strokeWidth={3} />
              <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className={`p-5 rounded-2xl shadow ${cardStyle}`}>
          <h2 className="font-bold text-lg mb-4">Customer Map</h2>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={customerMap}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#f59e0b" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

/* CARD */
function Card({ dark, icon, color, total, title }) {
  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-2xl shadow ${
        dark ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <div className={`${color} p-4 rounded-full text-white text-2xl`}>
        {icon}
      </div>

      <div>
        <h1 className="text-2xl font-bold">{total}</h1>
        <p className={dark ? "text-gray-300" : "text-gray-500"}>
          {title}
        </p>
      </div>
    </div>
  );
}
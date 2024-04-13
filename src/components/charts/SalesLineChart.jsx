import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SalesLineChart() {
  //
  const data = [
    { month: "Jan", sales: 12, service: 24 },
    { month: "Feb", sales: 69, service: 46 },
    { month: "Mar", sales: 70, service: 68 },
    { month: "Apr", sales: 22, service: 34 },
    { month: "May", sales: 29, service: 63 },
    { month: "Jun", sales: 18, service: 13 },
    { month: "Jul", sales: 37, service: 66 },
    { month: "Aug", sales: 70, service: 44 },
    { month: "Sep", sales: 63, service: 44 },
    { month: "Oct", sales: 46, service: 60 },
    { month: "Nov", sales: 13, service: 39 },
    { month: "Dec", sales: 70, service: 14 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} width={500} height={350} margin={{ right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            fillOpacity={0.6}
            axisLine={false}
            tick={{
              fontSize: 14.22,
              fill: "#333",
              fontFamily: "Urbanist",
              fontWeight: 400,
            }}
            stroke={"tansparent"}
          />
          <YAxis
            fillOpacity={0.6}
            axisLine={false}
            tick={{
              fontSize: 14.22,
              fill: "#333",
              fontFamily: "Urbanist",
              fontWeight: 400,
            }}
            stroke={"tansparent"}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#333",
              borderRadius: "5px",
              boxShadow: "0 0 10px #ccc",
            }}
          />
          <Line
            type="monotone"
            dataKey="sales"
            fill="#345995"
            stroke="#345995"
            strokeWidth={4}
          />
          <Line
            type="monotone"
            dataKey="service"
            fill="#F18F01"
            stroke="#F18F01"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

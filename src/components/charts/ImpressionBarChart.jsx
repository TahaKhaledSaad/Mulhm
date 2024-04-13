import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "./style.css";

function ImpressionBarChart() {
  const data = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 30 },
    { name: "Apr", value: 40 },
  ];

  return (
    <div className="bar-chart-container">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} width={500} height={200} margin={{ right: 30 }}>
          <XAxis
            dataKey="name"
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
          <Bar dataKey="value" fill="#345995" barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ImpressionBarChart;

import {
  BarChart,
  Bar,
  YAxis,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import "./style.css";

export default function ActiveUsersBarChart() {
  const data = [
    { active: 10, all: 45 },
    { active: 20, all: 30 },
    { active: 40, all: 45 },
    { active: 40, all: 45 },
    { active: 30, all: 35 },
    { active: 10, all: 45 },
    { active: 20, all: 30 },
    { active: 40, all: 45 },
  ];

  return (
    <div className="bar-chart-container mt-2">
      <ResponsiveContainer width="100%" height={230}>
        <BarChart data={data} width={500} height={200} margin={{ right: 30 }}>
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
          <XAxis
            fillOpacity={0}
            axisLine={false}
            tick={{
              display: "none",
            }}
            stroke={"tansparent"}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              color: "#333",
              borderRadius: "5px",
              boxShadow: "0 0 10px #ccc",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <Bar dataKey="all" fill="#ccc" stackId="a" barSize={5} />
          <Bar dataKey="active" fill="#345995" stackId="a" barSize={5} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

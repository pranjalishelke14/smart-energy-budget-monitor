import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function EnergyPie({ data }) {
  const COLORS = ["#6366F1", "#22C55E", "#EC4899", "#F97316"];

  return (
    <PieChart width={280} height={280}>
      <Pie
        data={data}
        dataKey="cost"
        nameKey="name"
        outerRadius={100}
        label
      >
        {data.map((_, i) => (
          <Cell key={i} fill={COLORS[i % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}

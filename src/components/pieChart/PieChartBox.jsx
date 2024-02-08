import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChart.scss";

const data = [
  { name: "Laptop", value: 400, color: "#0088FE" },
  { name: "Mobile", value: 300, color: "#00C49F" },
  { name: "Speaker", value: 300, color: "#FFBB28" },
  { name: "Headphone", value: 200, color: "#FF8042" },
];

function PieChartBox() {
  return (
    <div className="pieChart">
      <h1>Leads by source</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
            <Tooltip
              contentStyle={{ backgroundColor: "white", border: "none" }}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}> 
            <div className="detail">
              <span className="dot" style={{ background: item.color }}></span>
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;

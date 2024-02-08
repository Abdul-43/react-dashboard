import React from "react";
import "./bigCharts.scss";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Sun",
    js: 4000,
    css: 2400,
    html: 2400,
  },
  {
    name: "Mon",
    js: 3000,
    css: 1398,
    html: 2210,
},
  {
    name: "Tue",
    js: 2000,
    css: 9800,
    html: 2290,
  },
  {
    name: "Wed",
    js: 2780,
    css: 3908,
    html: 2000,
  },
  {
    name: "Thu",
    js: 1890,
    css: 4800,
    html: 2181,
  },
  {
    name: "Fri",
    js: 2390,
    css: 3800,
    html: 2500,
  },
  {
    name: "Sat",
    js: 3490,
    css: 4300,
    html: 2100,
  },
];

function BigCharts() {
  return (
    <div className="bigChart">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="js"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="css"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="html"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BigCharts;

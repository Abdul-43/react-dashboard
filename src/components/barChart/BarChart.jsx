import React from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChart.scss";

function BarCharts(props) {
  return (
    <div className="barChart">
      <h1>{props.title}</h1>
      <div className="chart">
        <ResponsiveContainer height={150} width="99%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{
                background: "#2a3447",
                borderRadius: "10px",
              }}
              labelStyle={{ display: "none", border: `${props.color}` }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default BarCharts;

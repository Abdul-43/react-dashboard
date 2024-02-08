import "./chartBox.scss";
import { Link } from "react-router-dom";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

function ChartBox(props) {
  return (
    <div className="chartBox" style={{ color: props.color }}>
      <div className="chartData">
        <div className="top">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h2>{props.number}</h2>
        <Link to="/">View all</Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 70 }}
              />
              {/* <Legend /> */}
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="chartTexts">
          <span
            className="percentage"
            style={{ color: `${props.percentage} `> 0 ? "green" : "red" }}
          >
            {props.percentage}%
          </span>
          <span>this month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;

import React from "react";
import "./single.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function Single(props) {
  return (
    <div className="single">
      <div className="left">
        <div className="info">
          <div className="profile">
            {props.img && <img src={props.img} alt="" />}
            <h2>{props.title}</h2>
            <button>Update</button>
          </div>
          <div className="profileData">
            {Object.entries(props.info).map((info) => (
              <div key={info.name}>
                <span className="title">{info[0]} : </span>
                <span>{info[1]} </span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div className="chart">
          {props.chart && (
            <ResponsiveContainer width="95%" height="95%">
              <LineChart
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
      <div className="right">
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Single;

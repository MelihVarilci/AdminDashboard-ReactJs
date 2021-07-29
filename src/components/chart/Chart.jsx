import React from "react";
import "./Chart.css";
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  YAxis,
} from "recharts";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        {/* <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart> */}
        <AreaChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <YAxis />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Tooltip />
          <Legend />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

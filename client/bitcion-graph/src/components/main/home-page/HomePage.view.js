
import React from "react";
import './HomePage.style.css';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function HomePageView({ data, setFilterDate, filterDate }) {
  return (
    <div className="contianer">
      <div className="fiter-buttons">
      <button
          onClick={() => setFilterDate(364)}
        >
          last year
        </button>
        <button
          onClick={() => setFilterDate(30)}
        >
          last month
        </button>
        <button
          onClick={() => setFilterDate(7)}
        >
          last week
        </button>
        <button
          onClick={() => setFilterDate(1)}
        >
          last day
        </button>
      </div>
      
        <h1>Bitcoin Price Data</h1>
        <div className="graph">
        <LineChart
          width={800}
          height={400}
          
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date"
          />
          <YAxis />
          <Tooltip />
        
          <Line type="monotone" dataKey="price" interval={90} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
}

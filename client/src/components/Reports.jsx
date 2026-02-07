import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'AC', cost: 3200 },
  { name: 'Fridge', cost: 800 },
  { name: 'Lights', cost: 400 },
  { name: 'TV', cost: 300 },
];

export default function Reports() {
  return (
    <div className="p-4">
      <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
        <h4 className="fw-bold mb-4">Monthly Cost Analysis</h4>
        
        <div className="alert alert-warning border-0 rounded-4 mb-4">
          ⚠️ <strong>Budget Check:</strong> You have spent <strong>₹4,700</strong> out of your <strong>₹5,000</strong> limit.
        </div>

        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cost" fill="#4e73df" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
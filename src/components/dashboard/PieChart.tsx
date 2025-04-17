
import React from 'react';
import { PieChart as RechartsPieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: DataItem[];
  title: string;
  total: number;
}

const PieChart: React.FC<PieChartProps> = ({ data, title, total }) => {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="text-dashboard-red font-bold">{title}</div>
      <div className="text-3xl font-bold">{total.toLocaleString()}</div>
      <div className="w-full h-40">
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius={70}
              fill="#8884d8"
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 w-full gap-2 px-4">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="text-dashboard-blue font-bold">{item.value.toLocaleString()}</div>
            <div className="text-xs">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;


import React from 'react';
import { Circle } from 'lucide-react';

interface MetricItem {
  label: string;
  value: number;
  color: string;
}

interface MetricCardProps {
  title: string;
  value: number;
  metrics: MetricItem[];
  titleColor?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, metrics, titleColor = 'text-black' }) => {
  return (
    <div className="bg-white rounded shadow-sm border p-3 m-2">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-gray-600">{title}</span>
        <span className={`text-xl font-bold ${titleColor}`}>{value.toLocaleString()}</span>
      </div>
      <div className="space-y-1">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex justify-between items-center text-sm">
            <div className="flex items-center">
              <Circle size={8} fill={metric.color} className="mr-2" />
              <span>{metric.label}</span>
            </div>
            <span>{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;


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

const MetricCard: React.FC<MetricCardProps> = ({ title, value, metrics, titleColor = 'text-gray-900' }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 m-2 transition-all duration-200 hover:shadow-md">
      <div className="flex justify-between mb-3">
        <span className="text-sm text-gray-600 font-medium">{title}</span>
        <span className={`text-xl font-bold ${titleColor}`}>{value.toLocaleString()}</span>
      </div>
      <div className="space-y-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-2">
              <Circle size={8} fill={metric.color} className="mr-2" />
              <span className="text-gray-600">{metric.label}</span>
            </div>
            <span className="font-medium">{metric.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricCard;

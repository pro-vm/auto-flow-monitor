
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

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  metrics, 
  titleColor = 'text-gray-900' 
}) => {
  return (
    <div className="modern-card p-5 m-2">
      <div className="flex justify-between items-start mb-4">
        <span className="text-sm text-gray-600 font-medium">{title}</span>
        <span className={`text-2xl font-bold ${titleColor}`}>
          {value.toLocaleString()}
        </span>
      </div>
      <div className="space-y-3">
        {metrics.map((metric) => (
          <div key={metric.label} 
               className="flex justify-between items-center text-sm group hover:bg-gray-50/50 p-2 rounded-lg transition-all duration-200">
            <div className="flex items-center space-x-2">
              <Circle 
                size={8} 
                fill={metric.color} 
                className="transition-transform duration-200 group-hover:scale-110" 
              />
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

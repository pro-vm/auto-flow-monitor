
import React from 'react';

interface CountCardProps {
  title: string;
  count: number;
  icon?: React.ReactNode;
  textColor?: string;
}

const CountCard: React.FC<CountCardProps> = ({ 
  title, 
  count, 
  icon,
  textColor = "text-dashboard-blue" 
}) => {
  return (
    <div className="bg-white rounded-sm shadow-sm flex flex-col items-center p-3 border">
      <div className="text-sm text-gray-600">{title}</div>
      <div className={`text-xl font-bold ${textColor}`}>{count.toLocaleString()}</div>
    </div>
  );
};

export default CountCard;

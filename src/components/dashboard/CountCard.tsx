
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
  textColor = "text-indigo-600"
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl shadow-lg border border-indigo-100/50 hover:shadow-xl transition-all duration-300 p-3 sm:p-4">
      <div className="flex items-center gap-2 sm:gap-3">
        {icon && (
          <div className="p-1.5 sm:p-2 bg-indigo-100 rounded-lg">
            {icon}
          </div>
        )}
        <div>
          <div className="text-xs sm:text-sm text-gray-600 font-medium">{title}</div>
          <div className={`text-base sm:text-xl font-bold ${textColor}`}>
            {count.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountCard;

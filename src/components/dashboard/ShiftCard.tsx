
import React from 'react';

interface ShiftMetric {
  label: string;
  value: number;
}

interface ShiftCardProps {
  shiftName: string;
  shiftValue: number;
  metrics: ShiftMetric[];
  shiftColor: string;
}

const ShiftCard: React.FC<ShiftCardProps> = ({ 
  shiftName, 
  shiftValue, 
  metrics,
  shiftColor
}) => {
  return (
    <div className="bg-white rounded shadow-sm border mb-3">
      <div className={`text-center py-1 ${shiftColor}`}>{shiftName}</div>
      <div className="text-center py-1 text-xl font-bold">{shiftValue}</div>
      <div className="p-2">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex justify-between text-sm py-1">
            <span>{metric.label}</span>
            <span>{metric.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShiftCard;

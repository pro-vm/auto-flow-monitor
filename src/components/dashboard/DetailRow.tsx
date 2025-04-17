
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DetailRowProps {
  title: string;
  total: number;
  dom: number;
  exp: number;
  ie: number;
  nh: number;
  textColor?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

const DetailRow: React.FC<DetailRowProps> = ({ 
  title, 
  total, 
  dom, 
  exp, 
  ie, 
  nh,
  textColor = "text-dashboard-red", 
  isExpanded = false,
  onToggle
}) => {
  return (
    <div className="mb-3">
      <div className="flex border rounded-sm shadow-sm overflow-hidden">
        <div className="flex-1 bg-white p-3 border-r">
          <div className="text-sm">{title}</div>
          <div className={`text-xl font-bold ${textColor}`}>{total.toLocaleString()}</div>
        </div>
        <div className="flex-1 bg-white p-3 border-r flex flex-col items-center justify-center">
          <div className="text-sm">Dom</div>
          <div className="font-medium">{dom.toLocaleString()}</div>
        </div>
        <div className="flex-1 bg-white p-3 border-r flex flex-col items-center justify-center">
          <div className="text-sm">EXP</div>
          <div className="font-medium">{exp.toLocaleString()}</div>
        </div>
        <div className="flex-1 bg-white p-3 border-r flex flex-col items-center justify-center">
          <div className="text-sm">IE</div>
          <div className="font-medium">{ie.toLocaleString()}</div>
        </div>
        <div className="flex-1 bg-white p-3 flex flex-col items-center justify-center">
          <div className="text-sm">NH</div>
          <div className="font-medium">{nh.toLocaleString()}</div>
        </div>
        <div 
          className="flex items-center justify-center bg-white p-3 cursor-pointer"
          onClick={onToggle}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>
    </div>
  );
};

export default DetailRow;

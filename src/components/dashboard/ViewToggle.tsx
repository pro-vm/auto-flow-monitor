
import React from 'react';
import { cn } from '@/lib/utils';
import { LayoutDashboard, ListFilter } from 'lucide-react';

interface ViewToggleProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="w-full flex px-6 py-3 bg-white/50 backdrop-blur-sm">
      <button 
        className={cn(
          "py-2 px-6 text-sm rounded-l-lg flex items-center gap-2 transition-all duration-200",
          activeView === 'overview' 
            ? "bg-gray-900 text-white" 
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
        onClick={() => onViewChange('overview')}
      >
        <LayoutDashboard size={16} />
        Overview
      </button>
      <button 
        className={cn(
          "py-2 px-6 text-sm rounded-r-lg flex items-center gap-2 transition-all duration-200",
          activeView === 'detailed' 
            ? "bg-gray-900 text-white" 
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        )}
        onClick={() => onViewChange('detailed')}
      >
        <ListFilter size={16} />
        Detailed
      </button>
    </div>
  );
};

export default ViewToggle;

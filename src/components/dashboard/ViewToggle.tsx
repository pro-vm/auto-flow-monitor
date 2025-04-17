
import React from 'react';
import { cn } from '@/lib/utils';

interface ViewToggleProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="w-full flex px-4 py-2 bg-gray-100">
      <button 
        className={cn(
          "py-1 px-6 text-sm rounded-sm",
          activeView === 'overview' 
            ? "bg-gray-700 text-white" 
            : "bg-gray-300 text-gray-700"
        )}
        onClick={() => onViewChange('overview')}
      >
        Overview
      </button>
      <button 
        className={cn(
          "py-1 px-6 text-sm rounded-sm ml-2",
          activeView === 'detailed' 
            ? "bg-gray-700 text-white" 
            : "bg-gray-300 text-gray-700"
        )}
        onClick={() => onViewChange('detailed')}
      >
        Detailed
      </button>
    </div>
  );
};

export default ViewToggle;

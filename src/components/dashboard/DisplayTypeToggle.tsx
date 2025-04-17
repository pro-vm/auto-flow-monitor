
import React from 'react';
import { Grid2X2, LayoutList } from 'lucide-react';

interface DisplayTypeToggleProps {
  displayType: string;
  onDisplayTypeChange: (type: string) => void;
}

const DisplayTypeToggle: React.FC<DisplayTypeToggleProps> = ({ 
  displayType, 
  onDisplayTypeChange 
}) => {
  return (
    <div className="flex items-center justify-end mr-6 mb-2 space-x-4">
      <button
        onClick={() => onDisplayTypeChange('vertical')}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${
          displayType === 'vertical'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Grid2X2 size={16} />
        <span className="text-sm">Vertical</span>
      </button>
      <button
        onClick={() => onDisplayTypeChange('line')}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-all duration-200 ${
          displayType === 'line'
            ? 'bg-gray-900 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <LayoutList size={16} />
        <span className="text-sm">Line</span>
      </button>
    </div>
  );
};

export default DisplayTypeToggle;

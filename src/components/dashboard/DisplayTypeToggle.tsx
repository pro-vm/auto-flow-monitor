
import React from 'react';
import { Circle } from 'lucide-react';

interface DisplayTypeToggleProps {
  displayType: string;
  onDisplayTypeChange: (type: string) => void;
}

const DisplayTypeToggle: React.FC<DisplayTypeToggleProps> = ({ 
  displayType, 
  onDisplayTypeChange 
}) => {
  return (
    <div className="flex items-center justify-end mr-4 mb-2">
      <div className="flex items-center mr-4">
        <input
          type="radio"
          id="vertical"
          name="displayType"
          checked={displayType === 'vertical'}
          onChange={() => onDisplayTypeChange('vertical')}
          className="mr-2"
        />
        <label htmlFor="vertical" className="text-sm">Vertical</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="line"
          name="displayType"
          checked={displayType === 'line'}
          onChange={() => onDisplayTypeChange('line')}
          className="mr-2"
        />
        <label htmlFor="line" className="text-sm">Line</label>
      </div>
    </div>
  );
};

export default DisplayTypeToggle;
